import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import { IconButton, Text, Title } from 'react-native-paper';
import { getMovieById } from '../api/movies';
import { ScrollView } from 'react-native-gesture-handler';
import { map, size } from 'lodash';
import { setCategory } from 'react-native-sound';

const DetailsScreen = ({ route }) => {
    const { id } = route.params;
    const [visible, setVisible] = useState(false);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMovieById(id).then((response) => {
            setMovie(response);
        });
    }, []);

    if (!movie) return null;

    const imageURL = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <InfoImage path={imageURL} />
                <InfoTitle movie={movie} />
                <Text style={styles.overview}>{movie.overview}</Text>
                <InfoFooter movie={movie} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default DetailsScreen;

/**
 *@ignore
 */
const InfoImage = ({ path }) => {
    return (
        <View style={styles.viewPoster}>
            <Image style={styles.poster} source={{ uri: path }} />
        </View>
    );
};

/**
 *@ignore
 */
const InfoTitle = ({ movie }) => {
    return (
        <View style={styles.viewInfo}>
            <Title style={{ color: '#F29F05', fontWeight: 'bold', fontSize: 23, marginTop: 20 }}>
                {movie.title}
            </Title>
        </View>
    );
};

const InfoFooter = ({ movie }) => {
    const {
        genres,
        production_companies
    } = movie;
    return (
        <View style={styles.viewInfo}>
            <Text style={styles.lists}>Genres: {map(genres, (genre) => {
                console.log(genre.name);
                return genre.name;
            })}</Text>
            <Text style={styles.lists}>Production Companies: {map(production_companies, (pro) => {
                return pro.name;
            })}</Text>
        </View>
    );
};

/**
 *@ignore
 */
const styles = StyleSheet.create({
    viewPoster: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    poster: {
        width: '100%',
        height: 500,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        resizeMode: 'contain'
    },
    info: {
        backgroundColor: '#fff',
        marginTop: -40,
        marginRight: 30,
        width: 60,
        height: 60,
        borderRadius: 100,
        borderColor: '#000',
        borderWidth: 0.15,
    },
    viewInfo: {
        marginHorizontal: 30,
    },
    overview: {
        marginHorizontal: 30,
        marginTop: 20,
        textAlign: 'justify',
        color: 'black',
        fontSize: 16,
    },
    lists: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        color: 'black',
        fontSize: 15,
    }
});