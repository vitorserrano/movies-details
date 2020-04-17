import React from 'react';
import { useRoute } from "@react-navigation/native";
import { Text } from 'react-native';

const Detail = () => {
    const route = useRoute();

    const { movie } = route.params;

    return (
        <Text style={{color: '#fff'}}>{movie.title}</Text>
    );
};

export default Detail;