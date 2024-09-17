import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import OptionItem from './OptionItem';
import userStore from '../../storage/UserStore';
import { TITLEMODAL, TYPEMODAL } from '../../constant/typeModal';

const ProfileOptionInterest: React.FC = ({ openModal }) => {
    // const [options, setOption] = React.useState(userStore.interests);


    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Interests & Hobbies
                </Text>
                <TouchableOpacity onPress={() => {
                    userStore.setTypeModal(TYPEMODAL.INTEREST);
                    userStore.setTitleModal(TITLEMODAL.INTEREST);
                    openModal(true);
                }} style={styles.wrapShow}>
                    <Text style={styles.showMore}>Show more</Text>
                    <Image
                        source={require('../../assets/images/downIc.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.optionsContainer}>
                {userStore.interests.map((item) => (
                    <View key={item.id}>
                        <OptionItem
                            text={item}
                        />
                    </View>
                ))}
            </View>

            <View style={styles.separator}></View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginHorizontal: 20,
    },
    headerContainer: {
        marginBottom: 30,
        flexDirection: 'row'
    },
    headerText: {
        color: '#BB9A65',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'font-heading', // Assuming this font is available in your project
        flex: 1
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginLeft: -5,
        gap: 10, // Note: React Native does not support the `gap` property directly. You can use margins for spacing between items instead.
    },
    separator: {
        marginTop: 28,
        marginBottom: 28,
        marginLeft: -20,
        marginRight: -20,
        height: 1,
        backgroundColor: '#6B7176',
    },
    wrapShow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    showMore: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        marginRight: 8
    }
});
export default ProfileOptionInterest;




