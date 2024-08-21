import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, ImageBackground, PanResponder, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function Notification() {
    const navigation = useNavigation();
    return (
        <Container style={{ backgroundColor: '#131B22', flex: 1}}>
            <ImageBackground source={require('../../assets/images/Notifications.jpg')} resizeMode="cover" style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../assets/images/btnBack.png')}
                            style={styles.btnBack}>
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapContent}>
                    <Text style={styles.titleCode}>Notifications</Text>
                    <Text style={styles.description}>Never miss a message from a close friend.</Text>

                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('AllSet');
                }} style={styles.next}>
                    <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.lineGra}>
                        <Text style={styles.nextTxt}>Turn On</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={{ paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('AllSet');
                    }} style={styles.skip}>
                        <Text style={styles.nextTxt}>Skip Now</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
    wrapContent: {
        paddingHorizontal: 18,
        flex: 1
    },
    next: {
        position: 'absolute',
        bottom: 100,
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
    titleCode: {
        fontSize: 24,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        textAlign: "left",
        color: '#f8f1e6',
        marginTop: 28
    },
    description: {
        fontSize: 16,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
        marginTop: 10
    },
    skip: {
        position: 'absolute',
        bottom: 34,
        height: 56,
        borderRadius: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        backgroundColor: '#1c252d',
        borderStyle: "solid",
        borderColor: '#bb9a65',
        borderWidth: 1,
    }
})