import React, { useCallback, useRef, useState } from 'react';
import {
    Image,
    StyleSheet,
    View,
    type ImageSourcePropType,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Dimensions,
    TextInput,
    Modal
} from 'react-native';
import Container from '../../components/Container';
import { useNavigation } from '@react-navigation/native';
import HeaderScreen from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
const screenWidth = Dimensions.get('window').width;

export default function AddDate({ }) {
    const navigation = useNavigation();
    return (
        <Container style={{ paddingHorizontal: 20 }}>
            <HeaderScreen title='Add Date' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.separator} />
                <View style={styles.wrapTips}>
                    <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.wrapTips, { padding: 20 }]}>
                        <View style={styles.wrapHeader}>
                            <Text style={styles.txt1}>Safety Tips</Text>
                            <Image source={require('../../assets/images/closeIc.png')} />
                        </View>
                        <Text style={styles.txt3}>Meet in public places, especially first dates</Text>
                        <View style={styles.wrapTxt}>
                            <Text style={styles.txt2}>Learn More in our Safety Guide</Text>
                        </View>
                    </LinearGradient>
                </View>
                <Text style={[styles.txt3, { marginTop: 28 }]}>Your Match</Text>
                <View style={styles.wrapSelect}>
                    <Image source={require('../../assets/images/fi_user.png')} />
                    <Text style={styles.txt4}>Select from your match list</Text>
                    <Image source={require('../../assets/images/ar-down.png')} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.txtChange}>Date</Text>
                        <TextInput
                            style={[styles.input, { paddingLeft: 30 }]}
                        // value={}
                        // onChangeText={}
                        />
                        <Image source={require('../../assets/images/fi_calendar_2.png')} style={styles.calendar} />
                    </View>

                    <View style={{ flex: 1, marginLeft: 16 }}>
                        <Text style={[styles.txtChange]}>Time</Text>
                        <TextInput
                            style={styles.input}
                        // value={holderName}
                        // onChangeText={setHolderName} 
                        />
                        <Image source={require('../../assets/images/fi_clock.png')} style={styles.calendar} />
                    </View>
                </View>
                <Text style={styles.txt5}>Destination</Text>
                <TextInput
                    style={styles.inputTxt}
                    placeholder="Please tell us more on how we can improve your experience"
                    placeholderTextColor="rgba(248, 241, 230, 0.2)"
                    multiline />
                <Text style={styles.txt5}>Date Notes</Text>
                <TextInput
                    style={styles.inputTxt}
                    placeholder="Please tell us more on how we can improve your experience"
                    placeholderTextColor="rgba(248, 241, 230, 0.2)"
                    multiline />
            </ScrollView>
            <View style={styles.separator} />
            <View style={[styles.wrapGender, { paddingHorizontal: 20 }]}>
                <TouchableOpacity onPress={() => {}} style={{ flex: 1, borderRadius: 30, justifyContent: 'center', alignItems: 'center', backgroundColor:'#1c252d' }}>
                    <Text style={[styles.number, { color: '#d7c09c' }]}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('PreviewDate')}} style={{ flex: 1, marginLeft: 8 }}>
                    <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', height: 56 }}>
                        <Text style={styles.number}>Done</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    separator: {
        marginTop: 28,
        marginBottom: 28,
        height: 1,
        backgroundColor: '#6B7176',
        marginLeft: -20,
        marginRight: -20,
    },
    wrapTips: {
        borderRadius: 10,

    },
    wrapHeader: {
        flexDirection: 'row'
    },
    txt1: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "#f8f1e6",
        flex: 1
    },
    txt2: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "rgba(119, 93, 52, 1)"
    },
    txt3: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        marginTop: 3
    },
    wrapTxt: {
        marginTop: 22,
        borderRadius: 40,
        height: 56,
        backgroundColor: '#f8f1e6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapSelect: {
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: "#1c252d",
        borderStyle: "solid",
        borderColor: "#40505f",
        borderWidth: 1.7,
        marginTop: 16,
        height: 56
    },
    txt4: {
        fontSize: 14,
        letterSpacing: 0,
        fontFamily: "Inter-Regular",
        color: "#999",
        flex: 1,
        marginLeft: 14
    },
    txtChange: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: "#d7c09c",
        marginTop: 22
    },
    input: {
        marginTop: 12,
        borderBottomColor: '#f8f1e6',
        borderBottomWidth: 1,
        color: '#f8f1e6',
        paddingBottom: 8,
        fontSize: 16,
        fontFamily: "Inter-Regular",
        textAlign: "left",

    },
    calendar: {
        position: 'absolute',
        left: 0,
        top: 50
    },
    inputTxt: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        borderRadius: 6,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 1,
        height: 142,
        padding: 15,
        marginTop: 17
    },
    txt5: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: "#d7c09c",
        marginTop: 32
    },
    wrapGender: {
        flexDirection: 'row',
    },
    number: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
})
