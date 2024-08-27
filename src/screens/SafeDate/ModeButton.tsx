import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Animated,
    Alert,
    Linking,
} from 'react-native';
import GradientText from '../../components/GradientText';
import LinearGradient from 'react-native-linear-gradient';
import { useIsIconOnStyle } from './IsIconOnStyleContext';
import FeatureList from './FeatureList';
import SafeDateTopMenu from './SafeDateTopButton';

export const ModeButton: React.FC = () => {


    const [timer, setTimer] = useState(null);

    const phoneNumber = '000000000';
    
    // const [isHolding, setIsHolding] = useState(false);
    const scaleAnim = useRef(new Animated.Value(0)).current;


    const handlePressIn = () => {
        // Alert.alert('a');
        const timeout = setTimeout(() => {
            if (isIconOn) {
              // Perform action when button is held for 3 seconds
              Linking.openURL(`tel:${phoneNumber}`)
              Alert.alert('Your call has been placed');
            }
        }, 2500);
        setTimer(timeout)
        
        if (isIconOn == true) {

        }

        
       
    };

   
    const { isIconOn, setIsIconOn } = useIsIconOnStyle();
    const handleTap = () => {
        Animated.spring(scaleAnim, {
            toValue: isIconOn ? 0 : 1, 
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
        setIsIconOn(!isIconOn)
    };
 

    return (
        <View>
            <SafeDateTopMenu />
            <View className="flex justify-center space-x-2 px-[80px] py-[40px] border-[#6B7176] border-b-[1px]">
                <View className="text-center flex justify-center">
                    <GradientText
                        text="SafeDate Mode"
                        colors={['#F8F1E6', '#BB9A66']}
                        fontSize={30}
                    />
                </View>
                <Text className="font-body text-[14px] self-center text-center text-white leading-[24px] mt-[20px]">
                    We highly recommended you to activate SafeDate feature before you go
                    on your date for your own safety
                </Text>
                <TouchableOpacity
                    onLongPress={handlePressIn}
                    onPress={handleTap}
                    disabled={false}
                    className="flex items-center self-center justify-center w-[130px] h-[130px] mt-[40px] relative">
                    <Animated.View
                        style={[{ transform: [{ scale: scaleAnim }] }]}
                        className="z-[0] absolute w-[190px] h-[190px] top-[-30px] left-[-30px] bg-[#BB9A65] opacity-[0.1] rounded-[550px]"></Animated.View>
                    <Animated.View
                        style={[{ transform: [{ scale: scaleAnim }] }]}
                        className="z-[1] absolute w-[160px] h-[160px] top-[-15px] left-[-15px] bg-[#BB9A65] opacity-[0.2] rounded-[550px]"></Animated.View>

                    <LinearGradient
                        className="z-[2] flex flex-1 justify-center items-center w-full rounded-[550px]"
                        colors={isIconOn ? ['#BB9A65', '#775D34'] : ['#40505F', '#273747']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}>
                        <Image
                            className="w-[50px] h-[50px] mb-[2px]"
                            resizeMode="contain"
                            source={require('../../assets/images/on-off.png')}></Image>
                    </LinearGradient>
                </TouchableOpacity>
                <Text className="max-w-[240px] min-h-[48px] self-center text-center text-[#D7C09C] font-heading text-[14px] leading-[24px] mt-[30px]">
                    {isIconOn
                        ? 'Hold 3 seconds to contact emergency services'
                        : 'Tap 1 times to turn on/off'}
                </Text>
            </View>

            <View className="w-full" pointerEvents={isIconOn ? 'auto' : 'none'}>
                <FeatureList />
                <View className="pt-[20px] mx-[20px] flex flex-column gap-y-[20px]">
                    <TouchableOpacity>
                        <LinearGradient
                            locations={[0, 1]}
                            colors={isIconOn ? ['#bb9a65', '#775d34'] : ['#2D3843', '#2D3843']}
                            useAngle={true}
                            angle={101.24}
                            className="flex flex-row rounded-[800px] px-[20px] h-[56px] justify-center items-center">
                            <Image
                                className={`${isIconOn ? 'opacity-[1]' : 'opacity-[0.2]'
                                    } w-[24px] h-[24px] mr-[15px]`}
                                resizeMode="contain"
                                source={require('../../assets/images/mail.png')}></Image>
                            <Text
                                className={`${isIconOn ? 'opacity-[1]' : 'opacity-[0.2]'
                                    } text-white font-heading text-[16px] font-medium`}>
                                Emergency Message
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className={`${isIconOn ? 'opacity-[1]' : 'opacity-[0.5]'
                            } flex flex-row rounded-[800px] px-[20px] h-[56px] justify-center items-center border-[#D7C09C] border-[1px]`}>
                        <Image
                            className="w-[24px] h-[24px] mr-[15px]"
                            resizeMode="contain"
                            source={require('../../assets/images/contact.png')}></Image>
                        <Text className="text-[#D7C09C] font-heading text-[16px] font-medium">
                            Add Emergency Contacts
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    );
};






