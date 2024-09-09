import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import RelaItem from './RelaItem';




const ProfileEditRelationship: React.FC = () => {
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
        {
            id: '4',
            icon: require('../../assets/images/rl-4.png'),
            iconActive: require('../../assets/images/rl-4-act.png'),
            title: 'Friendship',
            isActive: false,
        },
        {
            id: '5',
            icon: require('../../assets/images/rl-5.png'),
            iconActive: require('../../assets/images/rl-5-act.png'),
            title: 'Open to Options',
            isActive: false,
        },
        {
            id: '6',
            icon: require('../../assets/images/rl-6.png'),
            iconActive: require('../../assets/images/rl-6-act.png'),
            title: 'Networking',
            isActive: false,
        },
    ]);

    const toggleRelationActive = (id: string) => {
        setRelation((prevRelation) =>
          prevRelation.map((relation) =>
            relation.id === id ? { ...relation, isActive: !relation.isActive } : relation
          )
        );
    };
    

    return (
        <View className="flex flex-column mx-[20px]">
            <View className="mb-[10px]">
                <Text className="text-[#BB9A65] text-[18px] font-semibold font-heading">
                    Relationship Goals
                </Text>
            </View>

            <View className="flex flex-row flex-wrap content-center items-center ml-[-8px] mr-[-8px]">
                {relations.map((item) => (
                        <View className="min-w-[50%] flex flex-1">
                            <RelaItem
                                key={item.id}
                                icon={item.icon}
                                iconActive={item.iconActive}
                                title={item.title}
                                isActive={item.isActive} 
                                onPress={() => toggleRelationActive(item.id)}                 
                            />
                        </View>
                    ))}
            </View>

            <View className="mt-[28px] mb-[28px] ml-[-20px] mr-[-20px] h-[1px] bg-[#6B7176]"></View>
        </View>
    );
};

export default ProfileEditRelationship;




