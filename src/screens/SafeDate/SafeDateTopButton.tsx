import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import GradientText from '../../components/GradientText';

const SafeDateScreen: React.FC = () => {
    return (
        <View className="flex flex-row justify-between items-center space-x-2 px-[20px]">
            <TouchableOpacity className="w-[40px]">
                <Image
                    className="w-[32px] h-[28px]"
                    resizeMode="contain"
                    source={require('../../assets/images/heart.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity className="py-[12px] px-[24px] bg-[#3A4A5A] rounded-[800px]">
                <Text className="text-white">Disable</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[40px]">
                <Image
                    className="w-[22px] h-[24px]"
                    resizeMode="contain"
                    source={require('../../assets/images/call.png')}></Image>
            </TouchableOpacity>
           
        </View>

        
    );
};

export default SafeDateScreen;
