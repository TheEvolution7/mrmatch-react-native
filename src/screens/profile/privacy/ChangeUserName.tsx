import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const ChangeUserName: React.FC = () => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [isShowClear, setShowClear] = React.useState(false);

    React.useEffect(() => {
        if (email.length > 0) {
            setShowClear(true);
        } else {
            setShowClear(false);
        }
    }, [email])

    return (
        <Container style={{ paddingHorizontal: 20 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.wrapHeader}>
                    <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../../assets/images/btnBack.png')}
                            style={styles.btnBack}
                        />
                    </TouchableOpacity>
                    <Text style={styles.txtHeader}>Username</Text>
                </View>
                <Text style={styles.txtChange}>Change Username</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail} />
                    {isShowClear && <TouchableOpacity onPress={() => setEmail('')}>
                        <Image
                            source={require('../../../assets/images/clearTxt.png')}
                            style={styles.btnClear}>
                        </Image>
                    </TouchableOpacity>}
                </View>
                <Text style={styles.desc}>You can only change your username once every month.</Text>
            </View>
            <TouchableOpacity onPress={() => { navigation.goBack()}} style={{}}>
                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.btnCont}>
                    <Text style={styles.txtCon}>Save</Text>
                </LinearGradient>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 26,
        borderBottomColor: 'rgba(255, 255, 255, 0.35)',
        borderBottomWidth: 1,
        color: '#f8f1e6',
        paddingBottom: 8,
        fontSize: 16,
        fontFamily: "Inter-Regular",
        textAlign: "left",

    },
    btnClear: {
        height: 24,
        width: 24,
        position: 'absolute',
        right: 0,
        top: -26
    },
    wrapHeader: {
        flexDirection: 'row',
        width: '100%',
        height: 32,
        alignItems: 'center',
        marginTop: 0,
        // paddingHorizontal: 20,
        marginBottom: 30
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
    txtChange: {
        fontSize: 18,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
        marginTop: 22
    },
    desc: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        opacity: 0.5,
        marginTop: 16
    },
    btnCont: {
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        // marginHorizontal: 20
    },
    txtCon: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
    },
})

export default ChangeUserName;