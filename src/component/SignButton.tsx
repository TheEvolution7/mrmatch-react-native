import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const SignInButton: React.FC = () => {
  return (
    <TouchableOpacity className="px-16 py-5 mt-52 w-full text-base font-medium text-center text-orange-50 whitespace-nowrap bg-[linear-gradient(101deg,#BB9A65_13.85%,#775D34_105.09%)] max-w-[334px] rounded-[800px]">
      <Text className="text-orange-50">Next</Text>
    </TouchableOpacity>
  );
};

export default SignInButton;
