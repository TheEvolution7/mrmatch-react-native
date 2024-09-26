import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useIsIconOnStyle } from './IsIconOnStyleContext';

export const SafeOnOffUnactive: React.FC = () => {
  const { isIconOn } = useIsIconOnStyle();
  
  return (
    <Image
      style={styles.icon}
      resizeMode="contain"
      source={isIconOn ? require('../../assets/images/fi_shield_on_inactive.png') : require('../../assets/images/shieldInact.png')}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
