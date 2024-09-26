import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated,
    Alert,
    Linking,
    StyleSheet,
} from 'react-native';
import GradientText from '../../components/GradientText';
import LinearGradient from 'react-native-linear-gradient';
import { useIsIconOnStyle } from './IsIconOnStyleContext';
import FeatureList from './FeatureList';
import SafeDateTopMenu from './SafeDateTopButton';

export const ModeButton: React.FC = () => {
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const phoneNumber = '000000000';
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const { isIconOn, setIsIconOn } = useIsIconOnStyle();

    const handlePressIn = () => {
        const timeout = setTimeout(() => {
            if (isIconOn) {
                Linking.openURL(`tel:${phoneNumber}`);
                Alert.alert('Your call has been placed');
            }
        }, 2500);
        setTimer(timeout);
    };

    const handleTap = () => {
        Animated.spring(scaleAnim, {
            toValue: isIconOn ? 0 : 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
        setIsIconOn(!isIconOn);
    };

    return (
        <View>
            <SafeDateTopMenu />
            <View style={styles.contentContainer}>
                <View style={styles.textCenter}>
                    <GradientText text="SafeDate Mode" colors={['#F8F1E6', '#BB9A66']} fontSize={30} />
                </View>
                <Text style={styles.descriptionText}>
                    We highly recommend you to activate SafeDate feature before you go on your date for your own safety.
                </Text>
                <TouchableOpacity
                    onLongPress={handlePressIn}
                    onPress={handleTap}
                    disabled={false}
                    style={styles.pressableButton}>
                    <Animated.View style={[styles.outerCircle, { transform: [{ scale: scaleAnim }] }]} />
                    <Animated.View style={[styles.innerCircle, { transform: [{ scale: scaleAnim }] }]} />
                    <LinearGradient
                        style={styles.gradientButton}
                        colors={isIconOn ? ['#BB9A65', '#775D34'] : ['#40505F', '#273747']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}>
                        <Image
                            style={styles.icon}
                            resizeMode="contain"
                            source={require('../../assets/images/on-off.png')}
                        />
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.instructionText}>
                    {isIconOn
                        ? 'Hold 3 seconds to contact emergency services'
                        : 'Tap once to turn on/off'}
                </Text>
            </View>

            <View pointerEvents={isIconOn ? 'auto' : 'none'}>
                <FeatureList />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <LinearGradient
                            locations={[0, 1]}
                            colors={isIconOn ? ['#bb9a65', '#775d34'] : ['#2D3843', '#2D3843']}
                            useAngle={true}
                            angle={101.24}
                            style={styles.linearButton}>
                            <Image
                                style={[styles.iconSmall, { opacity: isIconOn ? 1 : 0.2 }]}
                                resizeMode="contain"
                                source={require('../../assets/images/mail.png')}
                            />
                            <Text style={[styles.buttonText, { opacity: isIconOn ? 1 : 0.2 }]}>
                                Emergency Message
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.outlineButton, { opacity: isIconOn ? 1 : 0.5 }]}>
                        <Image
                            style={styles.iconSmall}
                            resizeMode="contain"
                            source={require('../../assets/images/contact.png')}
                        />
                        <Text style={styles.outlineButtonText}>Add Emergency Contacts</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        justifyContent: 'center',
        paddingHorizontal: 80,
        paddingVertical: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#6B7176',
        alignItems:'center'
    },
    textCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionText: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        lineHeight: 24,
        marginTop: 20,
    },
    pressableButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 130,
        marginTop: 40,
        position: 'relative',
    },
    outerCircle: {
        position: 'absolute',
        width: 190,
        height: 190,
        backgroundColor: '#BB9A65',
        opacity: 0.1,
        borderRadius: 550,
        top: -30,
        left: -30,
    },
    innerCircle: {
        position: 'absolute',
        width: 160,
        height: 160,
        backgroundColor: '#BB9A65',
        opacity: 0.2,
        borderRadius: 550,
        top: -15,
        left: -15,
    },
    gradientButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 550,
        height:'100%'
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 2,
    },
    instructionText: {
        maxWidth: 240,
        minHeight: 48,
        color: '#D7C09C',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 24,
        marginTop: 30,
    },
    buttonContainer: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    linearButton: {
        flexDirection: 'row',
        borderRadius: 800,
        paddingHorizontal: 20,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconSmall: {
        width: 24,
        height: 24,
        marginRight: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    outlineButton: {
        flexDirection: 'row',
        borderRadius: 800,
        paddingHorizontal: 20,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D7C09C',
        marginTop: 20,
    },
    outlineButtonText: {
        color: '#D7C09C',
        fontSize: 16,
        fontWeight: '500',
    },
});
