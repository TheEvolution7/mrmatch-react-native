import React, {} from 'react';
import { ImageBackground, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Container from '../../components/Container';
import LinearGradient from 'react-native-linear-gradient';
const Stack = createNativeStackNavigator();
const SafeDateTutorial2: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <ImageBackground className="flex flex-1 flex-row justify-center items-center" source={require('../../assets/images/sd-3.jpg')} resizeMode="cover">
                <TouchableOpacity
                    className="flex-1 w-full h-full"
                    onPress={() => {
                        navigation.navigate('SafeDateTutorial4');
                    }}>
                </TouchableOpacity>
                {/* <View className="ml-[20px] mr-[20px] my-[30px]">
                    <LinearGradient
                        locations={[0, 0.1, 0.2, 0.7]}
                        colors={['#BB9A65','#BB9A6570','#BB9A653F', '#BB9A6500']}
                        useAngle={true}
                        angle={-130}
                        className="border-[1px] border-[#BB9A65] rounded-[21px] bg-[#2C3843]">
                        <Image 
                            className="w-full h-[50vw] rounded-t-[21px]" 
                            resizeMode="cover"
                            source={require('../../assets/images/sd-bn.jpg')}></Image>
                        <View className="border-[#707070] border-b-[2px] mb-[25px] pt-[25px] pb-[25px]">
                            <Text className="text-white text-[23px] font-heading font-medium text-center">Welcome to SafeDate Mode</Text>
                        </View>
                        <View className="ml-[20px] mr-[20px] mb-[20px]">
                            <Text className="text-[#F8F1E6] font-body text-[16px] opacity-[0.5] mb-[30px] leading-[20px] text-center">
                                Using this advance safety mode when going out on dates to keep yourself completely safe with real-time location tracking, safety checking, emergency services and contact
                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('SafeDateTutorial1');
                                }}>
                                <LinearGradient
                                    locations={[0, 1]}
                                    colors={['#bb9a65', '#775d34']}
                                    useAngle={true}
                                    angle={101.24}
                                    className="flex flex-row rounded-[800px] px-[20px] h-[56px] justify-center items-center mb-[20px]">
                                    <Text
                                        className="text-white font-heading text-[18px] font-medium">
                                        Start Tutorial
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity
                                className="flex flex-row rounded-[800px] px-[20px] h-[56px] justify-center items-center bg-[#42505D]">
                            
                                <Text className="text-white font-heading text-[18px] font-medium">
                                    Skip
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                    
                </View> */}
            </ImageBackground>
            
            
        </Container>
    );
};

export default SafeDateTutorial2;
