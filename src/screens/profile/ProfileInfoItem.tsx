import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type ProfileInfoItemProps = {
    icon: any;
    title: string;
};

const ProfileInfoItem: React.FC<ProfileInfoItemProps> = ({ icon, title }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} resizeMode="contain" source={icon} />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 12, // Equivalent to gap-x-[12px]
    },
    icon: {
        width: 20,
        height: 20,
    },
    text: {
        color: '#F8F1E6',
        fontSize: 14,
    },
});

export default ProfileInfoItem;
