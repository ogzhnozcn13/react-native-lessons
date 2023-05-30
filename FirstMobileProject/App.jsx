
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Card from './src/components/Card';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card_container}>
      <Text style={styles.card_title}>deneme</Text>
      <Text style={styles.card_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste quod asperiores sequi dignissimos quisquam quas rem, dolor animi illum.</Text>
      <Text style={styles.button_container}>Button</Text>
    </View>
    <Card/>
    <Card/>
    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"red"
  },
  card_container:{
    backgroundColor:"yellow",
    margin:15,
    borderWidth:3,
    borderRadius:10
  },
  card_title:{
    fontSize:30,
    fontWeight:"bold",
    margin:10
  },
  card_text:{
    fontSize:15,
    margin:10
  },
  button_container:{
    backgroundColor:"blue",
    padding:35
  }
})


export default App;
