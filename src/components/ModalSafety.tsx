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

const ModalSafety = (props) => {
    const { showModalBlock, setShowSatety, isShowUnmatch, setShowUnmatched } = props;
    const navigation = useNavigation();
    console.log(props);
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Sharing information',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            //   Alert.alert(error.message);
        }
    };
    return (
        <>
            <View style={styles.wrapHeader}>
                <TouchableOpacity hitSlop={30} onPress={() => {
                    setShowSatety(false);
                }}>
                    <Image
                        source={require('../assets/images/closeIc.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Safety Features</Text>
                <Image
                    source={require('../assets/images/fi_headPhone.png')} />
            </View>
            <View style={styles.device}></View>
            <TouchableOpacity onPress={() => onShare()} style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 20 }}>
                <Image
                    source={require('../assets/images/share.png')} />
                <View style={{ marginLeft: 16 }}>
                    <Text style={[styles.txt1, { marginTop: 0, color: '#f8f1e6' }]}>Share This Profile</Text>
                    <Text style={styles.txt3}>Recommended Jessica to Friends</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.device}></View>
            {isShowUnmatch &&
                <>
                    <TouchableOpacity onPress={() => {
                        setShowSatety(false);
                        setShowUnmatched(true);
                    }} style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 20 }}>
                        <Image
                            source={require('../assets/images/closeBl.png')} />
                        <View style={{ marginLeft: 16 }}>
                            <Text style={[styles.txt1, { marginTop: 0, color: '#f8f1e6' }]}>Unmatched from Jessica</Text>
                            <Text style={styles.txt3}>No longer interested? Remove them from your matches.</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.device}></View>
                </>}

            <TouchableOpacity onPress={() => {
                setShowSatety(false);
                showModalBlock(true);
            }} style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 20 }}>
                <Image
                    source={require('../assets/images/block.png')} />
                <View style={{ marginLeft: 16 }}>
                    <Text style={[styles.txt1, { marginTop: 0, color: '#f8f1e6' }]}>Block Jessica</Text>
                    <Text style={styles.txt3}>You won’t see them, and they won’t see you.</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.device}></View>
            <TouchableOpacity onPress={() => {
                setShowSatety(false);
                navigation.navigate('Report');
            }} style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 20, paddingBottom: 30 }}>
                <Image
                    source={require('../assets/images/reportIc.png')} />
                <View style={{ marginLeft: 16 }}>
                    <Text style={[styles.txt1, { marginTop: 0, color: '#f8f1e6' }]}>Report Jessica</Text>
                    <Text style={styles.txt3}>Don’t worry, we won’t tell them.</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    wrapHeader: {
        flexDirection: 'row',
        width: '100%',
        height: 32,
        alignItems: 'center',
        marginTop: 26,
        paddingHorizontal: 20
    },
    txt3: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        opacity: 0.5,
        marginTop: 10
    },
    txt1: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#bb9a65',
        marginTop: 27
    },
    device: {
        height: 1,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 24,
        marginLeft: -20
    },
    txtHeader: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
        flex: 1,
        textAlign: 'center',
        marginLeft: -12
    },
})

export default ModalSafety;