import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';

import Container from '../../components/Container';
import ProfileEditTopMenu from './ProfileEditTopMenu';
import ProfileEditImage from './ProfileEditImage';
import ProfileEditInfo from './ProfileEditInfo';
import { UserProfile } from './ProfileInfo';
import ProfileEditRelationship from './ProfileEditRelationship';



const ProfileEditScreen: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile>({
        name: 'Andrew',
        birthdate: '12/27/1995',
        gender: 'Man',
        pronouns: '',
        height: '',
        weight: '',
        jobtitle: '',
        company: '',
        school: '',
        livingin: '',
        aboutme: '',
    });

    return (
        <Container>
            <ProfileEditTopMenu />
            <ScrollView>
                <ProfileEditImage />
                <ProfileEditInfo profile={profile} setProfile={setProfile} />
                <ProfileEditRelationship />
            </ScrollView>


        </Container>

    );
};

export default ProfileEditScreen;
