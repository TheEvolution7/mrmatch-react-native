import React from 'react';
import {View, Text, TextInput} from 'react-native';
import SafeDateTopButton from './SafeDateTopButton';
import ModeButton from './ModeButton';
import Container from '../../components/Container';
import FeatureList from './FeatureList';

const SafeDateScreen: React.FC = () => {
  return (
    <Container>
        <View>
            <SafeDateTopButton />
            <View>
                <ModeButton />
            </View>
            <View className="w-full">
                <FeatureList />
            </View>
        </View>
        
    </Container>
    
  );
};

export default SafeDateScreen;
