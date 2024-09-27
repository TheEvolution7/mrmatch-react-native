import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import userStore from '../../../storage/UserStore';
import ProfileTopSubs from '../ProfileTopSubs';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';

const SettingsScreen: React.FC = () => {
    const navigation = useNavigation();
    const [isShowModal, setShowModal] = useState(false);
    const dataInfor = [
        { id: 1, label: 'Profile & Privacy', icon: require('../../../assets/images/setting1.png'), toScreen: 'PrivacyScreen' },
        { id: 2, label: 'Discovery Preferences', icon: require('../../../assets/images/setting2.png'), toScreen: 'DiscoveryPref' },
        { id: 3, label: 'Notification', icon: require('../../../assets/images/setting3.png'), toScreen: 'SettingNotification' },
        { id: 4, label: 'Account & Security', icon: require('../../../assets/images/setting4.png'), toScreen: 'SettingAccount' },
        { id: 5, label: 'Subscription', icon: require('../../../assets/images/setting5.png'), toScreen: 'UpgradeMembership' },
        { id: 6, label: 'App Appearance', icon: require('../../../assets/images/setting6.png'), toScreen: 'AppAppearance' },
        { id: 7, label: 'Third Party Integrations', icon: require('../../../assets/images/setting7.png'), toScreen: 'ThirdPartyInt' },
        { id: 8, label: 'Data & Analytics', icon: require('../../../assets/images/setting8.png'), toScreen: 'DataAnalytic' },
        { id: 9, label: 'Safety & Support', icon: require('../../../assets/images/setting9.png'), toScreen: 'SafetySupport' },
    ];
    return (
        <Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isShowModal}
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
                        <View style={[styles.wrapHeader, { paddingHorizontal: 20 }]}>
                            <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => setShowModal(false)}>
                                <Image
                                    source={require('../../../assets/images/closeIc.png')}
                                    style={{ width: 24, height: 24 }}
                                />
                            </TouchableOpacity>
                            <Text style={styles.txtHeader}>Logout</Text>
                        </View>
                        <View style={styles.device} />
                        <Text style={styles.txtAsk}>Are you sure you want to log out?</Text>
                        <View style={[styles.wrapGender, { paddingHorizontal: 20 }]}>
                            <TouchableOpacity onPress={() => setShowModal(false)} style={{ flex: 1, borderRadius: 30, borderWidth: 1, borderColor: '#d7c09c', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.number, { color: '#d7c09c' }]}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setShowModal(false);
                                navigation.navigate('LoginScreen');
                            }} style={{ flex: 1, marginLeft: 8 }}>
                                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', height: 56 }}>
                                    <Text style={styles.number}>Yes, Logout</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.wrapHeader}>
                <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../../assets/images/btnBack.png')}
                        style={styles.btnBack}
                    />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Settings</Text>
            </View>
            <ProfileTopSubs />
            <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                {dataInfor.map((item, index) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate(item?.toScreen);
                    }} key={index} style={styles.item}>
                        <View style={styles.iconContainer}>
                            <Image source={item?.icon} />
                        </View>
                        <Text style={styles.label}>{item.label}</Text>
                        <Image source={require('../../../assets/images/ArrowRight.png')} />
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.separator} />
            <TouchableOpacity onPress={() => setShowModal(true)} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25, marginLeft: 20 }}>
                <Image source={require('../../../assets/images/Logout.png')} />
                <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    wrapHeader: {
        flexDirection: 'row',
        width: '100%',
        height: 32,
        alignItems: 'center',
        marginTop: 26,
        paddingHorizontal: 20,
        marginBottom:30
    },
    txtHeader: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#D7C09C",
        flex: 1,
        textAlign: 'center',
        marginLeft: -12
    },
    btnBack: {
        width: 7,
        height: 14
    },
    txt1: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#bb9a65',
        marginTop: 27
    },
    iconContainer: {
        width: 40,
    },
    label: {
        flex: 1,
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
    },
    select: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        marginRight: 10,
        opacity: 0.5
    },
    device: {
        height: 1,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 24,
        marginLeft: -20
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
    },
    separator: {
        height: 2,
        opacity: 0.5,
        backgroundColor: 'rgba(107, 113, 118, 1)',
        // width: '100%',
        marginTop: 31,
        marginHorizontal: -20
    },
    logout: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#d54444",
        marginLeft: 20
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 22,
        // paddingHorizontal: 20,
    },
    modalView: {
        margin: 20,
        // paddingHorizontal: 20,
        // alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 21,
        backgroundColor: '#1c252d',
        borderStyle: "solid",
        // borderColor: '#bb9a65',
        // borderWidth: 1,
        width: '100%',
        // height: '100%',
        paddingBottom: 32
    },
    wrapGender: {
        flexDirection: 'row',
        marginTop: 40
    },
    number: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
    txtAsk: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: "#d7c09c",
        textAlign: 'center',
        marginTop: 34
    }
})

export default SettingsScreen;