import * as React from 'react';
import Container from '../../components/Container';
import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function PasswordCreate() {
    const [email, setEmail] = React.useState('');
    const [isShowClear, setShowClear] = React.useState(false);
    const [isShowError, setShowError] = React.useState(false);
    const navigation = useNavigation();
    React.useEffect(() => {
        if (email.length > 0) {
            setShowClear(true);
        } else {
            setShowClear(false);
        }
    }, [email])
    return (
        <Container style={{ backgroundColor: '#131B22', flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/btnBack.png')}
                        style={styles.btnBack}>
                    </Image>
                </TouchableOpacity>
                <View style={styles.wrapSl}>
                    <Image
                        source={require('../../assets/images/groupSlide_2.png')}
                        style={styles.grSlide}>
                    </Image>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.txtEmail}>Choose your password</Text>
                <Text style={styles.yourEmail}>Your Password</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        secureTextEntry={true} />
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/showPass.png')}
                            style={styles.btnClear}>
                        </Image>
                    </TouchableOpacity>
                    <Text style={styles.errorMess}>Password must be at least 8 chracters</Text>
                </View>
                <Text style={styles.bySigningUpContainer}>
                    <Text style={styles.bySigningUp}>{`By signing up I accept the `}</Text>
                    <Text style={styles.termsOfUse}>
                        <Text style={styles.termsOfUse1}>Terms of Use</Text>{` `}
                    </Text>
                    <Text style={styles.bySigningUp}>and the</Text>
                    <Text style={styles.termsOfUse}>{` `}
                        <Text style={styles.termsOfUse1}>Data Privacy Policy</Text>.
                    </Text>
                </Text>
            </View>
            {isShowError ?
                <TouchableOpacity onPress={() => navigation.navigate('YearSelected')} style={styles.createAcc}>
                    <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.createAcc}>
                        <Text style={styles.createTxt}>Next step</Text>
                        <Image
                            source={require('../../assets/images/rightArrow.png')}
                            style={{ width: 7, height: 14, marginLeft: 8, alignSelf: 'center', marginTop: 2 }}>
                        </Image>
                    </LinearGradient>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => {
                    setShowError(true);
                    Keyboard.dismiss();
                }} style={styles.next}>
                    <Image
                        source={require('../../assets/images/nextBtn.png')}
                        style={styles.nextBtn}>
                    </Image>
                </TouchableOpacity>
            }

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
        marginTop: 0,
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
    next: {
        position: 'absolute',
        bottom: 30,
        right: 20
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
    }
})