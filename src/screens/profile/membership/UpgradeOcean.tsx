import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import UpgradeTopMenu from './UpgradeTopMenu';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import userStore from '../../../storage/UserStore';
import { TYPESUBS } from '../../../constant/typeModal';


interface ProfileActionProps {
    title: string;
}

const ProfileAction: React.FC<ProfileActionProps> = ({ title }) => {
    return (
        <View style={styles.wrapModule}>
            <Image source={require('../../../assets/images/checkGuide_blue3.png')} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};


const UpgradeOcean: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <LinearGradient locations={[0, 0.5, 1]} colors={['rgba(0, 177, 216, 0)', 'rgba(0, 177, 216, 0)', 'rgba(0, 177, 216, 0.3)']} useAngle={true} angle={130.24} style={styles.backgr}>
                <View style={styles.wrapHeader}>
                    <Image source={require('../../../assets/images/heartMr_blue3.png')} style={styles.heart} />
                    <View style={styles.basicBtn}>
                        <Text style={styles.riverTxt}>Ocean</Text>
                    </View>
                </View>
                <View style={styles.separator} />
                <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center', marginTop: 20 }}>
                    <Text style={styles.txtMoney2}>$29.99</Text>
                    <Text style={styles.txtMoney4}>/ month</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center' }}>
                    <Text style={styles.txtMoney3}>$79.99</Text>
                    <Text style={styles.txtMoney4}>/ 3 months</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center' }}>
                    <Text style={styles.txtMoney3}>$149.99</Text>
                    <Text style={styles.txtMoney4}>/ 6 months</Text>
                </View>
                <View style={styles.separator} />
                <Text style={styles.free}>Features</Text>
                <ProfileAction title='Unlimited Matches: Keep swiping until you find the perfect match.' />
                <ProfileAction title='Message Recall: Undo sent messages within 10 minutes.' />
                <ProfileAction title='1 Free Profile Boost per month: Increase your visibility.' />
                <ProfileAction title='Incognito Mode: Browse profiles anonymously.' />
                <ProfileAction title='Travel Mode: Connect with singles in different cities.' />
                <ProfileAction title='2 Free Likes Weekly: Show special interest without limitations.' />
                <ProfileAction title='Profile Control: Manage your profile visibility and settings.' />
                <ProfileAction title='Verify Your ID and Get a Special Badge: Enhance trust with a verification badge.' />
                <View style={styles.separator} />
                <Text style={styles.free}>Benefits</Text>
                <ProfileAction title='Enhanced Security: Advanced verification processes increase safety.' />
                <ProfileAction title='Greater Control: Manage interactions and maintain privacy.' />
                <ProfileAction title='Increased Visibility: Boosts enhance your profile`s exposure.' />
                <ProfileAction title='Personalized Experience: Adjust settings based on your travel and privacy preferences.' />
                <View style={styles.separator} />
                <View style={styles.wrapBtn}>
                    <TouchableOpacity style={styles.btnFree}>
                        <Text style={[styles.txt, { color: 'rgba(196, 255, 234, 1)' }]}>Free Trial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('PaymentMethod');
                        userStore.settypeSub(TYPESUBS.OCEAN);
                    }} style={styles.btnSelect}>
                        <Text style={styles.txt}>Select Plan</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        shadowColor: "rgba(49, 192, 141, 0.5)",
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
        borderColor: "rgba(49, 192, 141, 0.5)",
        borderWidth: 1,
        width: "100%",
        marginTop: 32,
    },
    wrapHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
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
        marginLeft: 16,
        backgroundColor: '#31c08d'
    },
    separator: {
        height: 2,
        opacity: 0.3,
        backgroundColor: 'rgba(0, 177, 216, 0.5)',
        // width: '100%',
        marginTop: 18,
        marginHorizontal: -16
    },
    wrapModule: {
        flexDirection: 'row',
        marginTop: 12,
        marginLeft: 14,
        flex: 1,
        alignItems: 'center'
    },
    icon: {

    },
    title: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: "rgba(196, 255, 234, 1)",
        marginLeft: 12,
        flex: 1
    },
    free: {
        fontSize: 18,
        letterSpacing: 0,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "rgba(49, 192, 141, 1)",
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
    },
    txtMoney1: {

    },
    txtMoney2: {
        fontSize: 40,
        // li3neHeight: 64,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "rgba(49, 192, 141, 1)",
    },
    txtMoney3: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "rgba(49, 192, 141, 1)"
    },
    txtMoney4: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "rgba(196, 255, 234, 1)",
    },
    wrapBtn: {
        flexDirection: 'row',
        marginBottom: 35,
        marginTop: 22
    },
    btnFree: {
        borderRadius: 800,
        backgroundColor: "#1c252d",
        borderStyle: "solid",
        borderColor: "rgba(196, 255, 234, 1)",
        borderWidth: 1,
        height: 56,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSelect: {
        borderRadius: 800,
        backgroundColor: "rgba(49, 192, 141, 1)",
        flex: 1,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    }
})

export default UpgradeOcean;
