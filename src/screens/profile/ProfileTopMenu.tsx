import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileTopMenu: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.flexItem}>
                <TouchableOpacity>
                    <Image
                        style={styles.heartIcon}
                        resizeMode="contain"
                        source={require('../../assets/images/heart.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.centerItem}>
                <Text style={styles.profileText}>Profile</Text>
            </View>

            <View style={styles.rightIcons}>
                <TouchableOpacity onPress={()=>navigation.navigate('PrivacyScreen')}>
                    <Image
                        style={styles.icon}
                        resizeMode="contain"
                        source={require('../../assets/images/lock.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('SettingsScreen')}>
                    <Image
                        style={styles.icon}
                        resizeMode="contain"
                        source={require('../../assets/images/fi_settings.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
    flexItem: {
        flex: 1,
    },
    heartIcon: {
        width: 32,
        height: 28,
    },
    centerItem: {
        flex: 1,
        justifyContent: 'center',
    },
    profileText: {
        color: '#D7C09C',
        fontSize: 20,
        fontFamily: 'font-heading', // Assuming you have this font loaded
        fontWeight: '500',
        textAlign: 'center',
    },
    rightIcons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
        gap: 16, // React Native doesn't directly support gap; you'd handle this with margins if needed
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 16, // Use marginLeft to mimic gap in flex direction row
    },
});

export default ProfileTopMenu;
