import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import HeaderScreen from '../../../components/Header';

const ContactSupport: React.FC = () => {
    const navigation = useNavigation();
    const listSupport = [
        {
            id: 1,
            icon: require('../../../assets/images/sp1.png'),
            title: 'Customer Support'
        },
        {
            id: 2,
            icon: require('../../../assets/images/sp2.png'),
            title: 'Website'
        },
        {
            id: 3,
            icon: require('../../../assets/images/sp3.png'),
            title: 'WhatsApp'
        },
        {
            id: 4,
            icon: require('../../../assets/images/sp4.png'),
            title: 'Facebook'
        },
        {
            id: 5,
            icon: require('../../../assets/images/sp5.png'),
            title: 'Twitter'
        },
        {
            id: 6,
            icon: require('../../../assets/images/sp6.png'),
            title: 'Instagram'
        },
    ]
    return (
        <Container style={{ paddingHorizontal: 20 }}>
            <HeaderScreen title='Contact Support' />
            <View style={{marginTop:23}}>
                {listSupport.map((item) => {
                    return (
                        <TouchableOpacity style={styles.wrap}>
                            <Image source={item?.icon} />
                            <Text style={styles.title}>{item?.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </Container>
    )
}
const styles = StyleSheet.create({
    title: {
        flex: 1,
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
        marginLeft: 20
    },
    wrap: {
        borderRadius: 10,
        backgroundColor: "#1c252d",
        borderStyle: "solid",
        borderColor: "#40505f",
        borderWidth: 1,
        width: "100%",
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 20
    }
})
export default ContactSupport;