import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from '../../components/Container';
import LinearGradient from "react-native-linear-gradient";
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

export default function Onboarding() {
    const navigation = useNavigation();
    const [id, setId] = React.useState(0);
    const data = [{
        id: 1,
        title: require('../../assets/images/3_Onboarding_1.png'),
        imgAvatar: require('../../assets/images/newfriends.png'),
        descTxt: 'Lorem ipsum dolor sit amet, piscing elit. Pellentesque id auctor elit.'
    },
    {
        id: 2,
        title: require('../../assets/images/3_Onboarding_2.png'),
        imgAvatar: require('../../assets/images/newfriends_2.png'),
        descTxt: 'Lorem ipsum dolor sit amet, piscing elit. Pellentesque id auctor elit.'
    },
    {
        id: 3,
        title: require('../../assets/images/3_Onboarding_3.png'),
        imgAvatar: require('../../assets/images/newfriends_3.png'),
        descTxt: 'Lorem ipsum dolor sit amet, piscing elit. Pellentesque id auctor elit.'
    },]

    const next = () => {
        if (id < 2) {
            let tmp = id + 1;
            setId(tmp);
        } else {
            navigation.navigate('Registration');
        }
    }
    return (
        <Container>
            <ImageBackground source={data[id]?.title} resizeMode="cover" style={{ flex: 1 }}>
                <View style={styles.wrapView}>
                    <Image
                        source={data[id]?.imgAvatar}
                        style={styles.imgTxt}
                        resizeMode='contain'>

                    </Image>
                    <Text style={styles.descTxt}>{data[id]?.descTxt}</Text>
                    <View style={styles.containerBtn}>
                        <TouchableOpacity style={styles.skip}>
                            <Text style={styles.skipTxt}>Skip</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => next()} style={styles.next}>
                            <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.nextLine}>
                                <Text style={styles.nextTxt}>Next</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </Container>
    )
}

const styles = StyleSheet.create({
    containerBtn: {
        flexDirection: 'row',
        flex: 1,
    },
    wrapView: {
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingBottom: 35,
        width: '100%'
    },
    skip: {
        flex: 1,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#222d36',
        width: '100%'
    },
    next: {
        flex: 2,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginLeft: 10
    },
    nextLine: {
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width: '100%'
    },
    skipTxt: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
    },
    nextTxt: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: 'center'
    },
    descTxt: {
        fontSize: 14,
        lineHeight: 18,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        textAlign: 'center',
        marginBottom: heightScreen / 24.4,
        marginTop: 20
    },
    titleTxt: {
        fontSize: 32,
        lineHeight: 38,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
    },
    imgTxt: {
        width: widthScreen / 1.56,
        height: heightScreen / 16.08,

    }
})