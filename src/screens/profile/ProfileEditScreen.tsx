import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';

import Container from '../../components/Container';
import ProfileEditTopMenu from './ProfileEditTopMenu';
import ProfileEditImage from './ProfileEditImage';



const ProfileEditScreen: React.FC = () => {


    return (
        <Container>
            <ProfileEditTopMenu />
            <ScrollView>
                <ProfileEditImage />
                
            </ScrollView>


        </Container>

    );
};

export default ProfileEditScreen;
