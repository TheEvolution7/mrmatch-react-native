import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, Modal, PanResponder, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import ModalSafety from '../../components/ModalSafety';
import ModalBlock from '../../components/ModalBlock';
import ModalUnmatched from '../../components/ModalUnmatched';
import userStore from '../../storage/UserStore';
import { TITLEMODAL, TYPEMODAL } from '../../constant/typeModal';

export default function ProfilePreferences({ openModal }) {
    const navigation = useNavigation();

    const movieList = [
        {
            title: 'Drama 🎭'
        },
        {
            title: 'Romance 💕'
        },
        {
            title: 'Horror 🧟‍♂️'
        },
        {
            title: 'Musical 🎵'
        },
        {
            title: 'K-Drama 🇰🇷🎭'
        },
    ]
    const bookList = [
        {
            title: 'Romance 💖'
        },
        {
            title: 'Classic Literature 📜'
        },
        {
            title: 'Paranormal 👻'
        },
        {
            title: 'Travel ✈️'
        },
        {
            title: 'Drama 🎭'
        },
    ]

    const TravelList = [
        {
            title: 'City Breaks 🌆'
        },
        {
            title: 'Cultural Exploration 🏛️'
        },
        {
            title: 'Beach Vacations 🏖️'
        },
        {
            title: 'Food Tourism 🍔'
        },
        {
            title: 'Staycations 🏡'
        },
    ]
    return (
        <View style={{}}>
            <TouchableOpacity onPress={() => {
                userStore.setTypeModal(TYPEMODAL.MUSIC);
                userStore.setTitleModal(TITLEMODAL.MUSIC);
                openModal(true);
            }} style={styles.wrapPreference}>
                <Text style={styles.aboutMe}>Music Preferences</Text>
                <Image source={require('../../assets/images/rightArrow.png')} style={{ width: 7, height: 14 }} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                {userStore.musicRef.map((item) => {
                    return (
                        <View style={styles.wrapTxt}>
                            <Text style={styles.txt4}>
                                {item}
                            </Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.device} />
            <TouchableOpacity onPress={() => {
                userStore.setTypeModal(TYPEMODAL.MOVIE);
                userStore.setTitleModal(TITLEMODAL.MOVIE);
                openModal(true);
            }} style={styles.wrapPreference}>
                <Text style={styles.aboutMe}>Movies Preferences</Text>
                <Image source={require('../../assets/images/rightArrow.png')} style={{ width: 7, height: 14 }} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                {userStore.movieRef.map((item) => {
                    return (
                        <View style={styles.wrapTxt}>
                            <Text style={styles.txt4}>
                                {item}
                            </Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.device} />
            <TouchableOpacity onPress={() => {
                userStore.setTypeModal(TYPEMODAL.BOOK);
                userStore.setTitleModal(TITLEMODAL.BOOK);
                openModal(true);
            }} style={styles.wrapPreference}>
                <Text style={styles.aboutMe}>Book Preferences</Text>
                <Image source={require('../../assets/images/rightArrow.png')} style={{ width: 7, height: 14 }} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                {userStore.bookRef.map((item) => {
                    return (
                        <View style={styles.wrapTxt}>
                            <Text style={styles.txt4}>
                                {item}
                            </Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.device} />
            <TouchableOpacity onPress={() => {
                userStore.setTypeModal(TYPEMODAL.TRAVEL);
                userStore.setTitleModal(TITLEMODAL.TRAVEL);
                openModal(true);
            }} style={styles.wrapPreference}>
                <Text style={styles.aboutMe}>Travel Preferences</Text>
                <Image source={require('../../assets/images/rightArrow.png')} style={{ width: 7, height: 14 }} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                {userStore.travelRef.map((item) => {
                    return (
                        <View style={styles.wrapTxt}>
                            <Text style={styles.txt4}>
                                {item}
                            </Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        // height: 20,
        marginTop: 20,
        paddingHorizontal: 20
    },
    btnBack: {
        height: 14,
        width: 7,
    },
    txtHeader: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    profileImage: {
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 20
    },
    verifyIc: {
        height: 30,
        width: 30,
        marginLeft: 18
    },
    txt1: {
        fontSize: 24,
        lineHeight: 38,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#bb9a65',
    },
    txt2: {
        fontSize: 12,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        marginLeft: 14
    },
    txt3: {
        fontSize: 16,
        letterSpacing: 0,
        lineHeight: 26,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        marginLeft: 12
    },
    txt4: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
    txt5: {
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#f8f1e6',
    },
    wrapVerify: {
        borderRadius: 30,
        width: 148,
        height: 39,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    device: {
        height: 2,
        width: '120%',
        marginLeft: -20,
        opacity: 0.5,
        backgroundColor: 'rgba(107, 113, 118, 1)',
        marginTop: 30
    },
    aboutMe: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#bb9a65',
        flex: 1
    },
    wrapTxt: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#bb9a65',
        borderRadius: 30,
        marginLeft: 8,
        marginTop: 10
    },
    wrapFriendShip: {
        borderRadius: 16,
        backgroundColor: 'rgba(187, 154, 101, 0.1)',
        borderStyle: "solid",
        borderColor: '#bb9a65',
        borderWidth: 1.5,
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 19,
        paddingTop: 28
    },
    btnChat: {
        position: 'absolute',
        right: 18,
        bottom: 26
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(19, 27, 34, 0.4)'
    },
    modalViewSafety: {
        width: '100%',
        backgroundColor: '#1c252d',
        position: 'absolute',
        bottom: 0,
        // left:0
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    centeredViewSafety: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        paddingHorizontal: 20
    },
    wrapPreference: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24
    }
})
