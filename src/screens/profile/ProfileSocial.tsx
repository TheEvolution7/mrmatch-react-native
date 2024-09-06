import React, { useState } from 'react';
import { Text, View } from 'react-native';
import OptionItem from './OptionItem';
import SocialItem from './SocialItem';





const ProfileOptionSocial: React.FC = () => {
    const [socials, setSocial] = React.useState([
        {
            id: '1',
            icon: require('../../assets/images/s-1.png'),
            isActive: true,
        },
        {
            id: '2',
            icon: require('../../assets/images/s-2.png'),
            isActive: true,
        },
        {
            id: '3',
            icon: require('../../assets/images/s-3.png'),
            isActive: true,
        },
        {
            id: '4',
            icon: require('../../assets/images/s-4.png'),
            isActive: true,
        },
        {
            id: '5',
            icon: require('../../assets/images/s-5.png'),
            isActive: true,
        },
    ]);
    

    return (
        <View className="flex flex-column mx-[20px]">
            <View className="mb-[30px]">
                <Text className="text-[#BB9A65] text-[18px] font-semibold font-heading">
                    Social Media
                </Text>
            </View>

            <View className="flex flex-row flex-wrap content-center items-center gap-[10px]">
                {socials
                    .filter((item) => item.isActive)
                    .map((item) => (
                        <View>
                            <SocialItem
                                key={item.id}
                                icon={item.icon}
                                isActive={item.isActive}                 
                            />
                        </View>
                    ))}
            </View>

            <View className="mt-[28px] mb-[28px] ml-[-20px] mr-[-20px] h-[1px] bg-[#6B7176]"></View>
        </View>
    );
};

export default ProfileOptionSocial;




