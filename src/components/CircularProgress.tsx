import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Animated } from 'react-native';

const CircularProgress = ({ size = 100, strokeWidth = 5, progress = 0 }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const circleRef = useRef();
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 500,
      useNativeDriver: true,
    }).start();

    animatedValue.addListener(v => {
        const maxPercent = (100 * v.value) / 100;
        const strokeDashoffset = circumference - (circumference * maxPercent) / 100;
        if (circleRef?.current) {
          circleRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [progress]);

  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background Circle */}
        <Circle
          stroke="#f8f1e633"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Animated Circle */}
        <Circle
          ref={circleRef}
          stroke="#BB9A65"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotate to start from the top
        />
      </Svg>
      <Text style={[styles.progressText, { fontSize: size / 4 }]}>
        {`${progress}%`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressText: {
    position: 'absolute',
    alignSelf: 'center',
    top: '36%',
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CircularProgress;
