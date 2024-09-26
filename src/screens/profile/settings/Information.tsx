import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Information: React.FC = () => {
    const navigation = useNavigation();
    const inforList = [
        {
            id: 1,
            title: 'FAQ',
            toScreen: 'FAQ'
        },
        {
            id: 1,
            title: 'Feedback',
            toScreen: 'FeedBack'
        },
        {
            id: 1,
            title: 'Contact Support',
            toScreen: 'ContactSupport'
        },
        {
            id: 1,
            title: 'Terms & Conditions',
            toScreen: 'Terms'
        },
        {
            id: 1,
            title: 'Privacy Policy',
            toScreen: 'Policy'
        },
        {
            id: 1,
            title: 'Partner',
            toScreen: ''
        },
        {
            id: 1,
            title: 'Job Vacancy',
            toScreen: ''
        },
        {
            id: 1,
            title: 'Accessibility',
            toScreen: ''
        },
        {
            id: 1,
            title: 'About us',
            toScreen: ''
        },
        {
            id: 1,
            title: 'Rate us',
            toScreen: ''
        },
        {
            id: 1,
            title: 'Visit Our Website',
            toScreen: ''
        },
        {
            id: 1,
            title: 'Follow us on Social Media',
            toScreen: ''
        },
    ]
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {inforList.map((item) => {
                return (
                    <TouchableOpacity onPress={() => {
                        if (item?.toScreen.length > 0) {
                            navigation.navigate(item?.toScreen);
                        }
                    }} style={styles.wrap}>
                        <Text style={styles.title}>{item?.title}</Text>
                        <Image source={require('../../../assets/images/rightArrow.png')} style={styles.icon} />
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    wrap: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 28
    },
    title: {
        flex: 1,
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
    },
    icon: {
        width: 7,
        height: 14
    }
})
export default Information;