import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OptionItem from './OptionItem';





const ProfileOptionTravel: React.FC = () => {
    const [options, setOption] = React.useState([
        {
            id: '1',
            text: 'City Breaks 🌆',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '2',
            text: 'Cultural Exploration 🏛️',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '3',
            text: 'Beach Vacations 🏖️',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '4',
            text: 'Food Tourism 🍔',
            iconLeft: '',
            iconRight: '',
        },
        {
            id: '5',
            text: 'Staycations 🏡',
            iconLeft: '',
            iconRight: '',
        },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Travel Preferences</Text>
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

export default ProfileOptionTravel;




