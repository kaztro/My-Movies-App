import { map, size } from 'lodash';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { getPopularMovies, getMoviesByName } from '../api/movies';
import Card from '../components/Card';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';



const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getPopularMovies().then((response) => {
      setMovies(response.results);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (size(search) > 0) {
      getMoviesByName(search).then((response) => {
        setMovies(response.results);
        setLoading(false);
      });
    }
  }, [search]);

  const onChangeSearch = (e) => {
    console.log(e);
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
      />
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
            <Text style={styles.title}>My Movies App</Text>
            <View style={styles.line}></View>
            {map(movies, (movie, index) => {
              //console.log(movie.id);
              return (
                <Card
                  key={movie.id}
                  index={index}
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
    </SafeAreaView>
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
  input: {
    marginTop: -3,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default HomeScreen;

