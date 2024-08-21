import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import GradientText from '../../components/GradientText';
import LinearGradient from 'react-native-linear-gradient';
const ModeButton: React.FC = () => {

    const [gradientColors, setGradientColors] = useState<string[]>(['#40505F', '#273747']);

    const switchGradient = () => {
        setGradientColors((prevColors: string[]) =>
        prevColors[0] === '#40505F'
            ? ['#BB9A65', '#775D34'] // New gradient colors
            : ['#40505F', '#273747'] // Original gradient colors
        );
    };
    const [text, setText] = useState<string>('Tap 1 times to turn on/off');
    const [isScaled, setIsScaled] = useState<boolean>(false);
    const scaleAnim = useRef(new Animated.Value(0)).current;

    const handlePress = () => {
        Animated.spring(scaleAnim, {
          toValue: isScaled ? 0 : 1, // Scale to 1.2 if not scaled, otherwise scale back to 1
          friction: 3,
          tension: 40,
          useNativeDriver: true,
        }).start();
        setIsScaled(!isScaled); // Toggle the scale state
        setText(isScaled ? 'Tap 1 times to turn on/off' : 'Hold 3 seconds to contact emergency services');
      };

    return (
        <ScrollView>
            <View className="flex justify-center space-x-2 px-[80px] py-[40px] border-[#6B7176] border-b-[1px]">
                <View className="text-center">
                    <GradientText
                        text="SafeDate Mode"
                        colors={['#F8F1E6', '#BB9A66']}
                        fontSize={30}
                        x={30}
                        y={30} />
                </View>
                <Text className="self-center text-center text-white text-[14px] leading-[24px] mt-[20px]">We highly recommended you to activate SafeDate feature before you go on your date for your own safety</Text>
                <TouchableOpacity onPress={() => { switchGradient(); handlePress()}} className="flex items-center self-center justify-center w-[130px] h-[130px] mt-[40px] relative">
                    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }]} className="z-[0] absolute w-[190px] h-[190px] top-[-30px] left-[-30px] bg-[#BB9A65] opacity-[0.1] rounded-[550px]">
                    </Animated.View>
                    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }]} className="z-[1] absolute w-[160px] h-[160px] top-[-15px] left-[-15px] bg-[#BB9A65] opacity-[0.2] rounded-[550px]">
                    </Animated.View>
                    
                    <LinearGradient
                        className="z-[2] flex flex-1 justify-center items-center w-full rounded-[550px]"
                        colors={gradientColors}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}

                    >
                        <Image
                            className="w-[50px] h-[50px] mb-[2px]"
                            resizeMode="contain"
                            source={require('../../assets/images/on-off.png')}></Image>
                    </LinearGradient>

                </TouchableOpacity>
                <Text className="max-w-[240px] self-center text-center text-[#D7C09C] text-[14px] leading-[24px] mt-[30px]">{text}</Text>
            
            </View>
            <View className="flex justify-center space-x-2 px-[20px]">
                <Text className="text-[#2D3843] font-medium text-[20px] leading-[24px] mt-[30px] mb-[30px]">Features (Disabled)</Text>
            </View>
        </ScrollView>
    );
};

export default ModeButton;
