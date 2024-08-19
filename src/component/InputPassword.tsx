import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PasswordInput: React.FC = () => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View>
      <Text className="self-start mt-8 opacity-50 text-[#D7C09C]">
        Your Password
      </Text>
      <View className="flex flex-row items-center">
        <TextInput
          className="mt-1.5 text-base text-stone-400 flex-1"
          secureTextEntry={showPassword}
          placeholder="Enter your password"
          placeholderTextColor="#9CA3AF"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image source={require('../../assest/Layer2.png')}></Image>
        </TouchableOpacity>
      </View>
      <View className="flex shrink-0 mt-2.5 max-w-full h-px bg-[#5B6165] bg-opacity-30" />
    </View>
  );
};

export default PasswordInput;
