import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import UpgradeTopMenu from './UpgradeTopMenu';
import LinearGradient from 'react-native-linear-gradient';

interface ProfileActionProps {
    title: string;
}

const ProfileAction: React.FC<ProfileActionProps> = ({ title }) => {
    return (
        <View style={styles.wrapModule}>
            <Image source={require('../../../assets/images/checkGuide.png')} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};


const UpgradeBasic: React.FC = () => {
    return (
        <View style={styles.container}>
            <LinearGradient locations={[0, 0.5, 1]} colors={['rgba(187, 154, 101, 0)', 'rgba(187, 154, 101, 0)', 'rgba(119, 93, 52, 0.4)']} useAngle={true} angle={130.24} style={styles.backgr}>
                <View style={styles.wrapHeader}>
                    <Image source={require('../../../assets/images/heartMr.png')} style={styles.heart} />
                    <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={styles.basicBtn}>
                        <Text style={styles.riverTxt}>Basic</Text>
                    </LinearGradient>
                </View>
                <View style={styles.separator} />
                <Text style={styles.free}>Free</Text>
                <ProfileAction title='Create and Edit Profile' />
                <ProfileAction title='Swipe Match' />
                <ProfileAction title='Limited Daily Swipes' />
                <ProfileAction title='Basic Profile Verification' />
                <ProfileAction title='Chat with Mutual Matches' />
                <View style={styles.separator} />
                <TouchableOpacity style={styles.btnPlan}>
                    <Text style={styles.txt}>Your Current Plan</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        shadowColor: "rgba(187, 154, 101, 0.5)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 35,
        elevation: 35,
        shadowOpacity: 1,
        borderRadius: 10,
        backgroundColor: "#1c252d",
        borderStyle: "solid",
        borderColor: "rgba(187, 154, 101, 0.3)",
        borderWidth: 1,
        width: "100%",
        marginTop: 38,
    },
    wrapHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24
    },
    heart: {

    },
    riverTxt: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 22,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "#f8f1e6",
    },
    basicBtn: {
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 6,
        marginLeft: 16
    },
    separator: {
        height: 1,
        opacity: 0.3,
        backgroundColor: '#BB9A65',
        // width: '100%',
        marginTop: 18,
        marginHorizontal: -16
    },
    wrapModule: {
        flexDirection: 'row',
        marginTop: 12,
        marginLeft: 14
    },
    icon: {

    },
    title: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        marginLeft: 12
    },
    free: {
        fontSize: 40,
        lineHeight: 64,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
        marginLeft: 14,
        marginTop: 20
    },
    backgr: {
        // flex: 1,
        paddingHorizontal: 16,
    },
    btnPlan: {
        borderRadius: 800,
        backgroundColor: "#40505f",
        width: "100%",
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    txt: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
    }
})

export default UpgradeBasic;
