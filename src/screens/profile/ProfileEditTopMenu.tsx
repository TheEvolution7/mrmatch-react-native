import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ProfileEditTopMenu: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View className="flex flex-row justify-between items-center space-x-2 px-[20px] pb-[15px]">
            <View className="flex-1">
                <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
                    <Image
                        className="w-[32px] h-[14px]"
                        resizeMode="contain"
                        source={require('../../assets/images/btnBack.png')}></Image>
                </TouchableOpacity>
            </View>
            

            <View className="flex-1 text-center">
                <Text className="text-[#D7C09C] text-[20px] font-heading text-center font-medium">
                    Edit Profile
                </Text>
            </View>

            <View className="flex flex-row gap-[16px] flex-1 justify-end">
                
            </View>
        </View>
    );
};

export default ProfileEditTopMenu;
