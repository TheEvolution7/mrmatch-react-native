import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import HeaderScreen from '../../../components/Header';
import { FCardNumber } from '../../../components/FormatPhone';
import LinearGradient from 'react-native-linear-gradient';

const AddNewPayment: React.FC = () => {
    const navigation = useNavigation();
    const [cardNumber, setCardNumber] = useState('');
    const [holderName, setHolderName] = useState('');
    return (
        <Container style={{ paddingHorizontal: 20 }}>
            <HeaderScreen title='Add New Payment' />
            <View style={{ flex: 1 }}>
                <Text style={styles.txtChange}>Card Number</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        value={FCardNumber(cardNumber)}
                        onChangeText={setCardNumber} />
                </View>
                <Text style={[styles.txtChange, { marginTop: 32 }]}>Account Holder Name</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        value={holderName}
                        onChangeText={setHolderName} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.txtChange}>Expiry Date</Text>
                        <TextInput
                            style={[styles.input, { paddingLeft: 30 }]}
                            value={FCardNumber(cardNumber)}
                            onChangeText={setCardNumber} />
                        <Image source={require('../../../assets/images/fi_calendar.png')} style={styles.calendar} />
                    </View>

                    <View style={{ flex: 1, marginLeft: 16 }}>
                        <Text style={[styles.txtChange]}>CVV</Text>
                        <TextInput
                            style={styles.input}
                            value={holderName}
                            onChangeText={setHolderName} />
                    </View>
                </View>
                <View style={styles.separator} />
                <Text style={styles.support}>Supported Payments:</Text>
                <View style={{ flexDirection: 'row', columnGap: 20, justifyContent: 'center', marginTop: 20 }}>
                    <Image source={require('../../../assets/images/bank_master.png')} />
                    <Image source={require('../../../assets/images/bank_visa.png')} />
                    <Image source={require('../../../assets/images/bank_amazon.png')} />
                    <Image source={require('../../../assets/images/bank_america.png')} />
                    <Image source={require('../../../assets/images/bank_jcb.png')} />
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{marginBottom:30}}>
                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.btnCont}>
                    <Text style={styles.txtCon}>Save</Text>
                </LinearGradient>
            </TouchableOpacity>
        </Container>
    )
}
const styles = StyleSheet.create({
    txtChange: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: "#d7c09c",
        marginTop: 22
    },
    input: {
        marginTop: 12,
        borderBottomColor: 'rgba(255, 255, 255, 0.35)',
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
    separator: {
        height: 2,
        opacity: 0.5,
        backgroundColor: 'rgba(107, 113, 118, 1)',
        // width: '100%',
        marginTop: 54,
        marginHorizontal: -20
    },
    support: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
        marginTop: 36
    },
    txtCon: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
    },
    btnCont: {
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
})
export default AddNewPayment;