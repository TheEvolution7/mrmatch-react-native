import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Image} from 'react-native';

import ModeButton from './ModeButton';
import Container from '../../components/Container';

const SafeDateScreen: React.FC = () => {
  return (
    <Container>
      <ScrollView>
          <View>
              <ModeButton />
          </View>
      </ScrollView>
        
        
    </Container>
    
  );
};

export default SafeDateScreen;
