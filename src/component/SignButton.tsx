import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const SignInButton: React.FC = () => {
  return (
    <TouchableOpacity className="flex flex-row justify-center items-center py-3 mt-[120px] w-full text-base font-medium text-center  whitespace-nowrap bg-[#BB9A65]  rounded-[800px]">
      <Text className="text-[#F8F1E6] text-[16px]">Next</Text>
    </TouchableOpacity>
  );
};

export default SignInButton;
