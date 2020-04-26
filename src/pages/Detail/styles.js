import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
  },
  
  banner: {
    height: 350,
    padding: 20,
  },

  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 220,
  },

  genres: {
    color: '#fff',
  },

  main: {
    padding: 20,
  },

  rating: {
    fontWeight: 'bold',
  },

  synopsisTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  synopsisDescription: {
    marginTop: 10,
    color: '#666',
  },

  button: {
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: 'red',
    width: 300,
    height: 60,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }

});

export default styles;