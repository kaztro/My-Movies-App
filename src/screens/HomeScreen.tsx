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
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';

import SplashScreen from '../screens/SplashScreen';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularMovies().then((response) => {
      setMovies(response.results);
      setLoading(false);
    });
  }, []);

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

  const loadingAnimation = () => {
    return (
      <LottieView
        source={require('../assets/loading.json')}
        autoPlay
        loop
        speed={0.5}
      />
    )
  }

  return (
    <SafeAreaView style={styles.view}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {loadingAnimation()}
          </View>
        ) : size(movies) == 0 ? (
          <Text style={styles.text}>We cannot find any movie</Text>
        ) : (
          <View style={styles.view}>
            <Text style={styles.title}>My Movies App</Text>
            <View style={styles.line}></View>
            {popMovies()}
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

