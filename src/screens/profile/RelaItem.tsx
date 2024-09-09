import React from 'react';
import { View, Text, Image } from 'react-native';


type RelaItemProps = {
    icon: any;
    iconActive: any;
    title: string;
    isActive: boolean;
    onPress: () => void;
};

const RelaItem: React.FC<RelaItemProps> = ({ icon, iconActive, isActive, title }) => {

    return (
        <View className={'flex mt-[16px] mr-[8px] ml-[8px] flex-column items-center ${isActive ? border-[#BB9A65] : border-[#2D3843]} border-[1px] rounded-[10px] ${isActive ? bg-[#BB9A6520] : bg-[#1C252D]]} p-[25px]'}>
            <Image className="w-[41px] h-[41px] mb-[11px]" resizeMode="contain" source={ isActive ? iconActive : icon} />
            <Text className="text-[#ffffff] text-[16px]">{title}</Text>
        </View>
    );
};

export default RelaItem;