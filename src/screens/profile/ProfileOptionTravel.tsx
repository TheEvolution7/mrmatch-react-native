import React, { useState } from 'react';
import { Text, View } from 'react-native';
import OptionItem from './OptionItem';





const ProfileOptionTravel: React.FC = () => {
    const [options, setOption] = React.useState([
        {
            id: '1',
            text: 'City Breaks 🌆',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '2',
            text: 'Cultural Exploration 🏛️',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '3',
            text: 'Beach Vacations 🏖️',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '4',
            text: 'Food Tourism 🍔',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '5',
            text: 'Staycations 🏡',
            iconLeft: '',
            iconRight: '',
        },
    ]);
    

    return (
        <View className="flex flex-column mx-[20px]">
            <View className="mb-[30px]">
                <Text className="text-[#BB9A65] text-[18px] font-semibold font-heading">
                    Travel Preferences
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

export default ProfileOptionTravel;




