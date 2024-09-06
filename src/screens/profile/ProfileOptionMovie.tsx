import React, { useState } from 'react';
import { Text, View } from 'react-native';
import OptionItem from './OptionItem';





const ProfileOptionMovie: React.FC = () => {
    const [options, setOption] = React.useState([
        {
            id: '1',
            text: 'Drama 🎭',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '2',
            text: 'Romance 💕',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '3',
            text: 'Horror 🧟‍♂️',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '4',
            text: 'Musical 🎵',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '5',
            text: 'K-Drama 🇰🇷🎭',
            iconLeft: '',
            iconRight: '',
        },
    ]);
    

    return (
        <View className="flex flex-column mx-[20px]">
            <View className="mb-[30px]">
                <Text className="text-[#BB9A65] text-[18px] font-semibold font-heading">
                    Movies Preferences
                </Text>
            </View>

            <View className="flex flex-row flex-wrap content-center items-center gap-[10px] ml-[-5px]">
                {options.map((item) => (
                        <View>
                            <OptionItem
                                key={item.id}
                                text={item.text}
                                iconLeft={item.iconLeft} 
                                iconRight={item.iconRight}                            
                            />
                        </View>
                    ))}
            </View>

            <View className="mt-[28px] mb-[28px] ml-[-20px] mr-[-20px] h-[1px] bg-[#6B7176]"></View>
        </View>
    );
};

export default ProfileOptionMovie;




