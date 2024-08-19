import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import EmailInput from '../../component/InputEmail';
import {useNavigation} from '@react-navigation/native';

const ForgotPage: React.FC = () => {
  const navigation = useNavigation();

  const handleCreate = () => {
    navigation.navigate('Otp');
  };

  const handlePre = () => {
    navigation.navigate('Login');
  };
  return (
    <View className="bg-[#131B22] px-5">
      <View className="pt-[60px] flex flex-col gap-[10px]">
        <TouchableOpacity onPress={handlePre}>
          <View className="w-full pb-[20px]">
            <Image
              className="w-[8px] h-[15px] object-cover"
              source={require('../../../assest/Layer3.png')}></Image>
          </View>
        </TouchableOpacity>

        <Text className="text-[24px] text-[#F8F1E6]">Forgot Password?</Text>
        <Text className="text-[14px] text-[#F8F1E6] leading-6 opacity-50">
          Enter your email and we'll send you instructions on how to reset your
          password.
        </Text>
        <View>
          <EmailInput></EmailInput>
        </View>
        <View className="pt-[360px] pb-[30px]">
          <TouchableOpacity
            onPress={handleCreate}
            className="flex flex-row justify-center items-center py-3  w-full text-base font-medium text-center  whitespace-nowrap bg-[#BB9A65]  rounded-[800px]">
            <Text className="text-[#F8F1E6] text-[16px]">Recover password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPage;
