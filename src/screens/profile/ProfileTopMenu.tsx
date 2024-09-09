import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ProfileTopMenu: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View className="flex flex-row justify-between items-center space-x-2 px-[20px] pb-[15px]">
            <View className="flex-1">
                <TouchableOpacity>
                    <Image
                        className="w-[32px] h-[28px]"
                        resizeMode="contain"
                        source={require('../../assets/images/heart.png')}></Image>
                </TouchableOpacity>
            </View>
            

            <View className="flex-1 text-center">
                <Text className="text-[#D7C09C] text-[20px] font-heading text-center font-medium">
                    Profile
                </Text>
            </View>

            <View className="flex flex-row gap-[16px] flex-1 justify-end">
                <TouchableOpacity>
                    <Image
                        className="w-[24px] h-[24px]"
                        resizeMode="contain"
                        source={require('../../assets/images/lock.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                navigation.navigate('ProfileEditScreen')}}>
                    <Image
                        className="w-[24px] h-[24px]"
                        resizeMode="contain"
                        source={require('../../assets/images/fi_settings.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileTopMenu;
