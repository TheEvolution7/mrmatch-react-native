// SafeOnOffUnactive.tsx
import React from 'react';
import { Image } from 'react-native';
import { useIsIconOnStyle } from './IsIconOnStyleContext';
export const SafeOnOffUnactive = () => {
  const { isIconOn } = useIsIconOnStyle();
  return (
    <Image
        className='w-[24px] h-[24px]'
        resizeMode='contain'
        source={isIconOn ? require('../../assets/images/fi_shield_on_inactive.png') : require('../../assets/images/shieldInact.png')}
        >
    </Image>
  );
};
