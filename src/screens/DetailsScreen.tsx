import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import { IconButton, Text, Title } from 'react-native-paper';
import { getMovieById } from '../api/movies';
import { ScrollView } from 'react-native-gesture-handler';
import { map, size } from 'lodash';

const DetailsScreen = ({ route }) => {
    const { id } = route.params;
    const [visible, setVisible] = useState(false);
    const [movie, setMovie] = useState(null);

    console.log(id);

    useEffect(() => {
        getMovieById(id).then((response) => {
            setMovie(response);
            //console.log(response);
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
            <Title style={{ color: '#F29F05', fontWeight: 'bold', fontSize: 23 }}>
                {movie.title}
            </Title>
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
        resizeMode: 'stretch'
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
    viewRating: {
        marginHorizontal: 30,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewModal: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    viewFooter: {
        marginVertical: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerItem: {
        borderRadius: 100,
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderColor: '#F87311',
        borderWidth: 2,
    },
    textItem: {
        fontFamily: 'NunitoSans-Bold',
        textAlign: 'center',
        fontSize: 13,
        color: '#000',
    },
    overview: {
        fontFamily: 'NunitoSans-Bold',
        marginHorizontal: 30,
        marginTop: 20,
        textAlign: 'justify',
        color: '#929292',
        fontSize: 16,
    },
    imgSponsor: {
        width: 160,
        height: 100,
        alignSelf: 'center',
        marginTop: 4,
        marginBottom: 2,
    },
});