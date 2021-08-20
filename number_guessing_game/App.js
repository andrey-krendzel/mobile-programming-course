import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[guess, setGuess] = useState('');
  const[number, setNumber] = useState('');
  const[numberOfGuesses, setNumberOfGuesses] = useState(0);

  useEffect(() => {
    setNumber(Math.floor(Math.random() * 100) + 1)
  }, []);
  
  

  const makeGuess = () => {
    console.log(number)
    setNumberOfGuesses(numberOfGuesses + 1);
    if(guess < number){
      Alert.alert('Your guess ' + guess + ' is too low.')
    }
    else if(guess > number){
      Alert.alert('Your guess ' + guess + ' is too high.')
    } else {
      Alert.alert('Your guessed the number in ' + numberOfGuesses + ' guesses.')
    }
  }

  return (
    <View style={styles.container}>
      <Text>Guess a numbe between 1-100:</Text>
      <TextInput style={{width:200, borderColor:'gray', borderWidth:1}} 
      onChangeText={guess => setGuess(guess)} value={guess} />
      <Button onPress={makeGuess} title="Make Guess" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
