import React, { useState } from 'react';
import { Text, View } from 'react-native';
import FeatureCard from './FeatureCard';
import { useIsIconOnStyle } from './IsIconOnStyleContext';



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

  const { isIconOn } = useIsIconOnStyle();

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
    <View>
      <View className="flex justify-center space-x-2 px-[20px]">
        <Text
          className={`${isIconOn ? 'text-[#BB9A65]' : 'text-[#2D3843]'
            } font-heading font-medium text-[20px] leading-[24px] mt-[30px] mb-[30px]`}>
          {isIconOn ? 'Fearures' : 'Features (Disabled)'}
        </Text>
      </View>
      <View
        className={`${isIconOn ? 'opacity-[1]' : 'opacity-[0.5]'
          } flex flex-row mx-[-8px] px-[20px]`}>
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
    </View>

  );
};

export default FeatureList;