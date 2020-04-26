import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#fff",
  },

  header: {
      flexDirection: 'row',
      alignItems: 'center',
  }, 

  headerTextBold: {
    fontSize: 20,
},

  headerText: {
      fontSize: 20,
      color: '#333',
      fontWeight: '100',
  },

  category: {
      marginTop: 40,
      fontSize: 20,
      fontWeight: 'bold',
  },

});

export default styles;