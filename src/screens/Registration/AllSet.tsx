import * as React from 'react';
import Container from '../../components/Container';
import { Dimensions, FlatList, Image, ImageBackground, PanResponder, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const widthScreen = Dimensions.get('window').width;

export default function AllSet() {
    const navigation = useNavigation();
    const [isShowFind, setShowFind] = React.useState(false);
    const [numberFind, setNumberFind] = React.useState(0);

    React.useEffect(() => {
        setTimeout(() => {
            setShowFind(true);
        }, 2000);

        setTimeout(() => {
            navigation.navigate('FindFriends');
        }, 5000);
    }, [])

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (numberFind > 3) {
                setNumberFind(0);
            } else {
                setNumberFind(numberFind => numberFind + 1);
            }
        }, 400);
        return () => clearInterval(interval);
    }, [isShowFind, numberFind])
    // const countTime = () => {

    // }

    return (
        <Container style={{ backgroundColor: '#131B22', flex: 1}}>
            {isShowFind ?
                <ImageBackground source={require('../../assets/images/finding.jpg')} resizeMode="cover" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.wrapFind}>
                        {numberFind >= 3 && <View style={styles.border1}>
                        </View>}
                        {numberFind >= 2 && <View style={styles.border2}>
                        </View>}
                        {numberFind >= 1 && <View style={styles.border3}>
                        </View>}
                        <Image
                            source={require('../../assets/images/avatarFind.png')}
                            style={styles.avatar}>
                        </Image>

                    </View>
                    <Text style={styles.txtFind}>Finding people near you ...</Text>
                </ImageBackground>
                :
                <ImageBackground source={require('../../assets/images/AllSet.jpg')} resizeMode="cover" style={{ flex: 1 }}>

                </ImageBackground>
            }

        </Container>
    )
}

const styles = StyleSheet.create({
    wrapFind: {
        width: widthScreen - 70,
        // backgroundColor: 'red',
        height: widthScreen - 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border1: {
        width: widthScreen - 70,
        backgroundColor: '#BB9A65',
        height: widthScreen - 70,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.1,
        borderRadius: 800,
        position: 'absolute',
        top: 0,
        left: 0
    },
    border2: {
        width: widthScreen - 160,
        backgroundColor: '#BB9A65',
        borderRadius: 800,
        opacity: 0.4,
        height: widthScreen - 160,
        position: 'absolute',
        top: 45,
        left: 45
    },
    border3: {
        width: widthScreen - 242,
        backgroundColor: '#BB9A65',
        borderRadius: 800,
        opacity: 0.6,
        height: widthScreen - 242,
        position: 'absolute',
        top: 86,
        left: 86
    },
    avatar: {
        width: 70,
        backgroundColor: '#BB9A65',
        borderRadius: 800,
        height: 70,
        // position: 'absolute',
        // top: 114,
        // left: 114
    },
    txtFind: {
        fontSize: 20,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
        marginTop: 20
    }
})