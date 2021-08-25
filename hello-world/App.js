import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';  
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen'
import { createStackNavigator} from'@react-navigation/stack';


export default function App() {
  const Stack = createStackNavigator();

  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={({ route }) => ({ tabBarIcon: ({ focused, color, size }) => {
       let iconName;
       if (route.name === 'Home') {iconName= 'md-home';} 
       else if (route.name === 'Settings') {iconName= 'md-settings';}
       return <Ionicons name={iconName} size={size} color={color} />; 
       },})}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
    </NavigationContainer>);}


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
