import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList } from 'react-native';

export default function App() {
  const[result, setResult] = useState('');
  const[firstText, setFirstText] = useState(0);
  const[secondText, setSecondText] = useState(0);
  const[data, setData] = useState([]);


  const plusButtonPressed = () => {
    const sum = Number(firstText) + Number(secondText);
    setResult(sum);
    setData([...data, {key:firstText + ' + ' + secondText + " = " + sum}]);
  }

  const minusButtonPressed = () => {
    const minus = firstText - secondText;
    setResult(minus)
    setData([...data, {key:firstText + ' - ' + secondText + " = " + minus}])
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
      <Text>History: </Text>
      <FlatList data={data} renderItem={({item}) =><Text>{item.key}</Text>}/>
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
