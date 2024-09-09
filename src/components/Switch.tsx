import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';


const SwitchS: React.FC = () => {

    // const [isHolding, setIsHolding] = useState(false);
    const transAnim = useRef(new Animated.Value(0)).current;
    const [ isActive, setIsActive ] = useState(false);
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
        <TouchableOpacity onPress={handleTap} className="w-[52px] h-[26px] flex flex-column justify-center items-center relative">
            <Animated.View style={[{ transform: [{ translateX: transAnim }] }]} className={`top-[0px] left-[0] absolute z-[2] w-[26px] h-[26px] border-[4px] ${isActive ? 'border-[#BB9A65]' : 'border-[#40505F]' }  bg-[#ffffff] rounded-[100px]`}></Animated.View>
            <View className={`z-[1] w-[52px] h-[7px] ${isActive ? 'bg-[#BB9A65]' : 'bg-[#40505F]'} rounded-[20px]`}></View>
        </TouchableOpacity>
    );
};

export default SwitchS;
