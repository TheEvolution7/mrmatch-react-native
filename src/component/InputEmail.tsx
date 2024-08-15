import React from 'react';
import {View, Text, TextInput} from 'react-native';

const EmailInput: React.FC = () => {
  return (
    <View>
      <Text className="mt-8 text-red-300">Your Email</Text>
      <TextInput
        className="mt-3 text-base text-stone-400"
        placeholder="info@mrmatch.com"
        placeholderTextColor="#9CA3AF"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View className="flex shrink-0 mt-1.5 max-w-full h-px bg-white bg-opacity-30 w-[335px]" />
    </View>
  );
};

export default EmailInput;
