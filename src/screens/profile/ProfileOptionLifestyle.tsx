import React, { useState } from 'react';
import { Text, View } from 'react-native';
import OptionItem from './OptionItem';





const ProfileOptionLifestyle: React.FC = () => {
    const [options, setOption] = React.useState([
        {
            id: '1',
            text: 'Dog',
            iconLeft: require('../../assets/images/ls-1.png'),
            iconRight: '',
        },
        {
            id: '2',
            text: 'Non-Drinker',
            iconLeft: require('../../assets/images/ls-2.png'),
            iconRight: '',
        },
        {
            id: '3',
            text: 'Non-smoker',
            iconLeft: require('../../assets/images/ls-3.png'),
            iconRight: '',
        },
        {
            id: '4',
            text: 'Sometimes',
            iconLeft: require('../../assets/images/ls-4.png'),
            iconRight: '',
        },
        {
            id: '5',
            text: 'Pescatarian',
            iconLeft: require('../../assets/images/ls-5.png'),
            iconRight: '',
        },
        {
            id: '6',
            text: 'Active on All',
            iconLeft: require('../../assets/images/ls-6.png'),
            iconRight: '',
        },
        {
            id: '7',
            text: 'Early Bird',
            iconLeft: require('../../assets/images/ls-7.png'),
            iconRight: '',
        },
    ]);
    

    return (
        <View className="flex flex-column mx-[20px]">
            <View className="mb-[30px]">
                <Text className="text-[#BB9A65] text-[18px] font-semibold font-heading">
                    Lifestyle
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

export default ProfileOptionLifestyle;




