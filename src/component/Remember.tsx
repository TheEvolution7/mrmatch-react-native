import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const RememberMeCheckbox: React.FC = () => {
  return (
    <TouchableOpacity className="flex gap-3 items-center self-start text-orange-50">
      <View className="flex shrink-0 self-stretch my-auto w-5 h-5 rounded border-solid border-[1.5px] border-stone-400" />
      <Text className="flex-1 shrink self-stretch my-auto basis-0 text-orange-50">
        Remember me
      </Text>
    </TouchableOpacity>
  );
};

export default RememberMeCheckbox;
