import { map, size } from 'lodash';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import { getMoviesByName } from '../api/movies';
import Card from '../components/Card';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';

const Search = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [sMovies, setSMovies] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (size(search) >= 0) {
            getMoviesByName(search).then((response) => {
                setSMovies(response.results);
                setLoading(false);
            });
        }
    }, [search]);

    const onChangeSearch = (e) => {
        if (size(e) > 0) {
            setLoading(true);
        } else {
            setLoading(false);
        }
        setSearch(e);
    };

    return (
        <SafeAreaView style={styles.view}>
            <Searchbar
                placeholder="Search a movie"
                iconColor="#4E73DF"
                icon="arrow-left"
                style={styles.input}
                inputStyle={{ color: '#000' }}
                onChangeText={onChangeSearch} 
                value={search} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {loading ? (
                    <View>
                        <LottieView
                            source={require('../assets/loading.json')}
                            autoPlay
                            loop={false}
                            speed={0.5}
                        />
                    </View>
                ) : size(sMovies) == 0 ? (
                    <Text style={styles.text}>We cannot find any movie</Text>
                ) : (
                    <View style={styles.container}>
                        {map(sMovies, (movie) => {
                            return (
                                <Card
                                    key={movie.id}
                                    textBtn="Know more"
                                    color={'black'}
                                    movie={movie}
                                    navigation={navigation}
                                />
                            );
                        })}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Search;

const styles = StyleSheet.create({
    input: {
        marginTop: 3,
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    view: {
        marginBottom: 50,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'gray',
    },
});