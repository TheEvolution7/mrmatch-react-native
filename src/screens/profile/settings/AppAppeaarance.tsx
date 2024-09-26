import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';

const AppAppearance: React.FC = () => {
    const navigation = useNavigation();
    const [isShowModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState(1);
    return (
        <Container style={{ paddingHorizontal: 20 }}>
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
                    <View style={styles.modalView}>
                        <View style={[styles.wrapHeader,{paddingHorizontal: 20}]}>
                            <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => setShowModal(false)}>
                                <Image
                                    source={require('../../../assets/images/closeIc.png')}
                                    style={{ width: 24, height: 24 }}
                                />
                            </TouchableOpacity>
                            <Text style={styles.txtHeader}>Choose Theme</Text>
                        </View>
                        <View style={styles.device} />
                        <TouchableOpacity onPress={() => setSelected(1)} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 29 }}>
                            {selected == 1 ?
                                <Image source={require('../../../assets/images/radioBtnAct.png')} />
                                :
                                <Image source={require('../../../assets/images/radioBtn.png')} />
                            }
                            <Text style={styles.txtRad}>System Default</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelected(2)} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 16 }}>
                            {selected == 2 ?
                                <Image source={require('../../../assets/images/radioBtnAct.png')} />
                                :
                                <Image source={require('../../../assets/images/radioBtn.png')} />
                            }
                            <Text style={styles.txtRad}>Light</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelected(3)} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 16 }}>
                            {selected == 3 ?
                                <Image source={require('../../../assets/images/radioBtnAct.png')} />
                                :
                                <Image source={require('../../../assets/images/radioBtn.png')} />
                            }
                            <Text style={styles.txtRad}>Dark</Text>
                        </TouchableOpacity>
                        <View style={[styles.wrapGender, { paddingHorizontal: 20 }]}>
                            <TouchableOpacity onPress={()=>setShowModal(false)} style={{ flex: 1, borderRadius: 30, borderWidth: 1, borderColor: '#d7c09c', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.number, { color: '#d7c09c' }]}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>setShowModal(false)} style={{ flex: 1, marginLeft: 8 }}>
                                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', height: 56 }}>
                                    <Text style={styles.number}>OK</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.wrapHeader}>
                <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../../assets/images/btnBack.png')}
                        style={styles.btnBack}
                    />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>App Appearance</Text>
            </View>
            <TouchableOpacity onPress={()=>setShowModal(true)} style={styles.wrapSelect}>
                <Text style={styles.txt1}>Theme</Text>
                <Text style={styles.txt2}>Light</Text>
                <Image source={require('../../../assets/images/ArrowRight.png')} style={styles.arrowIcon} />
            </TouchableOpacity>
            <View style={styles.device} />
            <TouchableOpacity onPress={() => navigation.navigate('AppLanguage')} style={styles.wrapSelect}>
                <Text style={styles.txt1}>App Language</Text>
                <Text style={styles.txt2}>English (US)</Text>
                <Image source={require('../../../assets/images/ArrowRight.png')} style={styles.arrowIcon} />
            </TouchableOpacity>
        </Container>
    );
};
const styles = StyleSheet.create({
    wrapHeader: {
        flexDirection: 'row',
        width: '100%',
        height: 32,
        alignItems: 'center',
        marginTop: 26,
        // paddingHorizontal: 20
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
    arrowIcon: {
        width: 7,
        height: 14, // Adjust this size to fit the arrow icon in the design
        marginLeft: 18
    },
    txt1: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
        flex: 1
    },
    txt2: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
    },
    wrapSelect: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    device: {
        height: 1,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 24,
        marginLeft: -20
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 22,
        // paddingHorizontal: 20,
    },
    modalView: {
        margin: 20,
        // paddingHorizontal: 20,
        // alignItems: 'center',
        justifyContent: 'center',
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
        // borderColor: '#bb9a65',
        // borderWidth: 1,
        width: '100%',
        // height: '100%',
        paddingBottom: 32
    },
    device2: {
        width: '100%',
        height: 2,
        backgroundColor: 'red'
    },
    txtRad: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        marginLeft: 16
    },
    wrapGender: {
        flexDirection: 'row',
        marginTop: 40
    },
    number: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
})

export default AppAppearance;