import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginRight: 30,
    },
    
    cover: {
        width: 300,
        height: 450,
        borderRadius: 50,
    },

    title: {
        marginTop: 15,
        fontSize: 22,
        maxWidth: 280,
        fontWeight: 'bold',
    },

    genre: {
        color: '#6666',
        fontSize: 16,
        flexDirection: "row",
    },

    rating: {
        marginTop: 8,
        color: 'yellow',
        fontSize: 12,
    }
});

export default styles;