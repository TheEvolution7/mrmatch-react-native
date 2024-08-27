import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProfileTopSubs: React.FC = () => {

    return (
        <View className="flex flex-row justify-between items-center px-[20px] mt-[30px]">
            <LinearGradient
                locations={[0, 1]}
                colors={['#bb9a65', '#775d34']}
                useAngle={true}
                angle={101.24}
                className="flex flex-row w-full gap-x-[0px] rounded-[10px] px-[13px] py-[12px] justify-between items-center">
              
                    <View>
                        <Image
                            className="w-[48px] h-[48px]"
                            resizeMode="contain"
                            source={require('../../assets/images/subs.png')}></Image>
                    </View>
                    

                    <View className="text-center">
                        <Text className="text-[#F8F1E6] text-[16px] font-heading text-center font-medium">
                            Upgrade Subscription Now
                        </Text>
                    </View>

                    <View className="flex flex-row gap-[16px] justify-end">
                        <TouchableOpacity>
                            <Image
                                className="w-[24px] h-[24px]"
                                resizeMode="contain"
                                source={require('../../assets/images/close.png')}></Image>
                        </TouchableOpacity>
                    </View>
            </LinearGradient>
        </View>
    );
};

export default ProfileTopSubs;
