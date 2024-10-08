import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from '../../components/Container';
import LinearGradient from "react-native-linear-gradient";
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <Container style={styles.container}>
            <ImageBackground source={require('../../assets/images/Welcome.jpg')} resizeMode="cover" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.welcomeText}>Welcome to</Text>
                    <Image
                        source={require('../../assets/images/heart.png')}
                        style={styles.image}
                        resizeMode='contain'
                    />
                    <Image
                        source={require('../../assets/images/mrMatch.png')}
                        style={styles.imageMrMatch}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.subtitle}>Sign up and get started</Text>

                    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginScreen')}>
                        <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.loginButton}>
                            <Text style={styles.loginButtonText}>Log In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Onboarding' }] })} style={styles.getStartedButton}>
                        <Text style={styles.getStartedButtonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#131B22'
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: widthScreen * 0.207,
        height: widthScreen * 0.207 / 1.136,
        marginTop: heightScreen * 0.0287
    },
    imageMrMatch: {
        width: widthScreen / 2.504,
        height: widthScreen / 2.504 / 7.533,
        marginTop: heightScreen * 0.0263
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: heightScreen * 0.12
    },
    logo: {
    },
    logoImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',

    },
    welcomeText: {
        fontSize: 24,
        lineHeight: 52,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
    appName: {

    },
    subtitle: {
        fontSize: 16,
        letterSpacing: -0.2,
        lineHeight: 27,
        fontFamily: "Inter-Regular",
        color: '#D7C09C',
        marginBottom: 42
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        bottom: 34,
        flex: 1,
        width: '100%',
        paddingHorizontal: 24
    },
    loginButton: {
        borderRadius: 30,
        marginBottom: 20,
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButtonText: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
    },
    getStartedButton: {
        borderColor: '#bb9a65',
        borderWidth: 1,
        borderRadius: 30,
        width: '100%',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1c252d'
    },
    getStartedButtonText: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#bb9a65',
    },
});
