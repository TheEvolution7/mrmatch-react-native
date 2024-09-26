import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import HeaderScreen from '../../../components/Header';

const Term = ({ title, desc }) => {
    const [isShowDetail, setShowDetail] = useState(false);
    return (
        <TouchableOpacity onPress={() => setShowDetail(!isShowDetail)}>
            <View style={styles.separator} />
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal:20 }}>
                <Text style={styles.title}>{title}</Text>
            </View>

            {isShowDetail && <Text style={styles.desc}>{desc}</Text>}

        </TouchableOpacity>
    )
}

const Terms: React.FC = () => {
    const navigation = useNavigation();
    const [funcAct, setFuncAct] = useState('General');
    const listFunc = ['General', 'Account', 'Dating', 'Subscriptions'];
    const listFaq = [
        {
            id: 1,
            title: '1. Acceptance of Terms',
            desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
        },
        {
            id: 2,
            title: '2. Eligibility',
            desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
        },
        {
            id: 3,
            title: '3. Account Creation',
            desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
        },
        {
            id: 4,
            title: '4. App Usage',
            desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
        },
        {
            id: 5,
            title: '5. Privacy',
            desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
        },
        {
            id: 6,
            title: '6. Safety',
            desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
        },
        {
            id: 7,
            title: '7. Premium Services',
            desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
        },
        {
            id: 8,
            title: '8. Termination',
            desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
        },
    ]
    return (
        <Container style={{ }}>
            <View style={{paddingHorizontal:20}}>
                <HeaderScreen title='Terms & Conditions' />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {listFaq.map((item) => {
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
        marginTop: 28,
        marginBottom: 28,
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
        marginHorizontal:20
    }
})
export default Terms;