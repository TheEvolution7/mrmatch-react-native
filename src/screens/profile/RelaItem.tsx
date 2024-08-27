import React from 'react';
import { View, Text, Image } from 'react-native';


type RelaItemProps = {
    icon: any;
    title: string;
};

const RelaItem: React.FC<RelaItemProps> = ({ icon, title }) => {

    return (
        <View className="flex-row mt-[10px] items-center gap-x-[12px]">
            <Image className="w-[20px] h-[20px]" resizeMode="contain" source={icon} />
            <Text className="text-[#F8F1E6] text-[14px]">{title}</Text>
        </View>
    );
};

export default RelaItem;