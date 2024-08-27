import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, PanResponder, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function TravelMode() {
    const navigation = useNavigation();
    return (
        <Container style={{ backgroundColor: '#131B22', flex: 1, paddingHorizontal: 20 }}>
            <View style={styles.header}>
                <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/btnBack.png')}
                        style={styles.btnBack}>
                    </Image>
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Travel Mode</Text>
                <Image
                    source={require('../../assets/images/fi_headPhone.png')} />
            </View>
            <View style={styles.wrapLocation}>
                <Text style={styles.currentLocationTxt}>Current Location</Text>
                <View style={styles.line}></View>
            </View>

            <View style={styles.wrapBasic}>
                <Image source={require('../../assets/images/fi_home.png')} />
                <View style={{ flex: 1, marginLeft: 25 }}>
                    <Text style={styles.txt2}>My Current Location</Text>
                    <Text style={styles.txt3}>Detroit, Michigan, US</Text>
                </View>
                <Image source={require('../../assets/images/fi_checked.png')} />
            </View>

            <View style={styles.wrapLocation}>
                <Text style={styles.currentLocationTxt}>Recent Travel Locations</Text>
                <View style={styles.line}></View>
            </View>

            <View style={[styles.wrapBasic, { borderColor: '#2c3843', backgroundColor: 'rgba(44, 56, 67, 0.2)' }]}>
                <Image source={require('../../assets/images/airplane.png')} />
                <View style={{ flex: 1, marginLeft: 25 }}>
                    <Text style={styles.txt2}>Honolulu, Hawaii</Text>
                    <Text style={styles.txt3}>364 S King St, Honolulu, HI...</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('AddTravelLocation');
            }} style={styles.next}>
                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.lineGra}>
                    <Text style={styles.nextTxt}>Add New Travel Location</Text>
                </LinearGradient>
            </TouchableOpacity>
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
    currentLocationTxt: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
    },
    wrapLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 26
    },
    line: {
        height: 2,
        flex: 1,
        backgroundColor: 'rgba(107, 113, 118, 1)',
        width: '100%',
        marginLeft: 16,
        opacity: 0.5
    },
    wrapBasic: {
        borderRadius: 16,
        backgroundColor: 'rgba(187, 154, 101, 0.1)',
        borderStyle: "solid",
        borderColor: '#bb9a65',
        borderWidth: 1.5,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 18,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt2: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
    },
    txt3: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        opacity: 0.5,
        marginTop: 10
    },
    next: {
        position: 'absolute',
        bottom: 34,
        height: 56,
        borderRadius: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextTxt: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: "center",
    },
    lineGra: {
        marginHorizontal: 20,
        borderRadius: 30,
        width: '100%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
})