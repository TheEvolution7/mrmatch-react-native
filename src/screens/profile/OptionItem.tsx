import React from 'react';
import { View, Text, Image } from 'react-native';


type OptionItemProps = {
    text: string;
    iconLeft: any;
    iconRight: any;
};

const OptionItem: React.FC<OptionItemProps> = ({ text, iconLeft, iconRight }) => {

    return (
        <View className={'flex flex-row gap-x-[6px] items-center border-[#BB9A65] border-[1.5px] rounded-[50px] py-[12px] pr-[13px] pl-[8px]'}>
            {iconLeft ? (
                <Image className="w-[16px] h-[14px]" resizeMode="contain" source={iconLeft} />
            ) : null}
            <Text className="text-[#F8F1E6] text-[14px]">
                {text}
            </Text>
            {iconRight ? (
                <Image className="w-[16px] h-[14px]" resizeMode="contain" source={iconRight} />
            ) : null}
        </View>
    );
};

export default OptionItem;