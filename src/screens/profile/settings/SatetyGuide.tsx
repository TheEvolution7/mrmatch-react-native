import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import HeaderScreen from '../../../components/Header';

const Term = ({ title, desc }) => {
    const [isShowDetail, setShowDetail] = useState(false);
    return (
        <View >
            <View style={styles.separator} />
            <TouchableOpacity onPress={() => setShowDetail(!isShowDetail)} style={{ paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                    <Text style={styles.title}>{title}</Text>
                </View>

                {isShowDetail && <Text style={styles.desc}>{desc}</Text>}
            </TouchableOpacity>
        </View>
    )
}

const SafetyGuide: React.FC = (props) => {
    const navigation = useNavigation();
    const [funcAct, setFuncAct] = useState('General');
    const listFunc = ['General', 'Account', 'Dating', 'Subscriptions'];
    console.log(props?.route?.params?.id);
    const listData = [
        {
            id: 1,
            data: [
                {
                    id: 1,
                    title: 'A. Before Meeting Someone New',
                    desc: 'Identity Verification: Verify your profile and look for verified profiles to ensure authenticity.Research the Person: Do a quick search on their name or photos online to verify the legitimacy of their profile.Trust Your Instincts: If something feels off, trust your gut and consider ending the conversation or blocking the person.Use In-Platform Messaging: Keep conversations within Mr. Match until youre comfortable sharing personal details.'
                },
                {
                    id: 2,
                    title: 'B. Protect Your Personal Information',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 3,
                    title: 'C. While Interacting Online',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 4,
                    title: 'D. Planning Your First Meet-Up',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 5,
                    title: 'E. During the Date',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 6,
                    title: 'F. After the Date',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 7,
                    title: 'G. Red Flags to Watch Out For',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
            ]
        },
        {
            id: 1,
            data: [
                {
                    id: 1,
                    title: 'A.	Navigating Challenges Worldwide',
                    desc: 'Identity Verification: Verify your profile and look for verified profiles to ensure authenticity.Research the Person: Do a quick search on their name or photos online to verify the legitimacy of their profile.Trust Your Instincts: If something feels off, trust your gut and consider ending the conversation or blocking the person.Use In-Platform Messaging: Keep conversations within Mr. Match until youre comfortable sharing personal details.'
                },
                {
                    id: 2,
                    title: 'B.	Understand the Legal Landscape',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 3,
                    title: 'C.	Use Secure and Inclusive Dating Platforms',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
            ]
        },
        {
            id: 1,
            data: [
                {
                    id: 1,
                    title: 'A.	Profile Discretion',
                    desc: 'Use only your first name or a nickname, and avoid sharing identifiable information in your profile or with matches until you trust them.'
                },
                {
                    id: 2,
                    title: 'B.	Encrypted Communications',
                    desc: 'Use in-app messaging services that encrypt messages to protect your privacy from surveillance.'
                },
                {
                    id: 3,
                    title: 'C.	SafeDate Feature',
                    desc: 'Utilize features like Mr. Match’s SafeDate, which allows you to share your location with a trusted friend discreetly and send alerts if you feel unsafe.'
                },
                {
                    id: 4,
                    title: 'D. Planning Your First Meet-Up',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 5,
                    title: 'E. During the Date',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 6,
                    title: 'F. After the Date',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 7,
                    title: 'G. Red Flags to Watch Out For',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
            ]
        },
        {
            id: 1,
            data: [
                {
                    id: 1,
                    title: 'A. Before Meeting Someone New',
                    desc: 'Identity Verification: Verify your profile and look for verified profiles to ensure authenticity.Research the Person: Do a quick search on their name or photos online to verify the legitimacy of their profile.Trust Your Instincts: If something feels off, trust your gut and consider ending the conversation or blocking the person.Use In-Platform Messaging: Keep conversations within Mr. Match until youre comfortable sharing personal details.'
                },
                {
                    id: 2,
                    title: 'B. Protect Your Personal Information',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 3,
                    title: 'C. While Interacting Online',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 4,
                    title: 'D. Planning Your First Meet-Up',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 5,
                    title: 'E. During the Date',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 6,
                    title: 'F. After the Date',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 7,
                    title: 'G. Red Flags to Watch Out For',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
            ]
        },
        {
            id: 1,
            data: [
                {
                    id: 1,
                    title: 'A. Before Meeting Someone New',
                    desc: 'Identity Verification: Verify your profile and look for verified profiles to ensure authenticity.Research the Person: Do a quick search on their name or photos online to verify the legitimacy of their profile.Trust Your Instincts: If something feels off, trust your gut and consider ending the conversation or blocking the person.Use In-Platform Messaging: Keep conversations within Mr. Match until youre comfortable sharing personal details.'
                },
                {
                    id: 2,
                    title: 'B. Protect Your Personal Information',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 3,
                    title: 'C. While Interacting Online',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 4,
                    title: 'D. Planning Your First Meet-Up',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 5,
                    title: 'E. During the Date',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 6,
                    title: 'F. After the Date',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
                {
                    id: 7,
                    title: 'G. Red Flags to Watch Out For',
                    desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
                },
            ]
        }
    ]
    return (
        <Container style={{}}>
            <View style={{ paddingHorizontal: 20 }}>
                <HeaderScreen title={props?.route?.params?.title} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 23 }}>
                {listData[props?.route?.params?.id - 1]?.data.map((item) => {
                    return (
                        <Term title={item?.title} desc={item?.desc} />
                    )
                })}
            </ScrollView>
        </Container>
    )
}
const styles = StyleSheet.create({
    func: {
        borderColor: "#40505f",
        borderWidth: 1,
        marginRight: 12,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
    },
    active: {
        height: 44,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 15,
        letterSpacing: 0,
        lineHeight: 24,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
        marginHorizontal: 20
    },
    searchContainer: {
        backgroundColor: '#2c3843',
        borderRadius: 40,
        // paddingVertical: 8,
        paddingLeft: 48,
        marginBottom: 18,
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        marginTop: 20,
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
    separator: {
        // marginTop: 28,
        // marginBottom: 28,
        height: 1,
        backgroundColor: '#6B7176',
        marginLeft: -20,
        marginRight: -20,
    },
    title: {
        flex: 1,
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
    },
    desc: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        opacity: 0.5,
        marginTop: 10,
        marginHorizontal: 20
    }
})
export default SafetyGuide;