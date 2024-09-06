import React from 'react';
import { View, Text, Image } from 'react-native';


type SocialItemProps = {
    icon: any;
    isActive: boolean;
};

const SocialItem: React.FC<SocialItemProps> = ({ icon, isActive }) => {

    return (
        <View className={'flex w-[52px] h-[52px] justify-center items-center border-[#2D3843] border-[1px] rounded-[1000px]'}>
            <Image className="w-[28px] h-[28px]" resizeMode="contain" source={ icon} />
        </View>
    );
};

export default SocialItem;