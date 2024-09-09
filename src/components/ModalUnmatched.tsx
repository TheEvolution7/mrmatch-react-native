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

const ModalUnmatched = (props) => {
    const { setShowUnmatched } = props;
    return (
        <>
            <View style={[styles.modalView, { paddingHorizontal: 0, alignItems: 'flex-start' }]}>
                <Text style={[styles.titleTxt, { width: '100%', textAlign: 'center' }]}>Unmatched Jessica</Text>
                <View style={[styles.device, { width: '100%', marginLeft: 0 }]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}>
                    <Text style={[styles.txt3, { marginLeft: 16, opacity: 1, flex: 1, textAlign:'center' }]}>Are you really sure you want to unmatch with Jessica ? This can not be undone and your match won’t be notified</Text>
                </View>
                
                <View style={{ paddingHorizontal: 20, width: '100%' }}>
                    <TouchableOpacity onPress={() => setShowUnmatched(false)} style={{ width: '100%', marginTop: 36 }}>
                        <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ height: 56, borderRadius: 30, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.letChat}>Yes, Unmatched</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setShowUnmatched(false);
                        // setShowBlock(false);
                    }} style={{ height: 56, borderRadius: 30, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2c3843', marginTop: 16 }}>
                        <Text style={styles.letChat}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
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

export default ModalUnmatched;