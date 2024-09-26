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

const Language: React.FC<PaymentMethodProps> = ({ title, icon, onPress, selected }) => {

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

const languages = [
    {
        id: 1,
        title: 'English (US)',
        icon: require('../../../assets/images/enFlag.png'),
        isSelected: false
    },
    {
        id: 2,
        title: 'English (UK)',
        icon: require('../../../assets/images/enFlag.png'),
        isSelected: true
    },
    {
        id: 3,
        title: 'Mandarin',
        icon: require('../../../assets/images/enFlag.png'),
        isSelected: false
    },
    {
        id: 4,
        title: 'Spanish',
        icon: require('../../../assets/images/enFlag.png'),
        isSelected: false
    },
    {
        id: 5,
        title: 'Hindi',
        icon: require('../../../assets/images/enFlag.png'),
        isSelected: false
    },
]


const PaymentMethod: React.FC = () => {
    const navigation = useNavigation();
    const [paymentMet, setPaymentMet] = useState('');
    const [selectedLanguage, setSelectedLanguage] = React.useState('');
    return (
        <Container>
            <View style={styles.wrapHeader}>
                <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../../assets/images/btnBack.png')}
                        style={styles.btnBack}
                    />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>App Language</Text>
            </View>
            <ScrollView style={styles.wrapPayments}>
                {languages.map((item) => {
                    return (
                        <Language title={item?.title} icon={item?.icon} onPress={() => setSelectedLanguage(item?.title)} selected={selectedLanguage === item?.title ? true : false} />
                    )
                })}
            </ScrollView>
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
        width: 7,
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