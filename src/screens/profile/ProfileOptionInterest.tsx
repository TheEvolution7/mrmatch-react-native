import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OptionItem from './OptionItem';





const ProfileOptionInterest: React.FC = () => {
    const [options, setOption] = React.useState([
        {
            id: '1',
            text: 'Travel ✈️',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '2',
            text: 'Yoga 🧘',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '3',
            text: 'Gaming 🎮',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '4',
            text: 'Movies 🎥',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '5',
            text: 'Music 🎵',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '6',
            text: 'Art 🎨',
            iconLeft: '',
            iconRight: '',
        },
    ]);


    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Interests & Hobbies
                </Text>
            </View>

            <View style={styles.optionsContainer}>
                {options.map((item) => (
                    <View key={item.id}>
                        <OptionItem
                            text={item.text}
                            iconLeft={item.iconLeft}
                            iconRight={item.iconRight}
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
    },
    headerText: {
        color: '#BB9A65',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'font-heading', // Assuming this font is available in your project
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
});
export default ProfileOptionInterest;




