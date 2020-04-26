import React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Linking } from 'expo';

import { Feather } from '@expo/vector-icons';

import styles from './styles';

const Detail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    
    const { movie } = route.params;

    const navigatieBack = () => {
        navigation.goBack();
    }

    const callYoutube = () => {
        Linking.openURL(movie.url);
    };

    const Rating = (rating) => {
        return rating * 100 / 10;
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.banner}
                source={{ uri: movie.background_image }}
            >   
                <TouchableOpacity onPress={navigatieBack}>
                    <Feather name="arrow-left" color="#fff" size={30} />
                </TouchableOpacity>
                <Text style={styles.title}>{movie.title_long}</Text>
                <Text style={styles.genres}>{movie.genres.join(", ")}</Text>
            </ImageBackground>

            <ScrollView style={styles.main}>
                <Text
                    style={{ ...styles.rating, color: movie.rating > 6 ? '#11c770' : 'orange' }}
                >{Rating(movie.rating)}% relevance</Text>

                <Text style={styles.synopsisTitle}>Synopsis</Text>
                <Text style={styles.synopsisDescription}>{movie.synopsis}</Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={callYoutube}
                >
                    <Text style={styles.buttonText}>Watch on Youtube</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Detail;