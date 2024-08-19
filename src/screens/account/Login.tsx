import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import EmailInput from '../../component/InputEmail';
import PasswordInput from '../../component/InputPassword';
import SignInButton from '../../component/SignButton';
import {useNavigation} from '@react-navigation/native';

const LoginPage: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  const handleForgot = () => {
    navigation.navigate('Forgot');
  };
  return (
    <ScrollView className="bg-gray-900">
      <View className="flex relative overflow-hidden bg-[#131B22] flex-col items-center pt-[60px] pb-[50px] mx-auto w-full text-sm ">
        <View className="w-full h-full absolute">
          <Image
            className="top-[150px] left-[-10px] w-[400px]"
            source={require('../../../assest/Ellipse4.png')}></Image>
        </View>
        <View className="flex z-10 flex-col self-stretch px-5 w-full text-red-300">
          <View className="flex gap-5 ">
            <TouchableOpacity>
              <View className="w-full  pb-[20px]">
                <Image
                  className="w-[8px] h-[15px] object-cover"
                  source={require('../../../assest/Layer3.png')}></Image>
              </View>
            </TouchableOpacity>

            <View className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
              <Text className="text-2xl font-semibold tracking-tight leading-none text-[#D7C09C]">
                Welcome back
              </Text>
              <Text className="self-stretch mt-2 tracking-normal leading-6 text-[#F8F1E6] opacity-50">
                Please enter your email & password to sign in.
              </Text>
              <EmailInput />
            </View>
          </View>
          <PasswordInput />
          <View className="flex flex-row justify-between items-center mt-[20px] w-full  ">
            <View className="flex flex-row items-center">
              <TouchableOpacity
                className="flex justify-center items-center p-2"
                onPress={() => setChecked(!checked)}>
                <View
                  className={`w-5 h-5 rounded border-2 border-[#BB9A65] ${
                    checked ? 'bg-[#FFA500]' : ''
                  }`}
                />
              </TouchableOpacity>
              <Text className="ml-2 text-[#F8F1E6]">Remember me</Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleForgot}>
                <Text className="text-[14px] text-[#BB9A65]">
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex shrink-0 mt-[20px] max-w-full h-px bg-[#292F32] bg-opacity-30 " />
          <View className="flex flex-row  gap-2 justify-center items-center mt-[25px] w-full t ext-base tracking-normal leading-relaxed text-center max-w-[334px]">
            <Text className="self-stretch my-auto text-[#F8F1E6] text-[16px]">
              Don't have an account?
            </Text>
            <TouchableOpacity>
              <Text className="self-stretch my-auto font-bold text-[#BB9A65] text-[16px] ">
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
          <SignInButton />
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginPage;
