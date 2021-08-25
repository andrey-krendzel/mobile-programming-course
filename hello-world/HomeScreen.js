import React from 'react';
import{ View  , Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({navigation}) {
    return(<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Helloscreen</Text>
        <Button onPress={() => navigation.navigate('Settings', {user: 'Mike'})}
        title="Settings"/></ View>);}

