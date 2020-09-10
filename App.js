import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import {Header} from 'react-native-elements'
import { Card } from 'react-native-elements'

import FixedHeader from './components/FixedHeader'
import Timer from './components/Timer'

export default function App() {
    const [duration, setDuration]=useState()
    const [clock, setClock]=useState({})

    const makeClock =()=>{
      setClock({color:"blue"})
    }

    useEffect(()=>{
      
    })
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
              key= {0}
              name="Oven" 
              dur={5} 
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