import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, StyleSheet } from 'react-native';


const SwitchS: React.FC = () => {

    // const [isHolding, setIsHolding] = useState(false);
    const transAnim = useRef(new Animated.Value(0)).current;
    const [isActive, setIsActive] = useState(false);
    const handleTap = () => {
        Animated.spring(transAnim, {
            toValue: isActive ? 0 : 26,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
        setIsActive(!isActive)
    };

    return (
        <TouchableOpacity onPress={handleTap} style={styles.container}>
            <Animated.View
                style={[
                    { transform: [{ translateX: transAnim }] },
                    styles.animatedView,
                    isActive ? styles.activeBorder : styles.inactiveBorder,
                ]}
            />
            <View
                style={[
                    styles.innerView,
                    isActive ? styles.activeBackground : styles.inactiveBackground,
                ]}
            />
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 52,
        height: 26,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    animatedView: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        width: 26,
        height: 26,
        borderWidth: 4,
        backgroundColor: '#ffffff',
        borderRadius: 100,
    },
    activeBorder: {
        borderColor: '#BB9A65',
    },
    inactiveBorder: {
        borderColor: '#40505F',
    },
    innerView: {
        zIndex: 1,
        width: 52,
        height: 7,
        borderRadius: 20,
    },
    activeBackground: {
        backgroundColor: '#BB9A65',
    },
    inactiveBackground: {
        backgroundColor: '#40505F',
    },
});
export default SwitchS;
