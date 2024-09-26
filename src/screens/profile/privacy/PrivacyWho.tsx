import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SwitchS from '../../../components/Switch';

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


const PrivacyWho: React.FC = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ flex: 1, paddingHorizontal: 20, width: '100%' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 27 }}>
                <Text style={styles.txt1}>Who You See</Text>
                <View style={styles.line}></View>
            </View>

            <View style={styles.wrapBasic}>
                <Text style={styles.txt2}>Basic Recommendation</Text>
                <Text style={styles.txt3}>See the most revelant people to you</Text>
            </View>

            <View style={[styles.wrapBasic, styles.wrapExt]}>
                <Text style={styles.txt2}>Recently Active</Text>
                <Text style={styles.txt3}>See the most recently active first</Text>
                <TouchableOpacity style={styles.riverBtn}>
                    <LinearGradient locations={[0, 1]} colors={['rgba(75, 125, 255, 1)', 'rgba(22, 48, 115, 1)']} useAngle={true} angle={101.24} style={{ flex: 1, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.riverTxt}>River</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.device} />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 27 }}>
                <Text style={styles.txt1}>Your Visibility</Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.wrapBasic}>
                <Text style={styles.txt2}>Standard</Text>
                <Text style={styles.txt3}>You will be discoverable in the card stack</Text>
            </View>
            <View style={[styles.wrapBasic, styles.wrapExt]}>
                <Text style={styles.txt2}>Hidden</Text>
                <Text style={styles.txt3}>Your profile will be hidden. Explore is disabled</Text>
            </View>
            <View style={[styles.wrapBasic, styles.wrapExt]}>
                <Text style={styles.txt2}>Igconito Mode</Text>
                <Text style={styles.txt3}>You will be seen only by people you Like</Text>
                <TouchableOpacity style={styles.riverBtn}>
                    <LinearGradient locations={[0, 1]} colors={['rgba(75, 125, 255, 1)', 'rgba(22, 48, 115, 1)']} useAngle={true} angle={101.24} style={{ flex: 1, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.riverTxt}>River</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.device} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 27 }}>
                <Text style={styles.txt1}>Who Message You</Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.smartPhotoHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Text style={styles.smartPhotoTitle}>Verified Message</Text>
                    <Image source={require('../../../assets/images/verifyIc_30.png')} />
                </View>
                <SwitchS />
            </View>
            <Text style={styles.txt3}>Only Verified Profile can enabled this to only receive messages from other Verified Profile</Text>
            <View style={styles.device} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 27 }}>
                <Text style={styles.txt1}>Privacy</Text>
                <View style={styles.line}></View>
            </View>
            <ProfileVerification title='Profile Verification' description='Verify your profile to gain more trust.' onPress={() => { }} />
            <ProfileVerification title='Blocked Users (24)' description='The people you blocked are displayed here.' onPress={() => { navigation.navigate('ListBlockedUsers') }} />
            <View style={styles.device} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 27 }}>
                <Text style={styles.txt1}>Your Public Profile</Text>
                <View style={styles.line}></View>
            </View>
            <ProfileVerification title='Username' onPress={() => { navigation.navigate('ChangeUserName') }} txtValue='andrew49' />
            <ProfileVerification title='View Web Profile' onPress={() => { }} />
            <ProfileVerification title='Share My Profile' onPress={() => { }} />
            <View style={styles.device} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 27 }}>
                <Text style={styles.txt1}>Your Public Profile</Text>
                <View style={styles.line}></View>
            </View>
            <ProfileVerification title='Manage Active Status' onPress={() => { }} />
            <ProfileVerification title='Profile Verification' description='Verify your profile to gain more trust.' onPress={() => { }} />
            <ProfileVerification title='Blocked Users (24)' description='The people you blocked are displayed here.' onPress={() => { navigation.navigate('ListBlockedUsers') }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    txt1: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#d7c09c",
    },
    wrapBasic: {
        borderRadius: 16,
        backgroundColor: 'rgba(187, 154, 101, 0.1)',
        borderStyle: "solid",
        borderColor: '#bb9a65',
        borderWidth: 1.5,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 18,
        marginTop: 20
    },
    txt2: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
    },
    txt3: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        opacity: 0.5,
        marginTop: 10
    },
    wrapExt: {
        marginTop: 20,
        backgroundColor: 'transparent',
        borderColor: 'rgba(44, 56, 67, 1)'
    },
    riverBtn: {
        position: 'absolute',
        top: 14,
        right: 14,
        borderRadius: 14,
        width: 68,
        height: 34
    },
    riverTxt: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 22,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#f8f1e6',
    },
    device: {
        height: 1,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 24,
        marginLeft: -20
    },
    line: {
        height: 1,
        flex: 1,
        backgroundColor: 'rgba(107, 113, 118, 1)',
        marginLeft: 16
    },
    profileCompletionContent: {
        flexDirection: 'row',
        gap: 15,
    },
    innerGradient: {
        borderRadius: 10,
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 15,
        flex: 1,
    },
    profileCompletionTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    profileCompletionTitle: {
        color: '#BB9A65',
        fontSize: 16,
        fontFamily: 'font-heading',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    profileCompletionSubtitle: {
        color: '#F8F1E6',
        fontSize: 12,
        fontFamily: 'font-body',
    },
    profileCompletionContainer: {
        borderRadius: 10,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smartPhotoHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24
    },
    smartPhotoTitle: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
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
        opacity: 0.5
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
});

export default PrivacyWho;
