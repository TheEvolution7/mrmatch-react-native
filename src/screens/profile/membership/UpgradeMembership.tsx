import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Container from '../../../components/Container';
import UpgradeTopMenu from './UpgradeTopMenu';
import UpgradeBasic from './UpgradeBasic';
import UpgradeRiver from './UpgradeRiver';
import UpgradeSea from './UpgradeSea';
import UpgradeOcean from './UpgradeOcean';
const UpgradeMembership: React.FC = () => {



    return (
        <Container style={{}}>
            <UpgradeTopMenu />
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <UpgradeBasic />
                <UpgradeRiver />
                <UpgradeSea />
                <UpgradeOcean />
            </ScrollView>

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

export default UpgradeMembership;
