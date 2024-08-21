import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import GradientText from '../../components/GradientText';
import LinearGradient from 'react-native-linear-gradient';
import FeatureCard from './FeatureCard';
const ModeButton: React.FC = () => {

    const [features, setFeatures] = React.useState([
        {
          id: '1',
          icon: require('../../assets/images/f-ic-1.png'),
          iconActive: require('../../assets/images/f-ic-1-active.png'),
          title: 'Real-time\nLocation Sharing',
          isActive: false,
        },
        {
          id: '2',
          icon: require('../../assets/images/f-ic-2.png'),
          iconActive: require('../../assets/images/f-ic-2-active.png'),
          title: 'Check-in\nRemindera',
          isActive: true,
        },
      ]);
      
      
      const toggleFeatureActive = (id: string) => {
        setFeatures((prevFeatures) =>
          prevFeatures.map((feature) =>
            feature.id === id ? { ...feature, isActive: !feature.isActive } : feature
          )
        );
      };
      
      const renderItem = ({ item }: { item: typeof features[0] }) => (
        <FeatureCard
          icon={item.icon}
          iconActive={item.iconActive}
          title={item.title}
          isActive={item.isActive}
          onPress={() => toggleFeatureActive(item.id)}
        />
      );



    const [isOn, setIsActive] = useState<boolean>(false);
    const scaleAnim = useRef(new Animated.Value(0)).current;
  
    const handlePress = () => {
        Animated.spring(scaleAnim, {
          toValue: isOn ? 0 : 1, // Scale to 1.2 if not scaled, otherwise scale back to 1
          friction: 3,
          tension: 40,
          useNativeDriver: true,
        }).start();
        setIsActive(!isOn); // Toggle the scale state
      };

    return (
        <View>
            <View className="flex flex-row justify-between items-center space-x-2 px-[20px]">
                <TouchableOpacity className="w-[40px]">
                    <Image
                        className="w-[32px] h-[28px]"
                        resizeMode="contain"
                        source={require('../../assets/images/heart.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                    <LinearGradient 
                        locations={[0, 1]} colors={isOn ? ['#bb9a65', '#775d34'] : ['#3A4A5A', '#3A4A5A']} useAngle={true} angle={101.24} 
                        className="py-[12px] px-[24px] rounded-[800px]"> 
                        <Text className="text-white fs-[16px] font-medium">{isOn ?  'Enabled' : 'Disable'}</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity className="w-[40px]">
                    <Image
                        className="w-[22px] h-[24px]"
                        resizeMode="contain"
                        source={require('../../assets/images/call.png')}></Image>
                </TouchableOpacity>
            
            </View>
            <View className="flex justify-center space-x-2 px-[80px] py-[40px] border-[#6B7176] border-b-[1px]">
                <View className="text-center">
                    <GradientText
                        text="SafeDate Mode"
                        colors={['#F8F1E6', '#BB9A66']}
                        fontSize={30}
                        x={30}
                        y={30} />
                </View>
                <Text className="self-center text-center text-white text-[14px] leading-[24px] mt-[20px]">We highly recommended you to activate SafeDate feature before you go on your date for your own safety</Text>
                <TouchableOpacity onPress={() => { handlePress()}} className="flex items-center self-center justify-center w-[130px] h-[130px] mt-[40px] relative">
                    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }]} className="z-[0] absolute w-[190px] h-[190px] top-[-30px] left-[-30px] bg-[#BB9A65] opacity-[0.1] rounded-[550px]">
                    </Animated.View>
                    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }]} className="z-[1] absolute w-[160px] h-[160px] top-[-15px] left-[-15px] bg-[#BB9A65] opacity-[0.2] rounded-[550px]">
                    </Animated.View>
                    
                    <LinearGradient
                        className="z-[2] flex flex-1 justify-center items-center w-full rounded-[550px]"
                        colors={isOn ? ['#BB9A65', '#775D34'] : ['#40505F', '#273747'] }
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}

                    >
                        <Image
                            className="w-[50px] h-[50px] mb-[2px]"
                            resizeMode="contain"
                            source={require('../../assets/images/on-off.png')}></Image>
                    </LinearGradient>

                </TouchableOpacity>
                <Text className="max-w-[240px] self-center text-center text-[#D7C09C] text-[14px] leading-[24px] mt-[30px]">{isOn ? 'Tap 1 times to turn on/off' : 'Hold 3 seconds to contact emergency services'}</Text>
            
            </View>


            <View className="w-full" pointerEvents={isOn ? 'auto' : 'none'}>
                <View className="flex justify-center space-x-2 px-[20px]">
                    <Text className={`${isOn ? "text-[#BB9A65]" : "text-[#2D3843]"} font-medium text-[20px] leading-[24px] mt-[30px] mb-[30px]`}>{isOn ? 'Fearures' : 'Features (Disabled)'}</Text>
                </View>
                <View className={`${isOn ? "opacity-[1]" : "opacity-[0.5]"} flex flex-row mx-[-8px] px-[20px]`}>
                    {features.map((item) => (
                    <FeatureCard 
                        key={item.id}
                        icon={item.icon}
                        iconActive={item.iconActive}
                        title={item.title}
                        isActive={isOn ? item.isActive : false }
                        onPress={() => toggleFeatureActive(item.id)}
                    />
                    ))}
                </View>
                <View className="pt-[20px] mx-[20px] flex flex-column gap-y-[20px]">
                    <TouchableOpacity>
                            <LinearGradient 
                                locations={[0, 1]} colors={isOn ? ['#bb9a65', '#775d34'] : ['#2D3843', '#2D3843']} useAngle={true} angle={101.24} 
                                className="flex flex-row rounded-[800px] px-[20px] h-[56px] justify-center items-center">
                                <Image
                                    className={`${isOn ? "opacity-[1]" : "opacity-[0.2]"} w-[24px] h-[24px] mr-[15px]`}
                                    resizeMode="contain"
                                source={require('../../assets/images/mail.png')}></Image>   
                                <Text className={`${isOn ? "opacity-[1]" : "opacity-[0.2]" } text-white fs-[16px] font-medium`}>Emergency Message</Text>
                            </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity className={`${isOn ? "opacity-[1]" : "opacity-[0.5]"} flex flex-row rounded-[800px] px-[20px] h-[56px] justify-center items-center border-[#D7C09C] border-[1px]`}>
                        <Image
                        className="w-[24px] h-[24px] mr-[15px]"
                        resizeMode="contain"
                        source={require('../../assets/images/contact.png')}></Image>   
                        <Text className="text-[#D7C09C] fs-[16px] font-medium">Add Emergency Contacts</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
};

export default ModeButton;
