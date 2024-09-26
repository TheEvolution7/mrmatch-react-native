import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useIsIconOnStyle } from './IsIconOnStyleContext';

export const SafeOnOff: React.FC = () => {
  const { isIconOn } = useIsIconOnStyle();
  
  return (
    <Image
      style={styles.icon}
      resizeMode='contain'
      source={isIconOn ? require('../../assets/images/fi_shield_on.png') : require('../../assets/images/shieldInactive.png')}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
