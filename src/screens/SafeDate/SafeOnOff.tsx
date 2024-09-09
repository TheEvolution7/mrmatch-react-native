// SafeOnOff.tsx
import React from 'react';
import { Image } from 'react-native';
import { useIsIconOnStyle } from './IsIconOnStyleContext';
export const SafeOnOff = () => {
  const { isIconOn } = useIsIconOnStyle();
  return (
    <Image
        className='w-[24px] h-[24px]'
        resizeMode='contain'
        source={isIconOn ? require('../../assets/images/fi_shield_on.png') : require('../../assets/images/shieldInactive.png')}
        >
    </Image>
  );
};
