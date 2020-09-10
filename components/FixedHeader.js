import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements'

const FixedHeader = props => (
        <Header
            backgroundColor={"black"}
            leftComponent={{
                icon:'menu',
                color:'#fff'
            }}
            centerComponent={{
                text:'CRONOSO',
                style:{color:'#fff'}
            }}
            rightComponent={{
                icon: 'add',
                color: '#fff'
            }}
        />
    );

export default FixedHeader;