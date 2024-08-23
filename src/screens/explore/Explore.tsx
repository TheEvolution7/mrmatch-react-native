import React, { useCallback, useRef, useState } from 'react';
import {
    Image,
    StyleSheet,
    View,
    type ImageSourcePropType,
    Text,
    TouchableOpacity
} from 'react-native';
import { GestureHandlerRootView, Gesture } from 'react-native-gesture-handler';
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list';
import Container from '../../components/Container';
import LinearGradient from 'react-native-linear-gradient';

// import { ActionButton } from '../components';

// const IMAGES: ImageSourcePropType[] = [
//   require('../assets/images/1.jpg'),
//   require('../assets/images/2.jpg'),
//   require('../assets/images/3.jpg'),
//   require('../assets/images/4.jpg'),
//   require('../assets/images/5.jpg'),
//   require('../assets/images/6.jpg'),
// ];

const IMAGES = [
    'https://fastly.picsum.photos/id/192/536/354.jpg?hmac=a22QkdSZ7zXUHpV4-gnB48PPYaLlcvaTMeDXxcPRxs8',
    'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
    'https://fastly.picsum.photos/id/192/536/354.jpg?hmac=a22QkdSZ7zXUHpV4-gnB48PPYaLlcvaTMeDXxcPRxs8',
    'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
    'https://fastly.picsum.photos/id/192/536/354.jpg?hmac=a22QkdSZ7zXUHpV4-gnB48PPYaLlcvaTMeDXxcPRxs8',
    'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
    'https://fastly.picsum.photos/id/192/536/354.jpg?hmac=a22QkdSZ7zXUHpV4-gnB48PPYaLlcvaTMeDXxcPRxs8',
    'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
];

const ICON_SIZE = 24;

