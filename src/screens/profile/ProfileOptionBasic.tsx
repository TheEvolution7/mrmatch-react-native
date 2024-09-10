import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OptionItem from './OptionItem';





const ProfileOptionBasic: React.FC = () => {
    const [options, setOption] = React.useState([
        {
            id: '1',
            text: 'English 🇺🇸',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '2',
            text: 'Christianity',
            iconLeft: require('../../assets/images/bs-1.png'),
            iconRight: '',
        },
        {
            id: '3',
            text: 'Libra',
            iconLeft: require('../../assets/images/bs-2.png'),
            iconRight: '',
        },
        {
            id: '4',
            text: 'Bachelors',
            iconLeft: require('../../assets/images/bs-3.png'),
            iconRight: '',
        },
        {
            id: '5',
            text: 'Not Sure Yet',
            iconLeft: require('../../assets/images/bs-4.png'),
            iconRight: '',
        },
        {
            id: '6',
            text: 'Vaccinated',
            iconLeft: require('../../assets/images/bs-5.png'),
            iconRight: '',
        },
        {
            id: '7',
            text: 'ENFP',
            iconLeft: require('../../assets/images/bs-6.png'),
            iconRight: '',
        },
        {
            id: '8',
            text: 'Storyteller',
            iconLeft: require('../../assets/images/bs-7.png'),
            iconRight: '',
        },
        {
            id: '9',
            text: 'Hopeless Romantic',
            iconLeft: require('../../assets/images/bs-8.png'),
            iconRight: '',
        },
        {
            id: '10',
            text: 'A',
            iconLeft: require('../../assets/images/bs-9.png'),
            iconRight: '',
        },
    ]);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Basics Information</Text>
            </View>

            <View style={styles.optionsContainer}>
                {options.map((item) => (
                    <View key={item.id}>
                        <OptionItem
                            text={item.text}
                            iconRight={item.iconRight}
                            iconLeft={item.iconLeft}
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
    header: {
        marginBottom: 30,
    },
    headerText: {
        color: '#BB9A65',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'font-heading', // Assuming this font is available
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginLeft: -5,
        gap: 10, // Note: React Native doesn't directly support `gap`, you may need to use `margin` or `padding` for spacing
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
export default ProfileOptionBasic;




