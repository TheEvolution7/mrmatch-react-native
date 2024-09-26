import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Container from '../../../components/Container';
import PrivacyTopMenu from './PrivacyTopMenu';
import PrivacyWho from './PrivacyWho';

const PrivacyScreen: React.FC = () => {



    return (
        <Container style={{}}>
            <PrivacyTopMenu />
            <PrivacyWho />
        </Container>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 100,
    },
})

export default PrivacyScreen;
