import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import HeaderScreen from '../../../components/Header';

const FAQQuesttion = ({ title, desc }) => {
    const [isShowDetail, setShowDetail] = useState(false);
    return (
        <View >
            <View style={styles.separator} />
            <TouchableOpacity onPress={() => setShowDetail(!isShowDetail)} style={{paddingVertical:28}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                    <Text style={styles.title}>{title}</Text>
                    {isShowDetail ?
                        <Image source={require('../../../assets/images/downIc.png')} style={{ width: 14, height: 7 }} />
                        :
                        <Image source={require('../../../assets/images/rightArrow.png')} style={{ width: 7, height: 14 }} />}

                </View>

                {isShowDetail && <Text style={styles.desc}>{desc}</Text>}
            </TouchableOpacity>
        </View>
    )
}

const FAQ: React.FC = () => {
    const navigation = useNavigation();
    const [funcAct, setFuncAct] = useState('General');
    const listFunc = ['General', 'Account', 'Dating', 'Subscriptions'];
    const listFaq = [
        {
            id: 1,
            title: 'What is Mr.Match?',
            desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
        },
        {
            id: 2,
            title: 'How to create a Mr.Match account?',
            desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
        },
        {
            id: 3,
            title: 'Is Mr.Match free to use?',
            desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
        },
        {
            id: 4,
            title: 'How does matching work on Mr.Match?',
            desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
        },
        {
            id: 5,
            title: 'Can I change my location on Mr.Match?',
            desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
        },
        {
            id: 6,
            title: 'How do I report a user or profile?',
            desc: 'Mr.Match is a dating app designed to help you meet new people, make meaningful connections, and find potential matches based on your interests and preferences.'
        },
    ]
    return (
        <Container style={{}}>
            <View style={{ paddingHorizontal: 20 }}>
                <HeaderScreen title='FAQ' />
            </View>

            <View style={{ height: 44, marginTop: 23, paddingHorizontal: 20 }}>
                <ScrollView horizontal={true}>
                    {listFunc.map((item) => {
                        return (
                            <TouchableOpacity onPress={() => setFuncAct(item)} style={[styles.func]}>
                                {funcAct === item ?
                                    <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={styles.active}>
                                        <Text style={styles.txt}>{item}</Text>
                                    </LinearGradient>
                                    :
                                    <Text style={styles.txt}>{item}</Text>
                                }
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>


            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Frequently Asked Questions"
                    placeholderTextColor="#AAA"
                // value={searchQuery}
                // onChangeText={setSearchQuery}
                />
                <Image style={styles.iconSearch} source={require('../../../assets/images/searchIcon.png')} width={24} height={24} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {listFaq.map((item) => {
                    return (
                        <FAQQuesttion title={item?.title} desc={item?.desc} />
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
        marginHorizontal: 20
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
export default FAQ;