import React, { useState, useEffect, useMemo, useCallback } from "react";
import { View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FAB from "../../components/FAB";

import { styles } from "./styles";

export default function Timer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [secondsEllapsed, setSecondsEllapsed] = useState(0);
  const navigation = useNavigation();

  const progress = useMemo(() => secondsEllapsed / 6, [secondsEllapsed]);
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
  const onAnimationComplete = useCallback(() => {
    if (secondsEllapsed / 60 > 25) {
      setSecondsEllapsed(0);
      setIsPlaying(false);
      navigation.navigate("Congrats");
    }
  }, [secondsEllapsed, navigation]);

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
        fill={progress}
        rotation={0}
        style={styles.progressContainer}
        tintColor="#9080D3"
        backgroundColor="#F9FBF2"
        onAnimationComplete={onAnimationComplete}
      >
        {() => (
          <View style={styles.timeContainer}>
            <Text style={styles.timeEllapsed}>{formatedTimeEllapsed}</Text>
            <Text style={styles.timeUnity}>{timeUnity}</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <View style={styles.timerSettingsContainer}>
        <View style={styles.timerSettingsOption}>
          <MaterialCommunityIcons name="briefcase" size={24} color="#7F7EFF" />
          <Text style={styles.timeText}>25 min</Text>
        </View>
        <View style={styles.timerSettingsOption}>
          <MaterialCommunityIcons name="update" size={24} color="#7F7EFF" />
          <Text style={styles.timeText}>5 min</Text>
        </View>
      </View>
      <FAB name={FABIcon} onPress={handleToggleTimer} />
    </View>
  );
}
