import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Image} from 'react-native';

import Container from '../../components/Container';
import ProfileTopMenu from './ProfileTopMenu';
import ProfileTopSubs from './ProfileTopSubs';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';

const ProfileScreen: React.FC = () => {
  return (
    <Container>
      <ScrollView>
          <View className="flex flex-1 pt-[10px] pb-[100px]">
            <ProfileTopMenu />
            <ProfileTopSubs />
            <ProfileImage />
            <ProfileInfo />
          </View>
      </ScrollView>
        
        
    </Container>
    
  );
};

export default ProfileScreen;
