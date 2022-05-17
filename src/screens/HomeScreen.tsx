import { map, size } from 'lodash';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { getPopularMovies } from '../api/movies';
import Card from '../components/Card';
//import Colors from '../constants/Colors';


const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularMovies().then((response) => {
      setMovies(response.results);
      setLoading(false);
    });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {loading ? (
        <ActivityIndicator
          style={{
            marginTop: 200,
          }}
          size="large"
          color="#0000ff"
        />
      ) : size(movies) == 0 ? (
        <Text style={styles.text}>No se encontraron peliculas</Text>
      ) : (
        
        <View style={styles.view}>
          <Text style={styles.title}>Popular Movies</Text>
          <View style={styles.line}></View>
          {map(movies, (movie) => {
            console.log(movies);
            return (
              <Card
                key={movie.id}
                textBtn="Know more"
                color={'red'}
                movie={movie}
                navigation={navigation}
              />
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

/**
 *@ignore
 */
const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    marginTop: 20,
    fontSize: 30,
    color: '#566573',
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC',
  },
  text: {
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
    fontSize: 20,
    color: 'gray',
  },
});

export default HomeScreen;