import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

type FeatureCardProps = {
    icon: any;
    iconActive: any;
    title: string;
    isActive: boolean;
    onPress: () => void;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, iconActive, title, isActive, onPress }) => {
    const borderColor = isActive ? '#BB9A65' : '#2C3843';
    const bgColor = isActive ? '#23272a' : '#182128';
    const dotColor = isActive ? '#BB9A65' : '#2C3843';
    const [showTip, setTip] = useState(true);

    return (
        <Pressable onPress={onPress} style={[styles.container, { borderColor, backgroundColor: bgColor }]}>
            <View style={styles.infoIconContainer}>
                <Image
                    resizeMode="contain"
                    source={require('../../assets/images/f-info.png')}
                    style={styles.infoIcon}
                />
            </View>
            <View
                style={[
                    styles.dot,
                    { backgroundColor: isActive ? dotColor : 'transparent', borderColor: !isActive ? dotColor : 'transparent' }
                ]}
            />
            <View style={styles.iconContainer}>
                <Image source={isActive ? iconActive : icon} resizeMode="contain" style={styles.icon} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 8,
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 0,
        paddingBottom: 15,
        borderRadius: 16,
        borderWidth: 2,
        borderStyle: 'solid',
        position: 'relative',
    },
    infoIconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    infoIcon: {
        width: 18,
        height: 18,
    },
    dot: {
        position: 'absolute',
        top: 10,
        left: 10,
        borderRadius: 30,
        width: 17,
        height: 17,
        borderWidth: 2,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    icon: {
        width: 40,
        height: 50,
        zIndex: 3,
    },
    textContainer: {
        marginTop: 10,
    },
    title: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: '500',
        textAlign: 'center',
    },
});

export default FeatureCard;
