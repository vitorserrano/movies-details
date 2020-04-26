import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Text, Image } from "react-native";

import RowMovies from "../../components/RowMovies";

import styles from "./styles";

import api from "../../services/api";

const Home = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    try {
      const response = await api.get("/list_movies.json");
      const content = response.data;
      const { movies: list } = content.data;

      setMovies(list);
    } catch (error) {
      alert(error.message);
    }
  };

  const callDetail = (item) => {
    navigation.navigate("Detail", { movie: item });
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTextBold}>Movies </Text>
        <Text style={styles.headerText}>Details</Text>
      </View>

      <Text style={styles.category}>Recents</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        data={movies}
        renderItem={({ item }) => (
          <RowMovies
            item={item}
            onPress={() => {
              callDetail(item);
            }}
          />
        )}
      ></FlatList>
    </View>
  );
};

export default Home;
