import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Safety: React.FC = () => {
    const navigation = useNavigation();
    const safetyArr = [
        {
            id: 1,
            icon: require('../../../assets/images/safety1.png'),
            title: 'Safety Tips for Secure Dating'
        },
        {
            id: 2,
            icon: require('../../../assets/images/safety2.png'),
            title: 'LGBTQ+ Dating Safety'
        },
        {
            id: 3,
            icon: require('../../../assets/images/safety3.png'),
            title: 'Digital Security Measures'
        },
        {
            id: 4,
            icon: require('../../../assets/images/safety4.png'),
            title: 'Romance Scams and How to Avoid Them'
        },
        {
            id: 5,
            icon: require('../../../assets/images/safety5.png'),
            title: 'How Mr. Match Ensures Your Safety'
        },
    ]
    return (
        <ScrollView>
            <Text style={styles.txt1}>Your safety and well-being are my top priorities. Follow these tips to ensure a secure and positive dating experience.</Text>
            {
                safetyArr.map((item) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('SafetyGuide', { id: item?.id, title: item?.title })} style={[styles.wrapModule, { marginTop: 20 }]}>
                            <LinearGradient locations={[0, 0.3, 1]} colors={['rgba(119, 93, 52, 0)', 'rgba(119, 93, 52, 0)', 'rgba(187, 154, 101, 0.2)']} useAngle={true} angle={101.24} style={styles.wrapModule}>
                                <Image source={item?.icon} style={styles.icon} />
                                <Text style={styles.title}>{item?.title}</Text>
                                <Image source={require('../../../assets/images/safetyArrow.png')} style={{ width: 7, height: 14, marginRight: 20 }} />
                            </LinearGradient>
                        </TouchableOpacity>
                    )
                })
            }
            <Text style={styles.txt2}>Your Safety Resources</Text>
            <View style={{ flexDirection: 'row', marginTop: 16 }}>
                <Text style={styles.txt3}>Report a Concern: </Text>
                <Text style={styles.txt4}>[mailto:support@mrmatch.io]</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.txt3}>Learn More About SafeDate: </Text>
                <Text style={styles.txt4}>[SafeDate Feature]</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                <Text style={styles.txt3}>Frequently Asked Questions: </Text>
                <Text style={styles.txt4}>[FAQs]</Text>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    txt1: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        opacity: 0.5,
        marginTop: 34
    },
    txt2: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "#bb9a65",
        marginTop: 40
    },
    txt3: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: "#868684"
    },
    txt4: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "#bb9a65"
    },
    wrapModule: {
        borderRadius: 10,
        backgroundColor: "#1c252d",
        borderStyle: "solid",
        borderColor: "#40505f",
        borderWidth: 1,
        height: 94,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "700",
        fontFamily: "Inter-Bold",
        color: "#f8f1e6",
        marginLeft: 20,
        flex: 1
    },
    icon: {
        marginLeft: 20
    },
})

export default Safety;