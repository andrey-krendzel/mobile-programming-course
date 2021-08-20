import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';

export default function App() {
  const[result, setResult] = useState(0);
  const[firstText, setFirstText] = useState(0);
  const[secondText, setSecondText] = useState(0);

  const plusButtonPressed = () => {
    setResult(Number(firstText) + Number(secondText))
  }

  const minusButtonPressed = () => {
    setResult(firstText - secondText)
  }

  return (
    <View style={styles.container}>
      <Text>Results: {result}</Text>
      <TextInput style={{width:200, borderColor:'gray', borderWidth:1}} 
      onChangeText={text=> setFirstText(text)} value={firstText} />
      <TextInput 
      style={{width:200, borderColor:'gray', borderWidth:1}} 
      onChangeText={text=> setSecondText(text)} value={secondText} />
      <Button onPress={plusButtonPressed} title="+" />
      <Button onPress={minusButtonPressed} title="-" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
