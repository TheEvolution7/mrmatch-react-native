import * as React from 'react';
import Container from '../../components/Container';
import { Dimensions, FlatList, Image, ImageBackground, PanResponder, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const heightScreen = Dimensions.get('window').height;

export default function FindFriends() {
    const navigation = useNavigation();
    const dataAvatar = [1, 2, 3, 4, 5, 6];
    return (
        <Container style={{ backgroundColor: '#131B22', flex: 1 }}>
            <ImageBackground source={require('../../assets/images/findFriendBg.jpg')} resizeMode="cover" style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../assets/images/btnBack.png')}
                            style={styles.btnBack}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.skip} hitSlop={20} onPress={() => navigation.navigate('PickFriend')}>
                        <Text style={styles.txtSkip}>Skip for now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapContent}>
                    <Image
                        source={require('../../assets/images/avatarFindFriend.png')} width={180} height={180} />
                    <Text style={styles.txt1}>Find Friends</Text>
                    <Text style={[styles.txt2, { marginTop: 10 }]}>Tell your friends about the app so that</Text>
                    <Text style={styles.txt2}>they'll see your messages faster</Text>
                    <View style={{ flexDirection: 'row', marginTop: 25 }}>
                        {dataAvatar.map((item, id) => {
                            return (
                                <Image
                                    source={require('../../assets/images/avatarFindFriend.png')}
                                    style={styles.avatar}>
                                </Image>
                            )
                        })}
                    </View>
                    <Text style={styles.txt3}>20 of your friends are already join us</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('PickFriend');
                }} style={styles.next}>
                    <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.lineGra}>
                        <Text style={styles.nextTxt}>Add from Contacts</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={{ paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('PickFriend');
                    }} style={styles.skipBtn}>
                        <Image
                            source={require('../../assets/images/facebook.png')}
                            style={styles.fbAvatar}>
                        </Image>
                        <Text style={styles.skipBtnTxt}>Add from Facebook</Text>
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
    skip: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 20
    },
    txtSkip: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
    },
    wrapContent: {
        flex: 1,
        // justifyContent:'center',
        alignItems: 'center',
        marginTop: heightScreen / 8.6
    },
    txt1: {
        fontSize: 32,
        letterSpacing: -0.3,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        marginTop: 30
    },
    txt2: {
        fontSize: 16,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
        textAlign: "center",
    },
    txt3: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        marginTop: 15
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 32,
        marginRight: 5,
        marginLeft: 5
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
    },
    lineGra: {
        marginHorizontal: 20,
        borderRadius: 30,
        width: '100%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
    skipBtn: {
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
        flexDirection: 'row'
    },
    skipBtnTxt: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#bb9a65',
        textAlign: "center",
        marginLeft: 16
    },
    fbAvatar: {
        width: 11,
        height: 20
    }
})