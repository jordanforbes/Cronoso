import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Timer = props => {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.length}>
                {props.h}:{props.m}:{props.s}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'gray',
        borderRadius:5,
        width: 200,
    },
    name:{
        color:'red',
        fontSize:20
    },
    length:{
        color:'white'
    }
})
export default Timer;