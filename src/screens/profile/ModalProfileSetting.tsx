import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, PanResponder, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import InterestsSetting from './InterestsSetting';
import BasicSetting from './BasicSetting';
import LifeStyles from './LifeStyles';
import MusicSetting from './MusicSetting';
import userStore from '../../storage/UserStore';
import { TYPEMODAL } from '../../constant/typeModal';
import MovieSetting from './MovieSetting';
import BookSetting from './BookSetting';
import TravelSetting from './TravelSetting';

export default function ModalProfileSetting({ closeModal }) {
    const navigation = useNavigation();
    const typeModal = userStore.modalType;
    return (
        <View style={{ backgroundColor: '#131B22', flex: 1, width: '100%' }}>
            <View style={styles.header}>
                <View style={styles.wrapSl}>
                    <Text style={styles.title}>{userStore.titleModal}</Text>
                </View>
                <TouchableOpacity style={styles.headerModal} hitSlop={20} onPress={() => { closeModal(false) }}>
                    <Image
                        source={require('../../assets/images/closeIc.png')}
                        style={styles.btnBack}>
                    </Image>
                </TouchableOpacity>

            </View>
            {typeModal === TYPEMODAL.INTEREST && <InterestsSetting closeModal={closeModal} />}
            {typeModal === TYPEMODAL.BASIC && <BasicSetting closeModal={closeModal}/>}
            {typeModal === TYPEMODAL.LIFE && <LifeStyles closeModal={closeModal}/>}
            {typeModal === TYPEMODAL.MUSIC && <MusicSetting closeModal={closeModal}/>}
            {typeModal === TYPEMODAL.MOVIE && <MovieSetting closeModal={closeModal}/>}
            {typeModal === TYPEMODAL.BOOK && <BookSetting closeModal={closeModal}/>}
            {typeModal === TYPEMODAL.TRAVEL && <TravelSetting closeModal={closeModal}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: 'red',
        // flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginHorizontal: 20
    },
    btnBack: {
        height: 24,
        width: 24,
    },
    grSlide: {
        width: 167,
        height: 20,
        marginLeft: -27
    },
    wrapSl: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    wrapContent: {
        // paddingHorizontal: 18,
        flex: 1,
        marginBottom: 90
    },
    next: {
        position: 'absolute',
        bottom: 34,
        height: 56,
        borderRadius: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    nextTxt: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: "center",
    },
    lineGra: {
        marginHorizontal: 20,
        borderRadius: 30,
        width: '100%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleCode: {
        fontSize: 24,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        textAlign: "left",
        color: '#f8f1e6',
        marginTop: 28
    },
    description: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        textAlign: "left",
        // width: 308,
        opacity: 0.5,
        marginTop: 10
    },
    scrollViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // marginTop:18
    },
    interestItem: {
        // backgroundColor: '#333',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
        marginHorizontal: 5,
        borderStyle: "solid",
        borderColor: '#2c3843',
        borderWidth: 1.5,
    },
    selectedInterest: {
        backgroundColor: '#BB9A65',
    },
    interestText: {
        color: '#f8f1e6',
        fontSize: 16,
    },
    searchContainer: {
        backgroundColor: 'rgba(44, 56, 67, 1)',
        borderRadius: 25,
        // paddingVertical: 8,
        paddingLeft: 48,
        marginBottom: 18,
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        marginTop: 18
    },
    searchInput: {
        flex: 1,
        color: '#f8f1e6',
        fontSize: 16,
    },
    iconSearch: {
        position: 'absolute',
        top: 16,
        left: 16
    },
    title: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#d7c09c",
    },
    headerModal: {
        position: 'absolute',
        top: 5,
        left: 0
    }
})
