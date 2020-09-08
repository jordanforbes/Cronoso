import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements'

const FixedHeader = props => (
        <Header
            leftComponent={{
                icon:'menu',
                color:'#fff'
            }}
            centerComponent={{
                text:'CRONOSO',
                style:{color:'#fff'}
            }}
            rightComponent={{
                icon: 'home',
                color: '#fff'
            }}
        />
    );

export default FixedHeader;