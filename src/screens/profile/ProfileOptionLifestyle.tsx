import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OptionItem from './OptionItem';





const ProfileOptionLifestyle: React.FC = () => {
    const [options, setOption] = React.useState([
        {
            id: '1',
            text: 'Dog',
            iconLeft: require('../../assets/images/ls-1.png'),
            iconRight: '',
        },
        {
            id: '2',
            text: 'Non-Drinker',
            iconLeft: require('../../assets/images/ls-2.png'),
            iconRight: '',
        },
        {
            id: '3',
            text: 'Non-smoker',
            iconLeft: require('../../assets/images/ls-3.png'),
            iconRight: '',
        },
        {
            id: '4',
            text: 'Sometimes',
            iconLeft: require('../../assets/images/ls-4.png'),
            iconRight: '',
        },
        {
            id: '5',
            text: 'Pescatarian',
            iconLeft: require('../../assets/images/ls-5.png'),
            iconRight: '',
        },
        {
            id: '6',
            text: 'Active on All',
            iconLeft: require('../../assets/images/ls-6.png'),
            iconRight: '',
        },
        {
            id: '7',
            text: 'Early Bird',
            iconLeft: require('../../assets/images/ls-7.png'),
            iconRight: '',
        },
    ]);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Lifestyle</Text>
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
export default ProfileOptionLifestyle;




