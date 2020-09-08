import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Header from './components/Header'

export default function App() {
    return ( 
        <View style = {{backgroundColor: 'black', padding:100, flex: 1,}} >
            <Header title="CRONOSO"/>
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