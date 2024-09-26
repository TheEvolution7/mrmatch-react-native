import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useIsIconOnStyle } from './IsIconOnStyleContext';
import LinearGradient from 'react-native-linear-gradient';

const SafeDateTopMenu: React.FC = () => {
    const { isIconOn, setIsIconOn } = useIsIconOnStyle();

    return (
        <View style={styles.container}>
            {/* Left Icon */}
            <TouchableOpacity style={styles.iconWrapper}>
                <Image
                    style={styles.heartIcon}
                    resizeMode="contain"
                    source={require('../../assets/images/heart.png')}
                />
            </TouchableOpacity>

            {/* Center Button with Gradient */}
            <View>
                <LinearGradient
                    locations={[0, 1]}
                    colors={isIconOn ? ['#bb9a65', '#775d34'] : ['#3A4A5A', '#3A4A5A']}
                    useAngle={true}
                    angle={101.24}
                    style={styles.gradientButton}>
                    <Text style={styles.buttonText}>
                        {isIconOn ? 'Enabled' : 'Disable'}
                    </Text>
                </LinearGradient>
            </View>

            {/* Right Icon */}
            <TouchableOpacity style={styles.iconWrapper}>
                <Image
                    style={styles.callIcon}
                    resizeMode="contain"
                    source={require('../../assets/images/call.png')}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    iconWrapper: {
        width: 40,
    },
    heartIcon: {
        width: 32,
        height: 28,
    },
    callIcon: {
        width: 22,
        height: 24,
    },
    gradientButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 800, // Large radius for rounded effect
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
});

export default SafeDateTopMenu;
