import React from 'react';
import { View, Text, Dimensions, Animated } from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const CircleClock = props =>{
    return(
        <CountdownCircleTimer
            isPlaying
            duration={10}
            colors={[
                ['#004777', 0.4],
                ['#F7B801', 0.4],
                ['#A30000', 0.2],
            ]}
            strokeWidth={40}
            strokeLinecap={"round"}
        >
            {({ remainingTime, animatedColor }) => (
                <Animated.Text style={{ color: animatedColor }}>
                    {remainingTime}
                </Animated.Text>
            )}
        </CountdownCircleTimer>
    )
}

export default CircleClock;
