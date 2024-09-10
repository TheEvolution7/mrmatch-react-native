import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

type RelaItemProps = {
    icon: any;
    iconActive: any;
    title: string;
    isActive: boolean;
    onPress: () => void;
};

const RelaItem: React.FC<RelaItemProps> = ({ icon, iconActive, isActive, title, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                { borderColor: isActive ? '#BB9A65' : '#2D3843', backgroundColor: isActive ? '#BB9A6520' : '#1C252D' }
            ]}
        >
            <Image style={styles.image} resizeMode="contain" source={isActive ? iconActive : icon} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 16,
        marginRight: 8,
        marginLeft: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: 25,
    },
    image: {
        width: 41,
        height: 41,
        marginBottom: 11,
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
    },
});

export default RelaItem;
