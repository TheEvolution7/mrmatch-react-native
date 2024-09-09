import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Image} from 'react-native';

import { ModeButton } from './ModeButton';
import Container from '../../components/Container';
import { IsIconOnStyleProvider } from './IsIconOnStyleContext';

const SafeDateScreen: React.FC = () => {
  return (
    <Container>
      <ScrollView>
          <View className="pt-[10px] pb-[100px]">
            <ModeButton />
            
          </View>
      </ScrollView>
        
        
    </Container>
    
  );
};

export default SafeDateScreen;
