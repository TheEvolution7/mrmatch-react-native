import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import EmailInput from '../../component/InputEmail';
import PasswordInput from '../../component/InputPassword';
import RememberMeCheckbox from '../../component/Remember';
import SignInButton from '../../component/SignButton';

const LoginPage: React.FC = () => {
  return (
    <ScrollView className="bg-gray-900">
      <View className="flex overflow-hidden flex-col items-center pt-16 pb-9 mx-auto w-full text-sm max-w-[480px]">
        <View className="flex flex-col self-stretch px-5 w-full text-red-300">
          <View
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/efd28b43457a98242905e6fd612099467aab2e6c9cb115fb7f8f75a9160e8cae?placeholderIfAbsent=true&apiKey=5f30f84f7dc74a9ab1dd8fe0b2c0e78d"
            className="object-contain aspect-[0.5] w-[7px]"
          />
          <View className="flex gap-5 mt-8">
            <View className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
              <Text className="text-2xl font-semibold tracking-tight leading-none text-red-300">
                Welcome back
              </Text>
              <Text className="self-stretch mt-2 tracking-normal leading-6 text-orange-50 opacity-50">
                Please enter your email & password to sign in.
              </Text>
              <EmailInput />
            </View>
            <View
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f42dcb39ecefb7f5ba15096ce4d69a6b3ddb7835729ed0ec20a8f4e2f769ce13?placeholderIfAbsent=true&apiKey=5f30f84f7dc74a9ab1dd8fe0b2c0e78d"
              className="object-contain shrink-0 self-end mt-32 w-6 aspect-square"
            />
          </View>
          <PasswordInput />
          <View className="flex gap-10 mt-8 w-full tracking-normal leading-relaxed max-w-[337px]">
            <RememberMeCheckbox />
            <View className="grow shrink text-right text-stone-400 w-[97px]">
              <Text>Forgot password?</Text>
            </View>
          </View>
          <View className="flex shrink-0 mt-9 max-w-full h-px bg-white bg-opacity-30 w-[335px]" />
          <View className="flex gap-2 justify-center items-center mt-11 w-full text-base tracking-normal leading-relaxed text-center max-w-[334px]">
            <Text className="self-stretch my-auto text-orange-50">
              Don't have an account?
            </Text>
            <Text className="self-stretch my-auto font-bold text-stone-400">
              Sign up
            </Text>
          </View>
          <SignInButton />
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginPage;
