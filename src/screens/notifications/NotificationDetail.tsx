import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, PanResponder, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import NotificationItem from './NotificationItem';

export default function NotificationDetai(props) {
    const navigation = useNavigation();
    console.log(props?.route);
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
            <View style={{ marginLeft: 20, flex: 1, marginTop:30 }}>
                <Text style={styles.title}>{props?.route?.params?.detail?.title}</Text>
                <Text style={styles.message}>{props?.route?.params?.detail?.message}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.time}>{props?.route?.params?.detail?.time}</Text>
                </View>
            </View>
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