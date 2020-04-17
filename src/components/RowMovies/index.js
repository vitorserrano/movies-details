import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const RowMovies = ({ item, onPress }) => {
  const loadGenres = () => {
    console.log(item.genres.join(", "));
  };

  const loadStars = () => {
    let stars = "";
    return stars.padStart(item.rating, "⭐");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.cover} source={{ uri: item.large_cover_image }} />
      <View style={styles.description}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.genre}>{item.genres.join(", ")}</Text>

        {/* <Text style={styles.rating}>{item.rating}</Text> */}
        {/* <Text style={styles.rating}>{loadStars()}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default RowMovies;
