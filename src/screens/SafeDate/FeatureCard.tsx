import React from 'react';
import { View, Text, Image } from 'react-native';

type FeatureCardProps = {
    icon: any;
    iconActive: any;
    title: string;
    isActive: boolean;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon,iconActive, title, isActive }) => {
    const borderColor = isActive ? 'border-[#2C3843]' : 'border-[#BB9A65]';
    const bgColor = isActive ? 'bg-[#182128]' : 'bg-[#23272a]';
    const dotColor = isActive ? 'border-[#2C3843]' : 'bg-[#BB9A65]';


    return (
        <View className={`relative m-[8px] flex flex-1 px-[10px] py-[15px] pt-[0px] rounded-[16px] border-[2px] border-solid ${borderColor} ${bgColor}`}>
            <View className="absolute top-[10px] right-[10px]">
                <Image resizeMode="contain" source={require('../../assets/images/f-info.png')} className="w-[18px] h-[18px]" />
            </View>
            <View className={`absolute top-[10px] left-[10px] rounded-[30px] ${isActive ? 'border-2' : ''} ${dotColor} h-[17px] w-[17px]`} />
            <View className="flex relative items-center">
                <Image source={ isActive ? icon : iconActive} resizeMode="contain" className="z-[3] mt-4 w-[40px] h-[50px]" />
            </View>
            <View className="mt-[10px]">
                <Text className="text-white font-medium tracking-normal text-center">{title}</Text>
            </View>
        </View>
    );
};

export default FeatureCard;