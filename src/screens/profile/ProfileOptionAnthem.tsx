
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
const ProfileOptionAnthem = () => {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Text style={styles.aboutMe}>My Anthem</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={[styles.txt5, { marginTop: 8 }]}>Shape of You</Text>
                    <View style={{ flexDirection: 'row', marginTop: 18, alignItems: 'center' }}>
                        <Image source={require('../../assets/images/spotify.png')} />
                        <Text style={[styles.txt4, { marginLeft: 8 }]}>Ed Sheeran</Text>
                    </View>
                </View>
                <Image source={require('../../assets/images/media.png')} />
            </View>
            <View style={styles.separator}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    aboutMe: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#bb9a65',
    },
    txt4: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
    txt5: {
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#f8f1e6',
    },
    separator: {
        marginTop: 28,
        marginBottom: 28,
        marginLeft: -20,
        marginRight: -20,
        height: 1,
        backgroundColor: '#6B7176',
    },
})

export default ProfileOptionAnthem;
