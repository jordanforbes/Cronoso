import React from 'react';
import { View, Text, Dimensions, Animated } from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const CircleClock = props =>{

    return(
        <CountdownCircleTimer
            isPlaying
            duration={props.dur}
            colors={[
                ['blue', 1],
               
            ]}
            strokeWidth={40}
            strokeLinecap={"round"}
        >
            {({ remainingTime, animatedColor }) => (
                <Animated.Text style={{ color: 'blue' }}>
                    {remainingTime}
                </Animated.Text>
            )}
        </CountdownCircleTimer>
    )
}

export default CircleClock;
