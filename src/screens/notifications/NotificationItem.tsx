import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, PanResponder, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function NotificationItem({ data }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('NotificationDetai', { detail: data })} style={styles.container}>
            {data?.type === 1 && <Image source={require('../../assets/images/avatarFindFriend.png')} style={styles.avatar} />}
            {data?.type === 2 && <Image source={require('../../assets/images/ticketIc.png')} style={styles.avatar} />}
            {data?.type === 3 && <Image source={require('../../assets/images/FliNoti.png')} style={styles.avatar} />}
            {data?.type === 4 && <Image source={require('../../assets/images/sercurityIc.png')} style={styles.avatar} />}
            <View style={{ marginLeft: 20, flex: 1 }}>
                <Text style={styles.title}>{data?.title}</Text>
                <Text style={styles.message}>{data?.message}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.time}>{data?.time}</Text>
                    <Image source={require('../../assets/images/rightArrow.png')} style={{ width: 7, height: 14 }} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 28,
        alignItems: 'center',
        width: '100%',

    },
    avatar: {
        width: 60,
        height: 60
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#bb9a65',
    },
    message: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        marginTop: 8
    },
    time: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        textAlign: "left",
        opacity: 0.5,
        marginTop: 14,
        flex: 1
    }
})