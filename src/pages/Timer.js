import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function formatSeconds(seconds) {
  if (seconds < 60) {
    return `${seconds} seg`;
  }

  return `${Math.floor(seconds / 60)} min`;
}

export default function Timer() {
  const timerRef = useRef();

  const [timerEnabled, setTimerEnabled] = useState(false);
  const [secondsEllapsed, setSecondsEllapsed] = useState(0);

  function toggleTimer() {
    if (timerEnabled) {
      clearInterval(timerRef.current);

      setTimerEnabled(false);
    } else {
      timerRef.current = setInterval(() => {
        setSecondsEllapsed(state => state + 1);
      }, 1000);

      setTimerEnabled(true);
    }
  }

  return (
    <LinearGradient
      colors={['#E7F3FE', '#9ABEE0']}
      style={styles.container}
    >
      <Text style={styles.title}>Pomodora</Text>

      <AnimatedCircularProgress
        size={300}
        width={12}
        fill={(secondsEllapsed * 100) / 600}
        tintColor="#75A1DE"
        rotation={0}
        backgroundColor="#fff">
        {() => (
          <Text style={styles.progress}>{formatSeconds(secondsEllapsed)}</Text>
        )}
      </AnimatedCircularProgress>

      <TouchableOpacity style={styles.button} onPress={toggleTimer}>

        <MaterialIcons name={timerEnabled ? 'pause' : 'play-arrow'} size={32} color="#FFF" />

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

  title: {
    color: '#1C354F',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 300,
    marginBottom: 80,
  },

  button: {
    width: 72,
    height: 72,
    backgroundColor: '#2E5B9A',
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },

  progress: {
    color: '#1C354F',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})