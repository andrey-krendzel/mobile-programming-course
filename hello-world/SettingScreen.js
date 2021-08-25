import React from 'react';
import{ View  , Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

// Add also imports& export
// This is the  secondpage
export default function SettingScreen({ route, navigation}) {
    const{ user} = route.params;
    return(<View style={styles.container}><Text>Welcometo  settings{user}</Text  ></View >);
};


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
  