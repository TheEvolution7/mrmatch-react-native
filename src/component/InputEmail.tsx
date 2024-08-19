import React from 'react';
import {View, Text, TextInput} from 'react-native';

const EmailInput: React.FC = () => {
  return (
    <View className="w-full ">
      <Text className="mt-8 text-[#D7C09C]">Your Email</Text>
      <TextInput
        className="mt-3 text-base text-white w-full"
        placeholder="info@mrmatch.com"
        placeholderTextColor="#9CA3AF"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View className="flex shrink-0 mt-1.5 w-full h-px bg-[#5B6165] bg-opacity-30" />
    </View>
  );
};

export default EmailInput;
