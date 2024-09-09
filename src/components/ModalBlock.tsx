import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';
import {
    Image,
    StyleSheet,
    View,
    type ImageSourcePropType,
    Text,
    TouchableOpacity,
    Share
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ModalBlock = (props) => {
    const { showModalBlock } = props;
    const [isStatusBlock, setStatusBlock] = React.useState(false);
    return (
        <>
            {isStatusBlock ?
                <View style={[styles.modalView, { paddingHorizontal: 20 }]}>
                    <Text style={styles.titleTxt}>Report Sucessfully</Text>
                    <View style={styles.device}></View>
                    {/* <Animated.View style={animatedStyle}> */}
                    <Image
                        source={require('../assets/images/blockSuccess.png')}
                        style={{ width: 180, height: 186, marginTop: 23, marginBottom: 50 }}>
                    </Image>
                    {/* </Animated.View> */}

                    <Text style={styles.txt6}>Profile has been blocked!</Text>
                    <Text style={[styles.txt3, { color: '#8d8d8b', marginTop: 22, textAlign: 'center', opacity: 1 }]}>Want to block someone else you already know? Add them in Block List.</Text>
                    <View style={{ width: '100%' }}>
                        <TouchableOpacity onPress={() => { }} style={{ width: '100%', marginTop: 36 }}>
                            <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ height: 56, borderRadius: 30, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.letChat}>Thanks, I’m done</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            showModalBlock(false);
                            setStatusBlock(false);
                        }} style={{ height: 56, borderRadius: 30, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2c3843', marginTop: 16 }}>
                            <Text style={styles.letChat}>Go to Block List</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={[styles.modalView, { paddingHorizontal: 0, alignItems: 'flex-start' }]}>
                    <Text style={[styles.titleTxt, { width: '100%', textAlign: 'center' }]}>Block Jessica</Text>
                    <View style={[styles.device, { width: '100%', marginLeft: 0 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}>
                        <Image
                            source={require('../assets/images/closeBl.png')}
                        />
                        <Text style={[styles.txt3, { marginLeft: 16, opacity: 1, flex: 1 }]}>They will not be able to find your profile and send you messages.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}>
                        <Image
                            source={require('../assets/images/alarmBl.png')}
                        />
                        <Text style={[styles.txt3, { marginLeft: 16, opacity: 1 }]}>They will not be notified if you block them.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}>
                        <Image
                            source={require('../assets/images/settingBl.png')}
                        />
                        <Text style={[styles.txt3, { marginLeft: 16, opacity: 1 }]}>You can unblock them anytime in Settings.</Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, width: '100%' }}>
                        <TouchableOpacity onPress={() => setStatusBlock(true)} style={{ width: '100%', marginTop: 36 }}>
                            <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ height: 56, borderRadius: 30, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.letChat}>Yes, Block</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            showModalBlock(false);
                            // setShowBlock(false);
                        }} style={{ height: 56, borderRadius: 30, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2c3843', marginTop: 16 }}>
                            <Text style={styles.letChat}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                </View>}
        </>
    )
}

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        paddingHorizontal: 20,
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
        // height: '100%',
        paddingBottom: 32
    },
    titleTxt: {
        fontSize: 21,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        marginTop: 22
    },
    device: {
        height: 1,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 24,
        marginLeft: -20
    },
    txt6: {
        fontSize: 18,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: 'center'
    },
    txt3: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        opacity: 0.5,
        marginTop: 10
    },
    letChat: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
    },
})

export default ModalBlock;