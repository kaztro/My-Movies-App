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
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sMovies, setSMovies] = useState(null);

  useEffect(() => {
    getPopularMovies().then((response) => {
      setMovies(response.results);
      setLoading(false);
    });
  }, []);

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

  const popMovies = () => {
    return (
      map(movies, (movie) => {
        //console.log(movie.id);
        return (
          <Card
            key={movie.id}
            textBtn="Know more"
            color={'black'}
            movie={movie}
            navigation={navigation}
          />
        );
      })
    )
  }

  const searchMovies = () => {
    return (
      map(sMovies, (movie) => {
        return (
          <Card
            key={movie.id}
            textBtn="Know more"
            color={'black'}
            movie={movie}
            navigation={navigation}
          />
        );
      })
    )
  }

  return (
    <SafeAreaView style={styles.view}>
      <Searchbar
        placeholder="Search a movie"
        iconColor="#4E73DF"
        icon="magnify"
        style={styles.input}
        inputStyle={{ color: '#000' }}
        onChangeText={onChangeSearch} value={search} />
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
        ) : size(movies) == 0 ? (
          <Text style={styles.text}>We cannot find any movies</Text>
        ) : (
          <View style={styles.view}>
            <Text style={styles.title}>My Movies App</Text>
            <View style={styles.line}></View>
            {size(sMovies) == 0 ? popMovies() : searchMovies()}
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
    marginBottom: 45
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
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
    marginTop: 0,
    height: 60
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default HomeScreen;

