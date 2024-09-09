import React, { useState } from 'react';
import { Text, View } from 'react-native';
import RelaItem from './RelaItem';





const ProfileRelationship: React.FC = () => {
    const [relations, setRelation] = React.useState([
        {
          id: '1',
          icon: require('../../assets/images/rl-1.png'),
          iconActive: require('../../assets/images/rl-1-act.png'),
          title: 'Commit',
          isActive: false,
        },
        {
          id: '2',
          icon: require('../../assets/images/rl-2.png'),
          iconActive: require('../../assets/images/rl-2-act.png'),
          title: 'Dating',
          isActive: false,
        },
        {
            id: '3',
            icon: require('../../assets/images/rl-3.png'),
          iconActive: require('../../assets/images/rl-3-act.png'),
            title: 'Casual',
            isActive: true,
        },
    ]);
    

    return (
        <View className="flex flex-column mx-[20px]">
            <View className="mb-[10px]">
                <Text className="text-[#BB9A65] text-[18px] font-semibold font-heading">
                    Relationship Goals
                </Text>
            </View>

            <View className="flex flex-row flex-wrap content-center items-center ml-[-8px] mr-[-8px]">
                {relations
                    .filter((item) => item.isActive)
                    .map((item) => (
                        <View className="min-w-[50%] flex flex-1">
                            <RelaItem
                                key={item.id}
                                icon={item.icon}
                                iconActive={item.iconActive}
                                title={item.title}
                                isActive={item.isActive} 
                                onPress={() => {}}                  
                            />
                        </View>
                    ))}
            </View>

            <View className="mt-[28px] mb-[28px] ml-[-20px] mr-[-20px] h-[1px] bg-[#6B7176]"></View>
        </View>
    );
};

export default ProfileRelationship;




