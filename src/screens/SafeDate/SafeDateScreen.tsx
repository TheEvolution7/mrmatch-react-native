import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { ModeButton } from './ModeButton';
import Container from '../../components/Container';
import { IsIconOnStyleProvider } from './IsIconOnStyleContext';

const SafeDateScreen: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <View style={styles.contentContainer}>
          <ModeButton />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 100,
  },
});

export default SafeDateScreen;
