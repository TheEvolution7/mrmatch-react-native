import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import SwitchS from '../../../components/Switch';
import LinearGradient from 'react-native-linear-gradient';


interface PaymentMethodProps {
    title: string;
}

const Notification: React.FC<PaymentMethodProps> = ({ title }) => {

    return (
        <>
            <View style={styles.wrapNoti}>
                <Text style={styles.titleNoti}>{title}</Text>
                <SwitchS />
            </View>
        </>
    );
};


const SettingNotification: React.FC = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState('Likes');
    return (
        <Container style={{paddingHorizontal:20}}>
            <View style={styles.wrapHeader}>
                <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../../assets/images/btnBack.png')}
                        style={styles.btnBack}
                    />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Notification</Text>
            </View>
            <View style={styles.warpTab}>
                <TouchableOpacity
                    style={[styles.segment, selected === 'Likes' && styles.selectedSegment]}
                    onPress={() => setSelected('Likes')}
                >
                    {selected === 'Likes' ?
                        <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.segment, selected === 'Likes' && styles.selectedSegment]}>
                            <Text style={[styles.text]}>
                                Push Notifications
                            </Text>
                        </LinearGradient>
                        :
                        <Text style={[styles.text]}>
                            Push Notifications
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
                                Email Notifications
                            </Text>
                        </LinearGradient>
                        :
                        <Text style={[styles.text]}>
                            Email Notifications
                        </Text>
                    }
                </TouchableOpacity>
            </View>
            <Notification title='New Matches' />
            <Notification title='New Messages' />
            <Notification title='Likes & Super Likes' />
            <Notification title='Profile Visitors' />
            <Notification title='Events and Activities' />
            <Notification title='Matches Activity' />
            <Notification title='Safety & Account Alerts' />
            <Notification title='Promotions & News' />
            <Notification title='In-App Recommendations' />
            <Notification title='Weekly Activity Summary' />
            <Notification title='Connection Requests' />
            <Notification title='Survey & Feedback Requests' />
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
        // paddingHorizontal: 20
    },
    txtHeader: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
        flex: 1,
        textAlign: 'center',
        marginLeft: -12
    },
    btnBack: {
        width: 7,
        height: 14
    },
    wrapNoti: {
        flexDirection: 'row',
        marginTop:24
    },
    titleNoti: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
        flex: 1
    },
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
    wrapInfor: {
        // width: screenWidth / 2.34,
        // height: screenWidth / 1.53,
        flex: 1,
        // margin: 10,
        borderRadius: 10,
    },
})

export default SettingNotification;