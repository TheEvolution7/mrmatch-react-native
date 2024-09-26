import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type OptionItemProps = {
    text: string;
    iconLeft?: any;
    iconRight?: any;
};

const OptionItem: React.FC<OptionItemProps> = ({ text, iconLeft, iconRight }) => {
    return (
        <View style={styles.container}>
            {iconLeft ? (
                <Image style={styles.icon} resizeMode="contain" source={iconLeft} />
            ) : null}
            <Text style={styles.text}>{text}</Text>
            {iconRight ? (
                <Image style={styles.icon} resizeMode="contain" source={iconRight} />
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#BB9A65',
        borderWidth: 1.5,
        borderRadius: 50,
        paddingVertical: 12,
        paddingRight: 13,
        paddingLeft: 8,
        marginHorizontal: 6, // For spacing equivalent to Tailwind's gap-x-[6px]
        marginTop:8
    },
    icon: {
        width: 16,
        height: 14,
    },
    text: {
        color: '#F8F1E6',
        fontSize: 14,
        marginLeft:8
    },
});

export default OptionItem;
