import React from 'react';
import { View, Text, Image } from 'react-native';


type ProfileInfoItemProps = {
    icon: any;
    title: string;
};

const ProfileInfoItem: React.FC<ProfileInfoItemProps> = ({ icon, title }) => {
    // const borderColor = isActive ? 'border-[#BB9A65]' : 'border-[#2C3843]';
    // const bgColor = isActive ? 'bg-[#23272a]' : 'bg-[#182128]';
    // const dotColor = isActive ? 'bg-[#BB9A65]' : 'border-[#2C3843]';
    return (
        <View className="flex-row mt-[10px] items-center gap-x-[12px]">
            <Image className="w-[20px] h-[20px]" resizeMode="contain" source={icon} />
            <Text className="text-[#F8F1E6] text-[14px]">{title}</Text>
        </View>
    );
};

export default ProfileInfoItem;