export default function Explore({ showModalGotMatch }) {
    const ref = useRef<SwiperCardRefType>();
    const [isShowLike, setShowLike] = useState(false);

    const renderCard = useCallback((image) => {
        return (
            <View style={styles.renderCardContainer}>
                <Image
                    source={{ uri: image }}
                    style={styles.renderCardImage}
                    resizeMode="cover"
                />
                <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', }}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.0 }} colors={['rgba(19, 27, 34, 0)', 'rgba(19, 27, 34, 1)']} style={{ width: '100%', paddingHorizontal: 20, paddingBottom: 164 }}>
                        <Text style={{
                            lineHeight: 51,
                            fontWeight: "500",
                            fontFamily: "Inter-Medium",
                            color: '#fff',
                            fontSize: 32
                        }}>Monica (22)</Text>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: "Inter-Regular",
                            color: '#fff',
                        }}>5 km away</Text>
                    </LinearGradient>
                </View>
            </View>
        );
    }, []);
    const OverlayLabelRight = useCallback(() => {
        return (
            <View
                style={[
                    styles.overlayLabelContainer,
                    {
                        // backgroundColor: 'green',
                    },
                ]}
            >

                <View style={styles.likeIc}>
                    <Text style={styles.txtLike}>LIKE!</Text>
                </View>
            </View>
        );
    }, []);
    const OverlayLabelLeft = useCallback(() => {
        return (
            <View
                style={[
                    styles.overlayLabelContainer,
                    {
                        // backgroundColor: 'red',
                    },
                ]}
            >
                <View style={styles.nopeIc}>
                    <Text style={styles.txtLike}>NOPE!</Text>
                </View>
            </View>
        );
    }, []);
    const OverlayLabelTop = useCallback(() => {
        return (
            <View
                style={[
                    styles.overlayLabelContainer,
                    {
                        // backgroundColor: 'blue',
                    },
                ]}
            >
                <View style={styles.superLike}>
                    <Image
                        source={require('../../assets/images/superLike.png')}
                        style={{ width: 272, height: 72 }}>
                    </Image>
                </View>
            </View>
        );
    }, []);
    const OverlayLabelBottom = useCallback(() => {
        return (
            <View
                style={[
                    styles.overlayLabelContainer,
                    {
                        // backgroundColor: 'orange',
                    },
                ]}
            />
        );
    }, []);

    return (
        <Container style={styles.container}>
            <View style={styles.wrapSetting}>
                <View>
                    <Image
                        source={require('../../assets/images/mrMatchIc.png')}
                        style={styles.mrMatch}>
                    </Image>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/fi_bell.png')} >
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 16 }}>
                        <Image
                            source={require('../../assets/images/fi_sliders.png')}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginLeft: 16 }}>
                        <Image
                            source={require('../../assets/images/fi_headPhone.png')}>
                        </Image>
                    </TouchableOpacity>

                </View>
            </View>
            <GestureHandlerRootView style={{ flex: 1 }}>

                <View style={styles.subContainer}>
                    <Swiper
                        ref={ref}
                        cardStyle={styles.cardStyle}
                        data={IMAGES}
                        renderCard={renderCard}
                        onSwipeRight={(cardIndex) => {
                            console.log('cardIndex', cardIndex);
                            // setShowLike(true);
                        }}
                        onSwipedAll={() => {
                            console.log('onSwipedAll');
                        }}
                        onSwipeLeft={(cardIndex) => {
                            console.log('onSwipeLeft', cardIndex);
                        }}
                        onSwipeTop={(cardIndex) => {
                            console.log('onSwipeTop', cardIndex);
                            showModalGotMatch();
                        }}
                        onSwipeBottom={(cardIndex) => {
                            console.log('onSwipeBottom', cardIndex);
                        }}
                        OverlayLabelRight={OverlayLabelRight}
                        OverlayLabelLeft={OverlayLabelLeft}
                        OverlayLabelTop={OverlayLabelTop}
                        OverlayLabelBottom={OverlayLabelBottom}
                        onSwipeActive={() => {
                            console.log('onSwipeActive');
                        }}
                        onSwipeStart={() => {
                            console.log('onSwipeStart');
                        }}
                        onSwipeEnd={() => {
                            console.log('onSwipeEnd');
                            setShowLike(false);
                        }}
                        swipeRight={() => {
                            console.log('swipeRight');
                        }}
                    />
                </View>
            </GestureHandlerRootView>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', position: 'absolute', bottom: 84, left: 0 }}>
                <TouchableOpacity style={{ margin: 'auto' }}>
                    <Image
                        source={require('../../assets/images/reload.png')}
                        style={{}}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 'auto' }}>
                    <Image
                        source={require('../../assets/images/clear.png')}
                        style={{}}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 'auto' }}>
                    <Image
                        source={require('../../assets/images/star.png')}
                        style={{}}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 'auto' }}>
                    <Image
                        source={require('../../assets/images/heartBtn.png')}
                        style={{}}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 'auto' }}>
                    <Image
                        source={require('../../assets/images/light.png')}
                        style={{}}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>
        </Container>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131B22',
        paddingHorizontal: 20
    },
    buttonsContainer: {
        flexDirection: 'row',
        bottom: 34,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
    },
    button: {
        height: 50,
        borderRadius: 40,
        aspectRatio: 1,
        backgroundColor: '#3A3D45',
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardStyle: {
        width: '95%',
        height: '100%',
        borderRadius: 15,
        // marginVertical: 20,
    },
    renderCardContainer: {
        flex: 1,
        borderRadius: 15,
        height: '75%',
        width: '100%',
    },
    renderCardImage: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
    },
    subContainer: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 26,
        marginRight: -20
    },
    overlayLabelContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    likeIc: {
        position: 'absolute',
        left: 60,
        top: 100,
        width: 139,
        height: 80,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: 'rgba(119, 93, 52, 1)',
        backgroundColor: 'rgba(119, 93, 52, 0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtLike: {
        fontSize: 40,
        lineHeight: 64,
        fontWeight: "700",
        fontFamily: "Inter-Bold",
        color: 'white',
    },
    nopeIc: {
        position: 'absolute',
        right: 60,
        top: 100,
        width: 139,
        height: 80,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: 'rgba(247, 85, 85, 1)',
        backgroundColor: 'rgba(213, 68, 68, 0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapSetting: {
        flexDirection: 'row',
        height: 29,
        alignItems: 'flex-start',
        // backgroundColor: 'red'
        // flex: 1
    },
    mrMatch: {
        height: 28.3,
        width: 153,
    },
    superLike: {
        position: 'absolute',
        left: 20,
        top: 320
    }
});