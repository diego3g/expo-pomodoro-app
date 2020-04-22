import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import bannerImg from '../assets/banner.png';

export default function Welcome() {
  const navigation = useNavigation();

  function navigateToTimer() {
    navigation.navigate('Timer');
  }

  return (
    <LinearGradient
      colors={['#E7F3FE', '#9ABEE0']}
      style={styles.container}
    >
      <Image style={styles.banner} source={bannerImg} />

      <Text style={styles.title}>Staying focused at work isn’t easy!</Text>

      <TouchableOpacity style={styles.button} onPress={navigateToTimer}>
        <MaterialIcons name="chevron-right" size={32} color="#FFF" />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  banner: {
    alignSelf: 'flex-end'
  },

  title: {
    color: '#1C354F',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 300,
    marginVertical: 80,
  },

  button: {
    width: 72,
    height: 72,
    backgroundColor: '#2E5B9A',
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
})