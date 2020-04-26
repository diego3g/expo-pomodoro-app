import React, { useState, useEffect, useMemo, useCallback } from "react";
import { View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import FAB from "../../components/FAB";

import { styles } from "./styles";

export default function Timer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [secondsEllapsed, setSecondsEllapsed] = useState(0);

  const progressFill = useMemo(() => secondsEllapsed / 6, [secondsEllapsed]);
  const formatedTimeEllapsed = useMemo(() => {
    if (secondsEllapsed > 60) {
      return Math.floor(secondsEllapsed / 60);
    }

    return secondsEllapsed;
  }, [secondsEllapsed]);
  const timeUnity = useMemo(() => {
    if (secondsEllapsed < 60) {
      return "seconds";
    } else {
      return "minutes";
    }
  }, [secondsEllapsed]);
  const FABIcon = useMemo(() => (isPlaying ? "pause" : "play"), [isPlaying]);

  const handleToggleTimer = useCallback(() => setIsPlaying(!isPlaying), [
    isPlaying,
  ]);

  useEffect(() => {
    if (isPlaying) {
      const time = setInterval(() => {
        setSecondsEllapsed(secondsEllapsed + 1);
      }, 1000);

      return () => {
        clearInterval(time);
      };
    }
  }, [isPlaying, secondsEllapsed]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodora</Text>
      <AnimatedCircularProgress
        size={260}
        width={5}
        fill={progressFill}
        rotation={0}
        style={styles.progressContainer}
        tintColor="#9080D3"
        backgroundColor="#F9FBF2"
      >
        {() => (
          <View style={styles.timeContainer}>
            <Text style={styles.timeEllapsed}>{formatedTimeEllapsed}</Text>
            <Text style={styles.timeUnity}>{timeUnity}</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <FAB name={FABIcon} onPress={handleToggleTimer} />
    </View>
  );
}
