import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useIsIconOnStyle } from './IsIconOnStyleContext';
import LinearGradient from 'react-native-linear-gradient';

const SafeDateTopMenu: React.FC = () => {
    const { isIconOn, setIsIconOn } = useIsIconOnStyle();

    return (
        <View className="flex flex-row justify-between items-center space-x-2 px-[20px]">
            <TouchableOpacity className="w-[40px]">
                <Image
                    className="w-[32px] h-[28px]"
                    resizeMode="contain"
                    source={require('../../assets/images/heart.png')}></Image>
            </TouchableOpacity>

            <View>
                <LinearGradient
                    locations={[0, 1]}
                    colors={isIconOn ? ['#bb9a65', '#775d34'] : ['#3A4A5A', '#3A4A5A']}
                    useAngle={true}
                    angle={101.24}
                    className="py-[12px] px-[24px] rounded-[800px]">
                    <Text className="text-white text-[16px] font-medium">
                        {isIconOn ? 'Enabled' : 'Disable'}
                    </Text>
                </LinearGradient>
            </View>

            <TouchableOpacity className="w-[40px]">
                <Image
                    className="w-[22px] h-[24px]"
                    resizeMode="contain"
                    source={require('../../assets/images/call.png')}></Image>
            </TouchableOpacity>
        </View>
    );
};

export default SafeDateTopMenu;
