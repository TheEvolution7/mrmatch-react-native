import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OptionItem from './OptionItem';
import SocialItem from './SocialItem';





const ProfileOptionSocial: React.FC = () => {
    const [socials, setSocial] = React.useState([
        {
            id: '1',
            icon: require('../../assets/images/s-1.png'),
            isActive: true,
        },
        {
            id: '2',
            icon: require('../../assets/images/s-2.png'),
            isActive: true,
        },
        {
            id: '3',
            icon: require('../../assets/images/s-3.png'),
            isActive: true,
        },
        {
            id: '4',
            icon: require('../../assets/images/s-4.png'),
            isActive: true,
        },
        {
            id: '5',
            icon: require('../../assets/images/s-5.png'),
            isActive: true,
        },
    ]);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Social Media</Text>
            </View>

            <View style={styles.socialsContainer}>
                {socials
                    .filter((item) => item.isActive)
                    .map((item) => (
                        <View key={item.id}>
                            <SocialItem
                                icon={item.icon}
                                isActive={item.isActive}
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
    socialsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
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
export default ProfileOptionSocial;




