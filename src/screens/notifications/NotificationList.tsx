import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, PanResponder, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import NotificationItem from './NotificationItem';

export default function NotificationList() {
    const navigation = useNavigation();
    const listNotifi = [{
        id: 1,
        title: 'New Match! 🎉',
        message: 'You ve got a new match waiting to connect with you. Start a conversation!',
        time: '09:40 AM',
        type: 1,
    },
    {
        id: 2,
        title: 'New Match! 🎉',
        message: 'You ve got a new match waiting to connect with you. Start a conversation!',
        time: '09:40 AM',
        type: 2,
    },
    {
        id: 3,
        title: 'New Match! 🎉',
        message: 'You ve got a new match waiting to connect with you. Start a conversation!',
        time: '09:40 AM',
        type: 3,
    },
    {
        id: 4,
        title: 'New Match! 🎉',
        message: 'You ve got a new match waiting to connect with you. Start a conversation!',
        time: '09:40 AM',
        type: 4,
    },]
    return (
        <Container style={{ backgroundColor: '#131B22', flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/btnBack.png')}
                        style={styles.btnBack}>
                    </Image>
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Notification</Text>
                <Image
                    source={require('../../assets/images/fi_settings.png')} />
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.wrapDay}>
                    <Text style={styles.currentLocationTxt}>Today</Text>
                    <View style={styles.line}></View>
                </View>
                {listNotifi.map((item) => {
                    return (
                        <NotificationItem data={item} />
                    )
                })}
                <View style={styles.wrapDay}>
                    <Text style={styles.currentLocationTxt}>Yesterday</Text>
                    <View style={styles.line}></View>
                </View>
                {listNotifi.map((item) => {
                    return (
                        <NotificationItem data={item} />
                    )
                })}
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        // height: 20,
        marginTop: 20,
        paddingHorizontal: 20
    },
    btnBack: {
        height: 14,
        width: 7,
    },
    txtHeader: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#1c252d',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 20,
        paddingHorizontal: 20
    },
    currentLocationTxt: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
    },
    wrapDay: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    line: {
        height: 2,
        flex: 1,
        backgroundColor: 'rgba(107, 113, 118, 1)',
        width: '100%',
        marginLeft: 16,
        opacity: 0.5
    },
})