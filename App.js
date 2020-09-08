import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Header from './components/Header'
import Timer from './components/Timer'

export default function App() {
    return ( 
        <View style = {{backgroundColor: 'black', padding:100, flex: 1,}} >
            <Header title="CRONOSO"/>
            <Timer name="Oven" h={"1"} m={"30"} s={"00"} length={"1:30:00"} color="red"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
      color:'white'
    }
});