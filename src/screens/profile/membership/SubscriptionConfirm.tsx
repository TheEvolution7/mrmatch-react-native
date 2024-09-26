import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import userStore from '../../../storage/UserStore';
import { TYPESUBS } from '../../../constant/typeModal';
import UpgradeRiver from './UpgradeRiver';
import UpgradeSea from './UpgradeSea';
import UpgradeOcean from './UpgradeOcean';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import ModalProcess from './ModalProcess';

const SubscriptionConfirm: React.FC = () => {
    const navigation = useNavigation();
    const [isShowModal, setShowModal] = useState(false);

    useEffect(() => {
        if (isShowModal) {
            setTimeout(() => {
                setShowModal(false);
                navigation.navigate('Congratulation');
            }, 2000);
        }
    }, [isShowModal])
    return (
        <Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isShowModal}
                onRequestClose={() => {
                }}>
                <BlurView
                    style={styles.absolute}
                    // blurType="light"
                    blurAmount={0.1}
                // reducedTransparencyFallbackColor="white"
                />
                <View style={styles.centeredView}>
                    <ModalProcess />
                </View>
            </Modal>
            <View style={styles.wrapHeader}>
                <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../../assets/images/btnBack.png')}
                        style={styles.btnBack}
                    />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Subscription Confirmation</Text>
            </View>
            <ScrollView style={{ paddingHorizontal: 20 }}>
                {userStore.typeSub === TYPESUBS.RIVER && <UpgradeRiver />}
                {userStore.typeSub === TYPESUBS.SEA && <UpgradeSea />}
                {userStore.typeSub === TYPESUBS.OCEAN && <UpgradeOcean />}
                <Text style={styles.titlePayment}>Selected Payment Method</Text>
                <View style={[styles.selectedContainer, { marginTop: 10 }]}>
                    <LinearGradient locations={[0, 0.3, 1]} colors={['rgba(187, 154, 101, 0)', 'rgba(187, 154, 101, 0)', 'rgba(187, 154, 101, 0.3)']} useAngle={true} angle={101.24} style={styles.wrapModule}>
                        <Image source={require('../../../assets/images/master.png')} style={styles.icon} />
                        <Text style={styles.title}>•••• •••• •••• •••• 4679</Text>
                        <Image source={require('../../../assets/images/checkGuide.png')} style={{ marginRight: 18 }} />
                    </LinearGradient>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => setShowModal(true)} style={{}}>
                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.btnCont}>
                    <Text style={styles.txtCon}>Continue</Text>
                </LinearGradient>
            </TouchableOpacity>
        </Container >
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
    selectedContainer: {
        borderRadius: 10,
        backgroundColor: "#1c252d",
        borderStyle: "solid",
        borderColor: "#bb9a65",
        borderWidth: 1,
        marginBottom: 35
    },
    icon: {
        marginLeft: 20
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
    titlePayment: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "#bb9a65",
        marginTop: 50
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
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(19, 27, 34, 0.4)'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        paddingHorizontal: 20,
    },
    modalView: {
        margin: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 21,
        backgroundColor: '#1c252d',
        borderStyle: "solid",
        borderColor: '#bb9a65',
        borderWidth: 1,
        width: '100%',
        // height: '100%',
        paddingBottom: 32
    },

})

export default SubscriptionConfirm;
