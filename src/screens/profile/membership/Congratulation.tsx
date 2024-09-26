import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';



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


const Congratulation: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <View style={styles.wrapHeader}>
                <TouchableOpacity style={{ position: 'absolute', left: 20, top: 12 }} hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../../assets/images/clearTxt.png')}
                        style={styles.btnBack}
                    />
                </TouchableOpacity>
                <View style={styles.bgHeader}>
                    <Text style={styles.txtHeader}>Ocean</Text>
                </View>
            </View>
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <View style={styles.wrapCongra}>
                    <Image source={require('../../../assets/images/wrapCongra.png')} />
                    <Text style={styles.txt1}>Congratulations!</Text>
                    <Text style={[styles.txt2, { marginTop: 16 }]}>You're Now a Mr.Match</Text>
                    <Text style={styles.txt2}>Ocean Member!</Text>
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
                <Text style={[styles.txt3, { marginTop: 24 }]}>Your dating experience is about to get even more exciting and efficient.</Text>
                <Text style={[styles.txt3, { marginTop: 30, marginBottom:30 }]}>Enjoy your Platinum journey!</Text>
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={{}}>
                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.btnCont}>
                    <Text style={styles.txtCon}>Let’s Get Matched</Text>
                </LinearGradient>
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
        marginTop: 0,
        paddingHorizontal: 20,
        justifyContent: 'center'

    },
    txtHeader: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',

        textAlign: 'center',
    },
    btnBack: {
        width: 24,
        height: 24
    },
    bgHeader: {
        borderRadius: 1000,
        backgroundColor: "#31c08d",
        width: 77,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapCongra: {
        alignItems: 'center',
        marginTop: 27
    },
    txt1: {
        fontSize: 32,
        letterSpacing: -0.3,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
        marginTop: 37
    },
    txt2: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: "#d7c09c",
    },
    separator: {
        height: 2,
        opacity: 0.3,
        backgroundColor: 'rgba(0, 177, 216, 0.5)',
        // width: '100%',
        marginTop: 18,
        marginHorizontal: -20
    },
    wrapModule: {
        flexDirection: 'row',
        marginTop: 12,
        marginLeft: 14,
        flex: 1,
        alignItems: 'center'
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
    txt3: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: "#d7c09c",
        textAlign: 'center'
    },
    txtCon: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
    },
    btnCont: {
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: 20
    },
})

export default Congratulation;