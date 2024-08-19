import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import EmailInput from '../../component/InputEmail';
import {useNavigation} from '@react-navigation/native';

const OTPPage: React.FC = () => {
  const navigation = useNavigation();

  const handleCreate = () => {
    navigation.navigate('Createpass');
  };
  const handlePre = () => {
    navigation.navigate('Forgot');
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
        <Text className="text-[24px] text-[#F8F1E6]">
          OTP code verification
        </Text>
        <Text className="text-[14px] text-[#F8F1E6] leading-6 opacity-50">
          We have sent an OTP code to your email in******@mrmatch.com. Enter the
          OTP code below to verify.
        </Text>
        <View className="flex flex-row gap-7 self-center mt-11">
          <View className="flex justify-center items-center text-2xl tracking-tight leading-none whitespace-nowrap border-[2px] border-[#BB9A65] bg-[#242829] bg-opacity-10  h-[60px] rounded-[800px] w-[60px]">
            <Text className="text-[24px] text-[#F8F1E6]">2</Text>
          </View>
          <View className="flex justify-center items-center text-2xl tracking-tight leading-none whitespace-nowrap border-[2px] border-[#BB9A65] bg-[#242829]  bg-opacity-10  h-[60px] rounded-[800px] w-[60px]">
            <Text className="text-[24px] text-[#F8F1E6]">0</Text>
          </View>
          <View className="flex flex-col justify-center items-center px-3 border border-orange-50 border-solid h-[60px] rounded-[800px] w-[60px] opacity-50">
            <View className="flex shrink-0 w-2.5 h-2.5 bg-red-300 rounded-xl" />
          </View>
          <View className="flex flex-col justify-center items-center px-3 border border-orange-50 border-solid h-[60px] rounded-[800px] w-[60px] opacity-50">
            <View className="flex shrink-0 w-2.5 h-2.5 bg-red-300 rounded-xl" />
          </View>
        </View>
        <View className="pt-[315px] pb-[15px]">
          <TouchableOpacity
            onPress={handleCreate}
            className="flex flex-row justify-center items-center py-3  w-full text-base font-medium text-center  whitespace-nowrap bg-[#2C3843]  rounded-[800px]">
            <Text className="text-[#F8F1E6] text-[16px]">
              I haven't received an email
            </Text>
          </TouchableOpacity>
        </View>
        <View className="pb-[30px] flex flex-row gap-1 justify-center items-center">
          <Text className="text-[14px] text-[#F8F1E6]">
            You can resend code in
          </Text>
          <Text className="text-[14px] text-[#BB9A65] ">52s</Text>
        </View>
      </View>
    </View>
  );
};

export default OTPPage;
