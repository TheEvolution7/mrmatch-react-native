import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileEditTopMenu: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
                    <Image
                        style={styles.backButton}
                        resizeMode="contain"
                        source={require('../../assets/images/btnBack.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.centerContainer}>
                <Text style={styles.titleText}>
                    Edit Profile
                </Text>
            </View>

            <View style={styles.rightContainer}>
                {/* Add any right-aligned items here */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',        // Equivalent to 'flex flex-row'
        justifyContent: 'space-between', // Equivalent to 'justify-between'
        alignItems: 'center',        // Equivalent to 'items-center'
        paddingHorizontal: 20,       // Equivalent to 'px-[20px]'
        paddingBottom: 15,           // Equivalent to 'pb-[15px]'
    },
    leftContainer: {
        flex: 1,                     // Equivalent to 'flex-1'
    },
    backButton: {
        width: 32,                   // Equivalent to 'w-[32px]'
        height: 14,                  // Equivalent to 'h-[14px]'
    },
    centerContainer: {
        flex: 1,                     // Equivalent to 'flex-1'
        justifyContent: 'center',    // Equivalent to 'text-center'
    },
    titleText: {
        color: '#D7C09C',            // Equivalent to 'text-[#D7C09C]'
        fontSize: 20,                // Equivalent to 'text-[20px]'
        fontFamily: 'font-heading',  // Assuming you have a custom font 'font-heading'
        fontWeight: '500',           // Equivalent to 'font-medium'
        textAlign: 'center',         // Equivalent to 'text-center'
    },
    rightContainer: {
        flexDirection: 'row',        // Equivalent to 'flex flex-row'
        gap: 16,                     // Equivalent to 'gap-[16px]' (React Native doesn't have gap, you need to manage spacing manually if required)
        flex: 1,                     // Equivalent to 'flex-1'
        justifyContent: 'flex-end',   // Equivalent to 'justify-end'
    },
});

export default ProfileEditTopMenu;
