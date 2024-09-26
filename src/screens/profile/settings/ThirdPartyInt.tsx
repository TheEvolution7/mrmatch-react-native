import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import HeaderScreen from '../../../components/Header';
import LinearGradient from 'react-native-linear-gradient';

const ThirdPartyInt: React.FC = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState('Likes');
    const social = [
        {
            id: 1,
            title: 'Google',
            icon: require('../../../assets/images/google.png'),
            isConnected: false
        },
        {
            id: 2,
            title: 'Apple',
            icon: require('../../../assets/images/apple.png'),
            isConnected: true
        },
        {
            id: 3,
            title: 'Facebook',
            icon: require('../../../assets/images/fb_social.png'),
            isConnected: false
        },
        {
            id: 4,
            title: 'Twitter',
            icon: require('../../../assets/images/tw_social.png'),
            isConnected: false
        }
    ]

    const payments = [
        {
            id: 1,
            title: 'PayPal',
            icon: require('../../../assets/images/paypal.png'),
            isConnected: false
        },
        {
            id: 2,
            title: 'Google Pay',
            icon: require('../../../assets/images/google.png'),
            isConnected: true
        },
        {
            id: 3,
            title: 'Apple Pay',
            icon: require('../../../assets/images/apple.png'),
            isConnected: false
        },
        {
            id: 4,
            title: '•••• •••• •••• •••• 5567',
            icon: require('../../../assets/images/visa.png'),
            isConnected: false
        }
    ]

    return (
        <Container style={{ paddingHorizontal: 20 }}>
            <HeaderScreen title='Third Party Integrations' />
            <View style={styles.warpTab}>
                <TouchableOpacity
                    style={[styles.segment, selected === 'Likes' && styles.selectedSegment]}
                    onPress={() => setSelected('Likes')}
                >
                    {selected === 'Likes' ?
                        <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.segment, selected === 'Likes' && styles.selectedSegment]}>
                            <Text style={[styles.text]}>
                                Linked Accounts
                            </Text>
                        </LinearGradient>
                        :
                        <Text style={[styles.text]}>
                            Linked Accounts
                        </Text>
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.segment, selected === 'Super Likes' && styles.selectedSegment]}
                    onPress={() => setSelected('Super Likes')}
                >
                    {selected === 'Super Likes' ?
                        <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.segment, selected === 'Likes' && styles.selectedSegment]}>
                            <Text style={[styles.text]}>
                                Linked Payments
                            </Text>
                        </LinearGradient>
                        :
                        <Text style={[styles.text]}>
                            Linked Payments
                        </Text>
                    }
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 28 }}>
                {selected === 'Likes' ? social.map((item) => {
                    return (
                        <View style={[styles.wrapModule, { marginTop: 10 }]}>
                            <Image source={item?.icon} style={styles.icon} />
                            <Text style={styles.title}>{item?.title}</Text>
                            {item?.isConnected ?
                                <Text style={styles.connected}>Connected</Text>
                                :
                                <Text style={styles.notConnect}>Not Connected</Text>}
                        </View>
                    )
                })
                    :
                    payments.map((item) => {
                        return (
                            <View style={[styles.wrapModule, { marginTop: 10 }]}>
                                <Image source={item?.icon} style={styles.icon} />
                                <Text style={styles.title}>{item?.title}</Text>
                            </View>
                        )
                    })
                }
                {selected !== 'Likes' && <TouchableOpacity onPress={() => navigation.navigate('AddNewPayment')} style={[styles.wrapModule, { marginTop: 10, justifyContent: 'center' }]}>
                    <Image source={require('../../../assets/images/plusIcon.png')} style={{}} />
                    <Text style={[styles.title2, { fontWeight: '500' }]}>Add New Payment</Text>
                </TouchableOpacity>}

            </View>

        </Container>
    )
}
const styles = StyleSheet.create({
    warpTab: {
        flexDirection: 'row',
        backgroundColor: '#212c36', // Dark background color for unselected
        borderRadius: 25,
        height: 44,
        marginTop: 23,
        // padding: 5,
    },
    segment: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 10,
        borderRadius: 25,
        width: '100%',
    },
    selectedSegment: {
        backgroundColor: '#D4B07A', // Gold color for selected segment
    },
    text: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
    selectedText: {
        color: '#f8f1e6', // White text color for selected text
    },
    wrapModule: {
        borderRadius: 10,
        backgroundColor: "#1c252d",
        borderStyle: "solid",
        borderColor: "#40505f",
        borderWidth: 1,
        height: 83,
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
    title2: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "700",
        fontFamily: "Inter-Bold",
        color: "#f8f1e6",
        marginLeft: 20,
    },
    icon: {
        marginLeft: 20
    },
    connected: {
        fontSize: 16,
        letterSpacing: 0,
        lineHeight: 26,
        fontWeight: "700",
        fontFamily: "Inter-Bold",
        color: "#bb9a65",
        marginRight: 23
    },
    notConnect: {
        fontSize: 16,
        letterSpacing: 0,
        lineHeight: 26,
        fontWeight: "700",
        fontFamily: "Inter-Bold",
        color: "#40505f",
        marginRight: 23
    }
})
export default ThirdPartyInt;