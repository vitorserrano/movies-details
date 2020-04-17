import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: Constants.statusBarHeight + 20,
    // backgroundColor: "#090a1c",
    backgroundColor: "#fff",
  },

  header: {
      flexDirection: 'row',
      alignItems: 'center',
  }, 

  headerText: {
      fontSize: 22,
      fontWeight: 'bold',
      marginLeft: 10,
      color: '#333',
  },

  category: {
      marginTop: 40,
      fontSize: 20,
      fontWeight: 'bold',
  },

});

export default styles;