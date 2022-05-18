import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';

const Card = ({ movie, color, textBtn, navigation }) => {
    const { id, title, poster_path, release_date, overview, vote_average } = movie;

    const imageURL = `https://image.tmdb.org/t/p/original${poster_path}`;

    return (
        <TouchableOpacity style={styles.card} 
            onPress={() => navigation.navigate('details', { id })}>
            <View style={[styles.tituloView, { backgroundColor: color }]}>
                <Text style={styles.titulo}>{title}</Text>
            </View>
            <Image source={{uri: imageURL}} style={styles.img} />
            <View style={[styles.subTituloView, { backgroundColor: 'black' }]}>
                <Text style={styles.overview}>Overview:{"\n"}{overview}</Text>
            </View>
            <View style={styles.moreView}>
                    <Text style={styles.releaseDate}>Release date: {release_date}</Text>
                    <Text style={styles.averageVote}>Average vote: {vote_average}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        marginBottom: 80,
        marginTop: 30,
        width: '90%',
        height: 400,
    },
    viewCard: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    tituloView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    moreView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: -145
    },
    titulo: { fontSize: 19, color: 'yellow', fontWeight: 'bold', textAlign: 'center' },
    overview: { fontSize: 10, color: 'yellow', marginBottom: 20, marginTop: 20, marginLeft: 10, marginRight: 10, textAlign: 'justify', fontWeight: 'bold'},
    releaseDate: { fontSize: 12, backgroundColor: 'black', opacity: 0.8, color: 'yellow', fontWeight: 'bold', textAlign: 'center', borderRadius: 8, width: '52%'},
    averageVote: { fontSize: 12, backgroundColor: 'black', opacity: 0.8, color: 'yellow', fontWeight: 'bold', textAlign: 'center', borderRadius: 8, width: '36%'},
    subTituloView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        borderBottomRightRadius: 15, 
        borderBottomLeftRadius: 15,
        marginTop: -120,
        opacity: 0.7
    },
    button: {
        paddingVertical: 7,
        borderRadius: 10,
        width: '35%',
        opacity: 0.8,
        height: 40,
        marginTop: -150,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        opacity: 1,
    },
    img: {
        width: '100%',
        height: '90%',
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        resizeMode: 'stretch'
    },
});