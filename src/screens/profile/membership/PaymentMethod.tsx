import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { PAYMENTS } from '../../../constant/typeModal';

interface PaymentMethodProps {
    title: string;
    icon: ImageSourcePropType,
    onPress: () => void;
    selected: boolean;
}

const Payment: React.FC<PaymentMethodProps> = ({ title, icon, onPress, selected }) => {

    return (
        <>
            {selected ?
                <TouchableOpacity onPress={() => onPress()} style={[styles.selectedContainer, { marginTop: 10 }]}>
                    <LinearGradient locations={[0, 0.3, 1]} colors={['rgba(187, 154, 101, 0)', 'rgba(187, 154, 101, 0)', 'rgba(187, 154, 101, 0.3)']} useAngle={true} angle={101.24} style={styles.wrapModule}>
                        <Image source={icon} style={styles.icon} />
                        <Text style={styles.title}>{title}</Text>
                        <Image source={require('../../../assets/images/checkGuide.png')} style={{ marginRight: 18 }} />
                    </LinearGradient>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => onPress()} style={[styles.wrapModule, { marginTop: 10 }]}>
                    <Image source={icon} style={styles.icon} />
                    <Text style={styles.title}>{title}</Text>
                </TouchableOpacity>
            }
        </>
    );
};


const PaymentMethod: React.FC = () => {
    const navigation = useNavigation();
    const [paymentMet, setPaymentMet] = useState('');
    return (
        <Container>
            <View style={styles.wrapHeader}>
                <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../../assets/images/btnBack.png')}
                        style={styles.btnBack}
                    />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Select Payment Method</Text>
                <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../../assets/images/plus.png')}
                        style={styles.btnBack}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.wrapPayments}>
                <Payment title='PayPal' icon={require('../../../assets/images/paypal.png')} onPress={() => setPaymentMet(PAYMENTS.PAYPAL)} selected={paymentMet === PAYMENTS.PAYPAL ? true : false} />
                <Payment title='Google' icon={require('../../../assets/images/google.png')} onPress={() => setPaymentMet(PAYMENTS.GOOGLE)} selected={paymentMet === PAYMENTS.GOOGLE ? true : false} />
                <Payment title='Apple' icon={require('../../../assets/images/apple.png')} onPress={() => setPaymentMet(PAYMENTS.APPLE)} selected={paymentMet === PAYMENTS.APPLE ? true : false} />
                <Payment title='•••• •••• •••• •••• 4679' icon={require('../../../assets/images/master.png')} onPress={() => setPaymentMet(PAYMENTS.MASTERCARD)} selected={paymentMet === PAYMENTS.MASTERCARD ? true : false} />
                <Payment title='•••• •••• •••• •••• 5567' icon={require('../../../assets/images/visa.png')} onPress={() => setPaymentMet(PAYMENTS.VISA)} selected={paymentMet === PAYMENTS.VISA ? true : false} />
                <Payment title='•••• •••• •••• •••• 5567' icon={require('../../../assets/images/american.png')} onPress={() => setPaymentMet(PAYMENTS.AMERICAN)} selected={paymentMet === PAYMENTS.AMERICAN ? true : false} />
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('SubscriptionConfirm')} style={{}}>
                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.btnCont}>
                    <Text style={styles.txtCon}>Continue</Text>
                </LinearGradient>
            </TouchableOpacity>
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
        paddingHorizontal: 20,

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
        width: 14,
        height: 14
    },
    wrapPayments: {
        marginTop: 30,
        paddingHorizontal: 20
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
    btnCont: {
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: 20
    },
    txtCon: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
    },
    selectedContainer: {
        borderRadius: 10,
        backgroundColor: "#1c252d",
        borderStyle: "solid",
        borderColor: "#bb9a65",
        borderWidth: 1,
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
})

export default PaymentMethod;