import React from 'react';
import {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, ButtonGroup } from 'react-native-elements';

import CircleClock from './CircleClock.tsx'

const Timer = props => {
    
    const buttons=['Elapsed', 'To Go']
    return (
        // <View style={styles.card}>
        //     <Text style={styles.name}>{props.name}</Text>
        //     <Text style={styles.length}>
        //         {props.h}:{props.m}:{props.s}
        //     </Text>
        // </View>
        <Card>
            <Card.Title
            style={{float: 'left'}}
            >Oven
            </Card.Title>
            <ButtonGroup
                buttons={buttons}
            />
            <Text>Length</Text>
            <CircleClock dur={props.dur}/>
        </Card>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'gray',
        borderRadius:5,
        marginLeft:-60,
        width: 300,
        height:200
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