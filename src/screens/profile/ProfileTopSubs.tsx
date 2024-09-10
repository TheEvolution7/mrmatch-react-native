import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProfileTopSubs: React.FC = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                locations={[0, 1]}
                colors={['#bb9a65', '#775d34']}
                useAngle={true}
                angle={101.24}
                style={styles.linearGradient}
            >
                <View>
                    <Image
                        style={styles.subscriptionImage}
                        resizeMode="contain"
                        source={require('../../assets/images/subs.png')}
                    />
                </View>

                <View style={styles.textCenter}>
                    <Text style={styles.text}>
                        Upgrade Subscription Now
                    </Text>
                </View>

                <View style={styles.rightIcons}>
                    <TouchableOpacity>
                        <Image
                            style={styles.iconImage}
                            resizeMode="contain"
                            source={require('../../assets/images/close.png')}
                        />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 0,
    },
    linearGradient: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 13,
        paddingVertical: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subscriptionImage: {
        width: 48,
        height: 48,
    },
    textCenter: {
        justifyContent: 'center',
    },
    text: {
        color: '#F8F1E6',
        fontSize: 16,
        fontFamily: 'font-heading', // Assuming you have this font
        fontWeight: '500',
        textAlign: 'center',
    },
    rightIcons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    iconImage: {
        width: 24,
        height: 24,
    },
});

export default ProfileTopSubs;
