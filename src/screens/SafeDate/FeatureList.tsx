import React, { useState } from 'react';
import { View } from 'react-native';
import FeatureCard from './FeatureCard';



const FeatureList: React.FC = () => {
  const [features, setFeatures] = React.useState([
    {
      id: '1',
      icon: require('../../assets/images/f-ic-1.png'),
      iconActive: require('../../assets/images/f-ic-1-active.png'),
      title: 'Real-time\nLocation Sharing',
      isActive: false,
    },
    {
      id: '2',
      icon: require('../../assets/images/f-ic-2.png'),
      iconActive: require('../../assets/images/f-ic-2-active.png'),
      title: 'Check-in\nRemindera',
      isActive: true,
    },
  ]);
  
  
  const toggleFeatureActive = (id: string) => {
    setFeatures((prevFeatures) =>
      prevFeatures.map((feature) =>
        feature.id === id ? { ...feature, isActive: !feature.isActive } : feature
      )
    );
  };
  
  const renderItem = ({ item }: { item: typeof features[0] }) => (
    <FeatureCard
      icon={item.icon}
      iconActive={item.iconActive}
      title={item.title}
      isActive={item.isActive}
      onPress={() => toggleFeatureActive(item.id)}
    />
  );
  
  return (
    <View className="flex flex-row mx-[-8px] px-[20px]">
      {features.map((item) => (
        <FeatureCard
          key={item.id}
          icon={item.icon}
          iconActive={item.iconActive}
          title={item.title}
          isActive={item.isActive}
          onPress={() => toggleFeatureActive(item.id)}
        />
      ))}
    </View>
  );
};

export default FeatureList;