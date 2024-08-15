import * as React from 'react';
import Container from '../../components/Container';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Registration() {
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
                        source={require('../../assets/images/groupSlide_1.png')}
                        style={styles.grSlide}>
                    </Image>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.txtEmail}>What's your email?</Text>
                <Text style={styles.yourEmail}>Your Email</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail} />
                    {isShowClear && <TouchableOpacity onPress={() => setEmail('')}>
                        <Image
                            source={require('../../assets/images/clearTxt.png')}
                            style={styles.btnClear}>
                        </Image>
                    </TouchableOpacity>}
                </View>
            </View>
            {isShowError ?
                <TouchableOpacity style={styles.createAcc}>
                    <Text style={{}}>Create a new account</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => setShowError(true)} style={styles.next}>
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
        bottom: 30,
        right: 20
    },
    createAccTxt: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: "center"
    }
})