import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

export default function Button({ text, icon, style, onPress }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {icon && (
        <View style={styles.iconContainer}>
          <Feather name={icon} size={24} color="#FFF" />
        </View>
      )}
    </TouchableOpacity>
  );
}
