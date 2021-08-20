import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList } from 'react-native';

export default function App() {
  const[product, setProduct] = useState('');
  const[data, setData] = useState([]);

  const addButtonPressed = () => {
    setData([...data, {key:product}]);
  }

  const clearButtonPressed = () => {
    setData([]);
  }


  return (
    <View style={styles.container}>
      <TextInput style={{width:200, borderColor:'gray', borderWidth:1}} 
      onChangeText={text=> setProduct(text)} value={product} />

      <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
        <Button onPress={addButtonPressed} title="Add" />
        <Button onPress={clearButtonPressed} title="Clear" />
      </View>
      <Text style={styles.bluetext}>Shopping List: </Text>
      <FlatList data={data} renderItem={({item}) =><Text>{item.key}</Text>}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  bluetext:{
    fontSize:18,
    color:'blue'
  },
});
