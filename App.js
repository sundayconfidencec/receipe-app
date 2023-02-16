// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.javas to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from "react";
import {Text,View, Button, TextInput, StyleSheet, Image} from "react-native";
import logo from "./assets/logo.png";
function App(){
  return <View style={styles.container}>
    
    <Text>hello worlds</Text>
    <Image source={logo} style={styles.image}/>
    <View style={styles.detailsContainer}>
      <Text style={styles.label}>Name: </Text>
      <Text style={[styles.info, styles.label]}> Sunday Confidence</Text>
    </View>

    <View style={styles.detailsContainer}>
      <Text style={styles.label}>Email: </Text>
      <Text style={[styles.info, styles.label]}> Sundayconfidence@gmail.com</Text>
    </View>

    <View style={styles.detailsContainer}>
      <Text style={styles.label}>Gender: </Text>
      <Text style={[styles.info, styles.label]}> Female</Text>
    </View>

    </View>

}
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: "white",
  marginHorizontal: 5
},
image:{
  marginTop: 100,
width: 200,
height:200,
marginBottom: 30,
alignSelf: "center",
borderRadius: 100
},
detailsContainer:{
  flexDirection: "row",
  marginVertical: 5
},
label:{
borderColor: "black",
borderWidth: 1,
fontWeight: "bold",
fontSize: 10,
flex:2.5,
paddingHorizontal: 5
},
info:{
flex:7.5,

}
});
export default App;