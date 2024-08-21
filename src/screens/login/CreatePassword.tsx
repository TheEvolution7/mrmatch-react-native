import * as React from 'react';
import Container from '../../components/Container';
import { Image, Keyboard, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withRepeat } from 'react-native-reanimated';
import Svg, { G, Path, Defs, Stop, LinearGradient, Rect } from 'react-native-svg';

export default function CreatePassword() {
    const [pass1, setPass1] = React.useState('');
    const [pass2, setPass2] = React.useState('');
    const [isShowPass1, setShowPass1] = React.useState(true);
    const [isShowPass2, setShowPass2] = React.useState(true);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = React.useState(false);

    const rotateValue = useSharedValue(0);

    React.useEffect(() => {
        rotateValue.value = withRepeat(
            withTiming(360, {
                duration: 2000,
                easing: Easing.linear,
            }),
            -1
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotateValue.value}deg` }],
        };
    });

    return (
        <Container style={{ backgroundColor: '#131B22', flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // setModalVisible(!modalVisible);
                }}>
                <BlurView
                    style={styles.absolute}
                    // blurType="light"
                    blurAmount={1}
                    reducedTransparencyFallbackColor="white"
                />
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.txtSuccess}>Reset Password Successful!</Text>
                        <View style={[styles.device, { marginTop: 16 }]}></View>
                        <Image
                            source={require('../../assets/images/loginSucc.png')}
                            style={styles.imageSucc}>
                        </Image>
                        <Text style={[styles.txtWait, { marginTop: 24 }]}>Please wait... You will be</Text>
                        <Text style={styles.txtWait}>directed to the homepage.</Text>
                        <Animated.View style={[animatedStyle, { marginTop: 36, marginBottom: 36 }]}>
                            <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <G id="Group">
                                    <Path
                                        id="Vector"
                                        d="M36.6476 6.35265C36.9608 6.00324 37.3398 5.71898 37.7629 5.5161C38.186 5.31323 38.645 5.19572 39.1135 5.17029C39.582 5.14486 40.051 5.21201 40.4936 5.36791C40.9362 5.5238 41.3437 5.76538 41.6929 6.07884C44.31 8.42129 46.4029 11.2901 47.8344 14.4975C49.266 17.7048 50.0039 21.1784 50 24.6907C50 38.5003 38.8071 49.6907 25 49.6907V42.5479C28.6147 42.5479 32.1442 41.451 35.1221 39.4021C38.1 37.3532 40.386 34.4489 41.6779 31.073C42.9698 27.6971 43.2068 24.0086 42.3575 20.4951C41.5082 16.9816 39.6127 13.8086 36.9214 11.3955C36.2165 10.763 35.7916 9.87647 35.7402 8.93078C35.6889 7.98509 36.0153 7.05772 36.6476 6.35265Z"
                                        fill="url(#paint0_linear_2051_2186)"
                                    />
                                    <Path
                                        id="Vector_2"
                                        d="M20.8309 0.0388083C21.7563 -0.0987019 22.6986 0.132342 23.4554 0.682272C24.2122 1.2322 24.723 2.05711 24.878 2.97967C25.033 3.90223 24.8198 4.84877 24.2843 5.61583C23.7488 6.38289 22.9337 6.90921 22.0143 7.08166C17.8551 7.78797 14.0801 9.94363 11.3582 13.1668C8.6362 16.3899 7.14292 20.4724 7.14285 24.6912C7.14285 29.4272 9.02423 33.9692 12.3731 37.3181C15.722 40.6669 20.264 42.5483 25 42.5483V49.6912C11.1929 49.6912 0 38.5007 0 24.6912C0 12.4412 8.87142 2.04833 20.8309 0.0388083Z"
                                        fill="#BB9A65"
                                    />
                                </G>
                                <Defs>
                                    <LinearGradient id="paint0_linear_2051_2186" x1="37.5" y1="5.16504" x2="25" y2="42.5464" gradientUnits="userSpaceOnUse">
                                        <Stop stopColor="#BB9A66" stopOpacity="0" />
                                        <Stop offset="1" stopColor="#BB9A66" />
                                    </LinearGradient>
                                </Defs>
                            </Svg>
                        </Animated.View>
                    </View>
                </View>
            </Modal>
            <View style={styles.header}>
                <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/btnBack.png')}
                        style={styles.btnBack}>
                    </Image>
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.txtEmail}>Create new password</Text>
                <Text style={styles.txtDesc}>Create your new password. If you forget it, then you have to do forgot password.</Text>
                <Text style={styles.yourEmail}>New Password</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        value={pass1}
                        onChangeText={setPass1}
                        secureTextEntry={isShowPass1} />
                    <TouchableOpacity onPress={() => setShowPass1(!isShowPass1)}>
                        <Image
                            source={require('../../assets/images/showPass.png')}
                            style={styles.btnClear}>
                        </Image>
                    </TouchableOpacity>
                    {/* <Text style={styles.errorMess}>Password must be at least 8 chracters</Text> */}
                </View>

                <Text style={styles.confirmPass}>Confirm New Password</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        value={pass2}
                        onChangeText={setPass2}
                        secureTextEntry={isShowPass2} />
                    <TouchableOpacity onPress={() => setShowPass2(!isShowPass2)}>
                        <Image
                            source={require('../../assets/images/showPass.png')}
                            style={styles.btnClear}>
                        </Image>
                    </TouchableOpacity>
                    {/* <Text style={styles.errorMess}>Password must be at least 8 chracters</Text> */}
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                // navigation.navigate('CollectionImage');
                setModalVisible(true);
            }} style={styles.next}>
                <Svg height="50" width="100%">
                    <Defs>
                        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <Stop offset="0%" stopColor="#AD8E57" />
                            <Stop offset="100%" stopColor="#826F45" />
                        </LinearGradient>
                    </Defs>
                    <Rect
                        x="0"
                        y="0"
                        width="100%"
                        height="50"
                        rx="25" // Rounded corners (half of the height to make it fully rounded)
                        fill="url(#grad)"
                    />
                </Svg>
                <View style={styles.textContainer}>
                    <Text style={styles.nextTxt}>Next</Text>
                </View>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        height: 20,
        marginTop: 20
    },
    btnBack: {
        height: 14,
        width: 7,
        marginLeft: 20
    },
    grSlide: {
        width: 167,
        height: 20,
        marginLeft: -27
    },
    wrapSl: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
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
    txtEmail: {
        fontSize: 24,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: "left",
        marginTop: 30
    },
    yourEmail: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
        textAlign: "left",
        marginTop: 28
    },
    btnClear: {
        height: 24,
        width: 24,
        position: 'absolute',
        right: 0,
        top: -26
    },
    nextBtn: {
        width: 56,
        height: 56,
    },
    createAcc: {
        position: 'absolute',
        bottom: 15,
        right: 10,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 30,
        flexDirection: 'row'
    },
    createAccTxt: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: "center"
    },
    errorMess: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        textAlign: "left",
        opacity: 0.5,
        marginTop: 16
    },
    createTxt: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: "center"
    },
    bySigningUp: {
        color: '#f8f1e6'
    },
    termsOfUse1: {
        textDecoration: "underline"
    },
    termsOfUse: {
        color: '#d7c09c'
    },
    bySigningUpContainer: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        textAlign: "left",
        width: 250,
        height: 49,
        marginTop: 30,
    },
    txtDesc: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        opacity: 0.5,
        marginTop: 10
    },
    confirmPass: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
        opacity: 0.5,
        marginTop: 32
    },
    next: {
        position: 'absolute',
        bottom: 34,
        height: 56,
        borderRadius: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
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
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(19, 27, 34, 0.1)'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        paddingHorizontal: 20
    },
    modalView: {
        margin: 20,
        // padding: 22,
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
    },
    txtSuccess: {
        fontSize: 21,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        marginTop: 23
    },
    imageSucc: {
        width: 180,
        height: 180,
        marginTop: 38
    },
    txtWait: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
        textAlign: "center",
    },
    textContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    device: {
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        width: "100%",
        height: 1,
        opacity: 0.2,
        marginTop: 16
    },
})