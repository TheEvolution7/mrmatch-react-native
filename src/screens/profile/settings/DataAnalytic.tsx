import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import HeaderScreen from '../../../components/Header';

interface ProfileVerificationProps {
    title: string;
    description?: string;
    onPress: () => void;
    txtValue?: string;
}

const ProfileVerification: React.FC<ProfileVerificationProps> = ({ title, description, onPress, txtValue }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.title}>{title}</Text>
                {txtValue && <Text style={styles.txtValue}>{txtValue}</Text>}
                <Image source={require('../../../assets/images/ArrowRight.png')} style={styles.arrowIcon} />
            </View>
            {description && <Text style={styles.description}>{description}</Text>}
        </TouchableOpacity>
    );
};

const DataAnalytic: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Container style={{ paddingHorizontal: 20 }}>
            <HeaderScreen title='Data & Analytics' />
            <ProfileVerification title='Data Usage' description='Control how your data is used for analytics. Customize your preferences.' onPress={() => { }} />
            <View style={styles.separator} />
            <ProfileVerification title='Ad Preferences' description='Manage ad personalization settings. Tailor your ad experience.' onPress={() => { }} />
            <View style={styles.separator} />
            <ProfileVerification title='Download My Data' description='Request a copy of your data. Your information, your control.' onPress={() => { }} />
        </Container>
    )
}
const styles = StyleSheet.create({
    container: {
        // justifyContent: 'space-between',
        // alignItems: 'center',
        marginTop: 24
    },
    title: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6", // Semi-bold to match the "Profile Verification" style
        flex: 1
    },
    description: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        opacity: 0.5,
        marginTop:10
    },
    arrowIcon: {
        width: 7,
        height: 14, // Adjust this size to fit the arrow icon in the design
        marginLeft: 18
    },
    txtValue: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
    },
    separator: {
        height: 2,
        opacity: 0.5,
        backgroundColor: 'rgba(107, 113, 118, 1)',
        // width: '100%',
        marginTop: 28,
        marginHorizontal: -20
    },
})
export default DataAnalytic;