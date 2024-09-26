import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FeatureCard from './FeatureCard';
import { useIsIconOnStyle } from './IsIconOnStyleContext';

const FeatureList: React.FC = () => {
  const [features, setFeatures] = useState([
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
      title: 'Check-in\nReminder',
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

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text
          style={[
            styles.headerText,
            { color: isIconOn ? '#BB9A65' : '#2D3843' },
          ]}
        >
          {isIconOn ? 'Features' : 'Features (Disabled)'}
        </Text>
      </View>
      <View style={[styles.featureContainer, { opacity: isIconOn ? 1 : 0.5 }]}>
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    marginVertical: 30,
  },
  headerText: {
    fontFamily: 'Helvetica', // Replace with your custom font
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
  },
  featureContainer: {
    flexDirection: 'row',
    marginHorizontal: -8,
  },
});

export default FeatureList;
