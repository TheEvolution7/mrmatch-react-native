import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CreatepassPage: React.FC = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);

  const handleHome = () => {
    navigation.navigate('Login');
  };

  return (
    <View className="bg-[#131B22] px-5">
      <View className="pt-[60px] flex flex-col gap-[10px]">
        <TouchableOpacity onPress={handleHome}>
          <View className="w-full pb-[20px]">
            <Image
              className="w-[8px] h-[15px] object-cover"
              source={require('../../../assest/Layer3.png')}></Image>
          </View>
        </TouchableOpacity>
        <Text className="text-[24px] text-[#F8F1E6]">Create new password </Text>
        <Text className="text-[14px] text-[#F8F1E6] leading-6 opacity-50">
          Create your new password. If you forget it, then you have to do forgot
          password.
        </Text>
        <View>
          <Text className="self-start mt-8  text-[#D7C09C]">New Password</Text>
          <View className="flex flex-row items-center">
            <TextInput
              className="mt-1.5 text-base text-stone-400 flex-1"
              secureTextEntry={showPassword}
              placeholder="Enter your password"
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image source={require('../../../assest/Layer2.png')}></Image>
            </TouchableOpacity>
          </View>
          <View className="flex shrink-0 mt-2.5 max-w-full h-px bg-[#5B6165] bg-opacity-30" />
        </View>
        <View>
          <Text className="self-start mt-8 opacity-50 text-[#D7C09C]">
            Confirm New Password
          </Text>
          <View className="flex flex-row items-center">
            <TextInput
              className="mt-1.5 text-base text-stone-400 flex-1"
              secureTextEntry={showPassword}
              placeholder="Enter your confirm password"
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image source={require('../../../assest/Layer2.png')}></Image>
            </TouchableOpacity>
          </View>
          <View className="flex shrink-0 mt-2.5 max-w-full h-px bg-[#5B6165] bg-opacity-30" />
        </View>
        <View className="pt-[235px] pb-[30px]">
          <TouchableOpacity
            onPress={handleHome}
            className="flex flex-row justify-center items-center py-3  w-full text-base font-medium text-center  whitespace-nowrap bg-[#BB9A65]  rounded-[800px]">
            <Text className="text-[#F8F1E6] text-[16px]">Recover password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreatepassPage;
