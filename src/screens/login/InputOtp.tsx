import * as React from 'react';
import Container from '../../components/Container';
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function InputOtp() {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [isShowClear, setShowClear] = React.useState(false);
    const [seconds, setSeconds] = React.useState(60);
    const [code1, setCode1] = React.useState('●');
    const [code2, setCode2] = React.useState('●');
    const [code3, setCode3] = React.useState('●');
    const [code4, setCode4] = React.useState('●');
    const input1Ref = React.useRef(null);
    const input2Ref = React.useRef(null);
    const input3Ref = React.useRef(null);
    const input4Ref = React.useRef(null);

    React.useEffect(() => {
        if (email.length > 0) {
            setShowClear(true);
        } else {
            setShowClear(false);
        }
    }, [email])
    React.useEffect(() => {
        if (seconds > 0) {
            const interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
                if (seconds <= 1) {
                    clearInterval(interval);
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [seconds])
    return (
        <Container style={{ backgroundColor: '#131B22', flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/btnBack.png')}
                        style={styles.btnBack}>
                    </Image>
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.txtEmail}>OTP code verification</Text>
                <Text style={styles.txtDesc}>We have sent an OTP code to your email in******@mrmatch.com. Enter the OTP code below to verify.</Text>
                <View style={styles.wrapCode}>
                    <View style={styles.inputCode}>
                        <TextInput
                            ref={input1Ref}
                            style={[styles.inputCodeNumber, { color: code1.length <= 0 ? '#d7c09c' : '#f8f1e6', borderColor: isNaN(code1) ? '#f8f1e6' : '#bb9a65' }]}
                            value={code1}
                            onFocus={() => setCode1('')}
                            onBlur={() => {
                                if (code1.length == 0) {
                                    setCode1('●')
                                }
                            }}
                            onChangeText={(value) => {
                                setCode1(value);
                                if (value.length === 1) {
                                    input2Ref.current.focus();
                                }
                            }}
                            keyboardType='phone-pad'
                            maxLength={1} />

                        <TextInput
                            ref={input2Ref}
                            style={[styles.inputCodeNumber, { color: code2.length <= 0 ? '#d7c09c' : '#f8f1e6', borderColor: isNaN(code2) ? '#f8f1e6' : '#bb9a65' }]}
                            value={code2}
                            onFocus={() => setCode2('')}
                            onBlur={() => {
                                if (code2.length == 0) {
                                    setCode2('●')
                                }
                            }}
                            onChangeText={(value) => {
                                setCode2(value);
                                if (value.length === 1) {
                                    input3Ref.current.focus();
                                }
                            }}
                            keyboardType='phone-pad'
                            maxLength={1} />

                        <TextInput
                            ref={input3Ref}
                            style={[styles.inputCodeNumber, { color: code3.length <= 0 ? '#d7c09c' : '#f8f1e6', borderColor: isNaN(code3) ? '#f8f1e6' : '#bb9a65' }]}
                            value={code3}
                            onFocus={() => setCode3('')}
                            onBlur={() => {
                                if (code3.length == 0) {
                                    setCode3('●')
                                }
                            }}
                            onChangeText={(value) => {
                                setCode3(value);
                                if (value.length === 1) {
                                    input4Ref.current.focus()
                                }
                            }}
                            keyboardType='phone-pad'
                            maxLength={1} />

                        <TextInput
                            ref={input4Ref}
                            style={[styles.inputCodeNumber, { color: code4.length <= 0 ? '#d7c09c' : '#f8f1e6', borderColor: isNaN(code4) ? '#f8f1e6' : '#bb9a65' }]}
                            value={code4}
                            onFocus={() => setCode4('')}
                            onBlur={() => {
                                if (code4.length == 0) {
                                    setCode4('●')
                                }
                            }}
                            onChangeText={(value) => {
                                setCode4(value);
                                if (value.length === 1) {
                                    // input2Ref.current.focus();
                                    navigation.navigate('CreatePassword');
                                }
                            }}
                            keyboardType='phone-pad'
                            maxLength={1} />

                    </View>
                </View>
            </View>
            <View style={styles.wrapBtn}>
                <TouchableOpacity onPress={() => {
                    setSeconds(60);
                }} style={{}}>
                    <View style={styles.Receicode}>
                        <Text style={styles.nextTxt}>I haven't received a code</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.txtCountDown}>You can resend code in <Text style={{ color: '#bb9a65' }}>{seconds}s</Text></Text>
            </View>
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
    input: {
        marginTop: 0,
        borderBottomColor: 'rgba(255, 255, 255, 0.35)',
        borderBottomWidth: 1,
        color: '#f8f1e6',
        paddingBottom: 8,
        fontSize: 16,
        fontFamily: "Inter-Regular",
        textAlign: "left",
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
    wrapBtn: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        paddingHorizontal: 20
    },
    txtCountDown: {
        textAlign: 'center',
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        color: '#f8f1e6',
        fontWeight: "600",
        marginBottom: 28,
        marginTop: 15,
    },
    Receicode: {
        // marginHorizontal: 20,
        borderRadius: 30,
        width: '100%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3843',
    },
    wrapCode: {
        marginTop: 0,
        paddingHorizontal: 18
    },
    titleCode: {
        fontSize: 24,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        textAlign: "left",
        color: '#f8f1e6'
    },
    inputCode: {
        flexDirection: 'row',
        marginTop: 45
    },
    inputCodeNumber: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#f8f1e6',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        // letterSpacing: -0.2,
        // lineHeight: 35,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        textAlign: 'center'
    },
})