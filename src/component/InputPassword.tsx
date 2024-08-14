import React from 'react';
import {View, Text, TextInput} from 'react-native';

const PasswordInput: React.FC = () => {
  return (
    <View>
      <Text className="self-start mt-8 opacity-50 text-red-300">
        Your Password
      </Text>
      <TextInput
        className="mt-1.5 text-base text-stone-400"
        secureTextEntry
        placeholder="Enter your password"
        placeholderTextColor="#9CA3AF"
      />
      <View
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c613c02558b96f43d12c685a47164950311e96213986ca9897f95027170e9cd9?placeholderIfAbsent=true&apiKey=5f30f84f7dc74a9ab1dd8fe0b2c0e78d"
        className="object-contain self-end mt-1.5 aspect-[1.04] w-[25px]"
      />
      <View className="flex shrink-0 mt-2.5 max-w-full h-px bg-white bg-opacity-30 w-[335px]" />
    </View>
  );
};

export default PasswordInput;
