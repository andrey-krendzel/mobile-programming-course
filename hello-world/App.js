import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default function App() {
  const[text, setText] = useState('');
  const[data, setData] = useState([]);
  const Tab = createBottomTabNavigator();

  const buttonPressed = () => {
    setData([...data, {key:text }]);
    setText('' );
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello World!</Text>
      <Button onPress={buttonPressed} title="Press me" />
      <TextInput style={{width:200, borderColor:'gray', borderWidth:1}} onChangeText={text=> setText(text)} value={text} />
      <Image style={{  width:250, height:100 }} source={require('./img/logo.png')}  />
      <Text style={styles.alerttext}>Red text</Text>
      <FlatList data={data} renderItem={({item}) =><Text>{item.key}</Text>}/>
      
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alerttext:{
    fontSize:18,
    color:'red'
  },
});
