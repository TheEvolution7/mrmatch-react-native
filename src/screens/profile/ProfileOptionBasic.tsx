import React, { useState } from 'react';
import { Text, View } from 'react-native';
import OptionItem from './OptionItem';





const ProfileOptionBasic: React.FC = () => {
    const [options, setOption] = React.useState([
        {
            id: '1',
            text: 'English 🇺🇸',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '2',
            text: 'Christianity',
            iconLeft: require('../../assets/images/bs-1.png'),
            iconRight: '',
        },
        {
            id: '3',
            text: 'Libra',
            iconLeft: require('../../assets/images/bs-2.png'),
            iconRight: '',
        },
        {
            id: '4',
            text: 'Bachelors',
            iconLeft: require('../../assets/images/bs-3.png'),
            iconRight: '',
        },
        {
            id: '5',
            text: 'Not Sure Yet',
            iconLeft: require('../../assets/images/bs-4.png'),
            iconRight: '',
        },
        {
            id: '6',
            text: 'Vaccinated',
            iconLeft: require('../../assets/images/bs-5.png'),
            iconRight: '',
        },
        {
            id: '7',
            text: 'ENFP',
            iconLeft: require('../../assets/images/bs-6.png'),
            iconRight: '',
        },
        {
            id: '8',
            text: 'Storyteller',
            iconLeft: require('../../assets/images/bs-7.png'),
            iconRight: '',
        },
        {
            id: '9',
            text: 'Hopeless Romantic',
            iconLeft: require('../../assets/images/bs-8.png'),
            iconRight: '',
        },
        {
            id: '10',
            text: 'A',
            iconLeft: require('../../assets/images/bs-9.png'),
            iconRight: '',
        },
    ]);
    

    return (
        <View className="flex flex-column mx-[20px]">
            <View className="mb-[30px]">
                <Text className="text-[#BB9A65] text-[18px] font-semibold font-heading">
                    Basics Information
                </Text>
            </View>

            <View className="flex flex-row flex-wrap content-center items-center gap-[10px] ml-[-5px]">
                {options.map((item) => (
                        <View>
                            <OptionItem
                                key={item.id}
                                text={item.text} 
                                iconRight={item.iconRight}    
                                iconLeft={item.iconLeft}                         
                            />
                        </View>
                    ))}
            </View>

            <View className="mt-[28px] mb-[28px] ml-[-20px] mr-[-20px] h-[1px] bg-[#6B7176]"></View>
        </View>
    );
};

export default ProfileOptionBasic;




