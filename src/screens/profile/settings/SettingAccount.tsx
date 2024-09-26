import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import SwitchS from '../../../components/Switch';
import LinearGradient from 'react-native-linear-gradient';


interface PaymentMethodProps {
    title: string;
}

const Notification: React.FC<PaymentMethodProps> = ({ title }) => {

    return (
        <>
            <View style={styles.wrapNoti}>
                <Text style={styles.titleNoti}>{title}</Text>
                <SwitchS />
            </View>
        </>
    );
};

interface ProfileVerificationProps {
    title: string;
    description?: string;
    onPress: () => void;
    txtValue?: string;
}

const ProfileVerification: React.FC<ProfileVerificationProps> = ({ title, description, onPress, txtValue }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.title}>{title}</Text>
                {txtValue && <Text style={styles.txtValue}>{txtValue}</Text>}
                <Image source={require('../../../assets/images/ArrowRight.png')} style={styles.arrowIcon} />
            </View>
            {description && <Text style={styles.description}>{description}</Text>}
        </TouchableOpacity>
    );
};



const SettingAccount: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Container style={{ paddingHorizontal: 20 }}>
            <View style={styles.wrapHeader}>
                <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../../assets/images/btnBack.png')}
                        style={styles.btnBack}
                    />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Account & Security</Text>
            </View>
            <Notification title='Remember me' />
            <Notification title='Biometric ID' />
            <Notification title='Face ID' />
            <Notification title='SMS Authenticator' />
            <Notification title='Google Authenticator' />
            <View style={styles.device} />
            <Text style={[styles.tit, { marginTop: 28 }]}>Change Password</Text>
            <View style={styles.device} />
            <ProfileVerification title='Device Management' description='Manage your account on the various devices you own.' onPress={() => { }} />
            <View style={styles.device} />
            <ProfileVerification title='Deactivate Account' description='Temporarily hide your profile. Easily reactivate when you re ready.' onPress={() => { }} />
            <View style={styles.device} />
            <TouchableOpacity style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.title, { color: '#D54444' }]}>Delete Account</Text>
                    <Image source={require('../../../assets/images/rightArrow_red.png')} style={styles.arrowIcon} />
                </View>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    wrapNoti: {
        flexDirection: 'row',
        marginTop: 24
    },
    titleNoti: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
        flex: 1
    },
    wrapHeader: {
        flexDirection: 'row',
        width: '100%',
        height: 32,
        alignItems: 'center',
        marginTop: 0,
        // paddingHorizontal: 20
    },
    txtHeader: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
        flex: 1,
        textAlign: 'center',
        marginLeft: -12
    },
    btnBack: {
        width: 7,
        height: 14
    },
    device: {
        height: 1,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 24,
        marginLeft: -20
    },
    tit: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "#f8f1e6",
    },
    container: {
        // justifyContent: 'space-between',
        // alignItems: 'center',
        marginTop: 24
    },
    title: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6", // Semi-bold to match the "Profile Verification" style
        flex: 1
    },
    description: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        opacity: 0.5,
        marginTop: 10
    },
    arrowIcon: {
        width: 7,
        height: 14, // Adjust this size to fit the arrow icon in the design
        marginLeft: 18
    },
    txtValue: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
    }
})

export default SettingAccount;
