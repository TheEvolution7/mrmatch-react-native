import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const UpgradeTopMenu: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.wrapHeader}>
            <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => navigation.goBack()}>
                <Image
                    source={require('../../../assets/images/btnBack.png')}
                    style={styles.btnBack}
                />
            </TouchableOpacity>
            <Text style={styles.txtHeader}>Upgrade Membership</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapHeader: {
        flexDirection: 'row',
        width: '100%',
        height: 32,
        alignItems: 'center',
        marginTop: 0,
        paddingHorizontal: 20
    },
    txtHeader: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
        flex: 1,
        textAlign: 'center',
        marginLeft: -12
    },
    btnBack: {
        width: 7,
        height: 14
    }
});

export default UpgradeTopMenu;
