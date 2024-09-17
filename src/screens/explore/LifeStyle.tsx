import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import userStore from '../../storage/UserStore';
import { TITLEMODAL, TYPEMODAL } from '../../constant/typeModal';

const LifeStyle: React.FC = ({ openModal }) => {
    const dataLifeStyle = [
        { id: 1, label: 'Pets', icon: require('../../assets/images/pet.png'), title: userStore.pets },
        { id: 2, label: 'Drinking Habits', icon: require('../../assets/images/drinking.png'), title: userStore.drinking },
        { id: 3, label: 'Smoking Habits', icon: require('../../assets/images/smoking.png'), title: userStore.smoking },
        { id: 4, label: 'Workout', icon: require('../../assets/images/workout.png'), title: userStore.workout },
        { id: 5, label: 'Dietary Preferences', icon: require('../../assets/images/hambuger.png'), title: userStore.dietary },
        { id: 6, label: 'Social Media Presence', icon: require('../../assets/images/socail.png'), title: userStore.social },
        { id: 7, label: 'Sleeping Habits', icon: require('../../assets/images/sleeping.png'), title: userStore.sleeping },
    ]
    return (
        <>
            <Text style={[styles.txt1]}>Lifestyle</Text>
            {dataLifeStyle.map((item) => (
                <TouchableOpacity onPress={() => {
                    userStore.setTypeModal(TYPEMODAL.LIFE);
                    userStore.setTitleModal(TITLEMODAL.LIFE);
                    openModal(true);
                }} key={item.id} style={styles.item}>
                    <View style={styles.iconContainer}>
                        <Image source={item?.icon} />
                    </View>
                    <Text style={styles.label}>{item.label}</Text>
                    <Text style={styles.select}>{item?.title.length > 0 ? item.title.substring(0, 15) : 'Select'}</Text>
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
export default LifeStyle;