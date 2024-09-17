import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';

import Container from '../../components/Container';
import ProfileEditTopMenu from './ProfileEditTopMenu';
import ProfileEditImage from './ProfileEditImage';
import ProfileEditInfo from './ProfileEditInfo';
import { UserProfile } from './ProfileInfo';
import ProfileEditRelationship from './ProfileEditRelationship';
import ProfileOptionInterest from './ProfileOptionInterest';
import ProfileSocialConnect from './ProfileSocialConnect';
import ProfileMember from '../explore/ProfileMember';
import ProfileOptionBasic from './ProfileOptionBasic';
import BasicInformation from '../explore/BasicInformation';
import LifeStyle from '../explore/LifeStyle';
import ProfilePreferences from '../explore/ProfilePreferennces';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import ModalProfileSetting from './ModalProfileSetting';



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
    const [modalVisible, setShowModalVisible] = useState(false);
    const [typeModal, setTypeModal] = useState('');

    return (
        <Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                }}>
                <BlurView
                    style={styles.absolute}
                    // blurType="light"
                    blurAmount={0.1}
                // reducedTransparencyFallbackColor="white"
                />
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ModalProfileSetting closeModal={setShowModalVisible} typeModal={typeModal} />
                    </View>
                </View>
            </Modal>
            <ProfileEditTopMenu />
            <ScrollView showsHorizontalScrollIndicator={false}>
                <ProfileEditImage />
                <ProfileEditInfo profile={profile} setProfile={setProfile} />
                <ProfileEditRelationship />
                <ProfileOptionInterest openModal={setShowModalVisible}/>
                <ProfileSocialConnect />
                <View style={{ paddingHorizontal: 20 }}>
                    <BasicInformation openModal={setShowModalVisible}/>
                    <LifeStyle openModal={setShowModalVisible}/>
                    <ProfilePreferences openModal={setShowModalVisible}/>
                </View>
            </ScrollView>
            <View style={[styles.wrapGender, { paddingHorizontal: 20 }]}>
                <TouchableOpacity style={{ flex: 1, borderRadius: 30, borderWidth: 1, borderColor: '#d7c09c', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.number, { color: '#d7c09c' }]}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginLeft: 8 }}>
                    <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', height: 56 }}>
                        <Text style={styles.number}>Apply</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </Container>

    );
};

const styles = StyleSheet.create({
    wrapGender: {
        flexDirection: 'row',
        marginTop: 22
    },
    number: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(19, 27, 34, 0.4)'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        // paddingHorizontal: 20,
    },
    modalView: {
        // margin: 20,
        // paddingHorizontal: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        // shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 21,
        backgroundColor: '#1c252d',
        borderStyle: "solid",
        // borderColor: '#bb9a65',
        // borderWidth: 1,
        flex: 1,
        // height: '100%',
        // paddingBottom: 32,
        width: '100%'
    },
})

export default ProfileEditScreen;
