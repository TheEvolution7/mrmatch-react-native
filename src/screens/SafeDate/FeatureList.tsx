import React from 'react';
import { View } from 'react-native';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: require('../../assets/images/f-ic-1.png'),
    iconActive: require('../../assets/images/f-ic-1-active.png'),
    title: 'Real-time\nLocation Sharing',
    isActive: true,
  },
  {
    icon: require('../../assets/images/f-ic-2.png'),
    iconActive: require('../../assets/images/f-ic-2-active.png'),
    title: 'Check-in\nReminder',
    isActive: false,
  },
];

const FeatureList: React.FC = () => {
  return (
    <View className="flex flex-row mx-[-8px] px-[20px]">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          iconActive={feature.iconActive}
          title={feature.title}
          isActive={feature.isActive}
        />
      ))}
    </View>
  );
};

export default FeatureList;