import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CircularProgress from '../../components/CircularProgress';
import ProfileInfoItem from './ProfileInfoItem';




const ProfileInfo: React.FC = () => {
    const [progress, setProgress] = useState(10);

    const increaseProgress = () => {
      setProgress(prev => (prev < 100 ? prev + 10 : 100));
    };
    const [ infoitem ] = React.useState([
        {
            icon: require('../../assets/images/gender-male.png'),
            title: 'Man',
        },
        {
            icon: require('../../assets/images/Location.png'),
            title: 'Less than a kilometer away',
        },
    ]);
    

    return (
        <View className="flex mt-[20px] mx-[20px]">
            <LinearGradient
                locations={[0, 1]}
                colors={['#BB9A65', '#775D3400']}
                useAngle={true}
                angle={-160.24}
                className="flex flex-row rounded-[10px] p-[2px] justify-center items-center">
                
                
                <View className="flex flex-row gap-x-[15px]">
                    <LinearGradient
                        locations={[0, 0.3, 1]}
                        colors={['#6F5D3F','#394148F5', '#1C252D']}
                        useAngle={true}
                        angle={20.24}
                        className="flex flex-row rounded-[10px] p-[18px] justify-center gap-x-[15px]">
                        
                        <CircularProgress size={72} progress={progress} />
                        
                        
                        <View className="flex-1 flex-column self-center">
                            <Text className="text-[#BB9A65] text-[16px] font-heading font-bold mb-[10px]">
                                Complete your profile
                            </Text>
                            <Text className="text-[12px] text-[#F8F1E6] font-body">
                                Complete to verify your profile and experience the best dating experience and better matches!
                            </Text>
                        </View>

                        <TouchableOpacity>
                            <Image
                                className="w-[24px] h-[24px]"
                                resizeMode="contain"
                                source={require('../../assets/images/close.png')}></Image>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </LinearGradient>

            <View className="flex flex-row gap-x-[16px] mt-[16px]">
                <TouchableOpacity
                    className="flex-1 flex flex-column items-center justify-between border-[#2D3843] border-[1px] rounded-[10px] bg-[#1C252D] p-[15px]"
                > 
                    <Image
                        className="w-[40px] h-[40px]"
                        resizeMode="contain"
                        source={require('../../assets/images/star-like.png')}></Image>
                    <View className="flex flex-column items-center">
                        <Text className="text-[#3DA2FF] text-[12px] mt-[20px]">
                            0 
                            <Text className="text-white text-[12px]"> Super Likes</Text>
                        </Text>
                        <Text className="font-medium font-heading text-[12px] text-[#3DA2FF] mt-[5px]">
                            Get more
                        </Text>
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity
                    className="flex-1 flex flex-column items-center justify-between border-[#2D3843] border-[1px] rounded-[10px] bg-[#1C252D] p-[15px]"
                > 
                    <Image
                        className="w-[40px] h-[40px]"
                        resizeMode="contain"
                        source={require('../../assets/images/boost.png')}></Image>
                    <View className="flex flex-column items-center">
                        <Text className="text-[#B85DFF] text-[12px] mt-[20px]">
                            0 
                            <Text className="text-white text-[12px]"> Boost</Text>
                        </Text>
                        <Text className="font-medium font-heading text-[12px] text-[#B85DFF] mt-[5px]">
                            Get more
                        </Text>
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity
                    className="flex-1 flex flex-column items-center justify-between border-[#2D3843] border-[1px] rounded-[10px] bg-[#1C252D] p-[15px] shadow shadow-[#5E728472]"
                > 
                    <Text className="font-medium font-heading text-[12px] text-[#BB9A65] mb-[10px]">
                        Basic
                    </Text>
                    <Image
                        className="w-[32px] h-[30px]"
                        resizeMode="contain"
                        source={require('../../assets/images/basic.png')}></Image>
                    <View className="flex flex-column items-center">
                        <Text className="text-[#B85DFF] text-[12px] mt-[20px]">
                            <Text className="text-white text-[12px]"> Subscriptions</Text>
                        </Text>
                        <Text className="font-medium font-heading text-[12px] text-[#BB9A65] mt-[5px]">
                            Upgrade
                        </Text>
                    </View>
                    
                </TouchableOpacity>
            </View>

            <View className="mt-[30px] flex flex-column">
                <Text className="font-bold text-[24px] text-[#BB9A65]">Andrew (27)</Text>
                <View className="flex mt-[12px]">
                    <LinearGradient 
                        locations={[0, 1]} 
                        colors={['#40505F', '#40505F']} 
                        useAngle={true} 
                        angle={101.24}
                        className="flex-row self-start grow items-center px-[14px] py-[12px] rounded-[30px]"
                    >
                        <Image className="w-[16px] h-[16px] mr-[10px]" source={require('../../assets/images/verify_ic.png')} />
                        <Text className="text-[#F8F1E6] text-[12px]">Profile Verified</Text>
                    </LinearGradient>
                </View>
                <View>
                    {infoitem.map((item) => (
                        <ProfileInfoItem
                            icon={item.icon}
                            title={item.title}
                        />
                    ))}
                </View>
            </View>

            <View className="mt-[28px] mb-[28px] ml-[-20px] mr-[-20px] h-[1px] bg-[#6B7176]"></View>
        </View>
    );
};

export default ProfileInfo;




