import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import userStore from '../../storage/UserStore';
import { TITLEMODAL, TYPEMODAL } from '../../constant/typeModal';





const BasicInformation: React.FC = ({ openModal }) => {
    const dataInfor = [
        { id: 1, label: 'Languages', icon: require('../../assets/images/language.png'), title: userStore.languages.toString() },
        { id: 2, label: 'Religions', icon: require('../../assets/images/religion.png'), title: userStore.religion },
        { id: 3, label: 'Zodiac', icon: require('../../assets/images/zodiac.png'), title: userStore.zodiac },
        { id: 4, label: 'Education', icon: require('../../assets/images/education.png'), title: userStore.education },
        { id: 5, label: 'Family Plans', icon: require('../../assets/images/baby.png'), title: userStore.familyPlan },
        { id: 6, label: 'COVID Vaccine', icon: require('../../assets/images/vaccine.png'), title: userStore.vaccine },
        { id: 7, label: 'Personality Type', icon: require('../../assets/images/puzzle.png'), title: userStore.personalType },
        { id: 8, label: 'Communication Style', icon: require('../../assets/images/communication.png'), title: userStore.communStyle },
        { id: 9, label: 'Love Style', icon: require('../../assets/images/love.png'), title: userStore.loveStyle },
        { id: 10, label: 'Blood Type', icon: require('../../assets/images/blood.png'), title: userStore.bloodType },
    ];
    return (
        <>
            <Text style={[styles.txt1]}>Basics Information</Text>
            {dataInfor.map((item, index) => (
                <TouchableOpacity onPress={() => {
                    userStore.setTypeModal(TYPEMODAL.BASIC);
                    userStore.setTitleModal(TITLEMODAL.BASIC);
                    openModal(true);
                }} key={index} style={styles.item}>
                    <View style={styles.iconContainer}>
                        <Image source={item?.icon} />
                    </View>
                    <Text style={styles.label}>{item.label}</Text>
                    <Text style={styles.select}>{item?.title?.length > 0 ? item?.title.substring(0, 20) : 'Select'}</Text>
                    <Image source={require('../../assets/images/ArrowRight.png')} />
                </TouchableOpacity>
            ))}
            <View style={styles.device} />
        </>
    )
}
const styles = StyleSheet.create({
    txt1: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#bb9a65',
        marginTop: 27
    },
    iconContainer: {
        width: 40,
    },
    label: {
        flex: 1,
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#f8f1e6',
    },
    select: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        marginRight: 10,
        opacity: 0.5
    },
    device: {
        height: 1,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 24,
        marginLeft: -20
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
    },
})
export default BasicInformation;