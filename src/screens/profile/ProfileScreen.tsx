import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

import Container from '../../components/Container';
import ProfileTopMenu from './ProfileTopMenu';
import ProfileTopSubs from './ProfileTopSubs';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
import ProfileRelationship from './ProfileRelationship';
import ProfileOptionInterest from './ProfileOptionInterest';
import ProfileOptionSocial from './ProfileSocial';
import ProfileOptionBasic from './ProfileOptionBasic';
import ProfileOptionLifestyle from './ProfileOptionLifestyle';
import ProfileOptionMovie from './ProfileOptionMovie';
import ProfileOptionBook from './ProfileOptionBook';
import ProfileOptionTravel from './ProfileOptionTravel';




const ProfileScreen: React.FC = () => {



  return (
    <Container>
      <ProfileTopMenu />
      <ScrollView>
        <View style={styles.container}>

          <ProfileTopSubs />
          <ProfileImage />
          <ProfileInfo />
          <ProfileRelationship />
          <ProfileOptionInterest />
          <ProfileOptionSocial />

          <ProfileOptionBasic />
          <ProfileOptionLifestyle />
          <ProfileOptionMovie />
          <ProfileOptionBook />
          <ProfileOptionTravel />
        </View>
      </ScrollView>
    </Container>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 100,
  },
})

export default ProfileScreen;
