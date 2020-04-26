import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const RowMovies = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.cover} source={{ uri: item.large_cover_image }} />
      <View style={styles.description}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.genre}>{item.genres.join(", ")}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RowMovies;
