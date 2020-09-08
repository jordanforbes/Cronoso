import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import {Header} from 'react-native-elements'
import { Card } from 'react-native-elements'

import FixedHeader from './components/FixedHeader'
import Timer from './components/Timer'

export default function App() {
    return ( 
        <View style = {{backgroundColor: 'black', flex: 1,}} >
            <StatusBar 
              hidden={true}
              barStyle="light-content"
            />
            <FixedHeader 
              title="CRONOSO"
            />
            
            <Timer
             name="Oven" 
             h={"1"} 
             m={"30"} 
             s={"00"} 
             length={"1:30:00"} 
             color="red"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    title:{
      color:'white'
    }
});