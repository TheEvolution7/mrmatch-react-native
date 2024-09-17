import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import OptionItem from './OptionItem';
import SocialItem from './SocialItem';





const ProfileSocialConnect: React.FC = () => {
    const [socials, setSocial] = React.useState([
        {
            id: '1',
            icon: require('../../assets/images/face.png'),
            isActive: true,
        },
        {
            id: '2',
            icon: require('../../assets/images/insta.png'),
            isActive: true,
        },
        {
            id: '3',
            icon: require('../../assets/images/tiktok.png'),
            isActive: true,
        },
        {
            id: '4',
            icon: require('../../assets/images/tw.png'),
            isActive: true,
        },
        {
            id: '5',
            icon: require('../../assets/images/in.png'),
            isActive: true,
        },
    ]);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Social Media</Text>
            </View>

            <View style={styles.socialsContainer}>
                {socials
                    .filter((item) => item.isActive)
                    .map((item) => (
                        <View style={styles.wrapConnect} key={item.id}>
                            <Image source={item?.icon} />
                            <TouchableOpacity style={styles.statusConnect}>
                                <Text style={styles.txtConnect}>Not Connected</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
            </View>
            <View style={styles.separator}></View>
            <View style={styles.wrapAnthem}>
                <Text style={styles.anthem}>My Anthem</Text>
                <Text style={[styles.txtConnect,{marginRight:10}]}>Not Connected</Text>
                <Image source={require('../../assets/images/spotify_24.png')} style={{width:24, height:24}}/>
            </View>
            <View style={styles.separator}></View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginHorizontal: 20,
    },
    header: {
        marginBottom: 30,
    },
    headerText: {
        color: '#BB9A65',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'font-heading', // Assuming this font is available
    },
    socialsContainer: {
        flexWrap: 'wrap',
        alignItems: 'center',
        flex: 1,
    },
    separator: {
        marginTop: 28,
        marginBottom: 28,
        marginLeft: -20,
        marginRight: -20,
        height: 2,
        backgroundColor: 'rgba(107, 113, 118, 0.5)',
    },
    statusConnect: {
        backgroundColor: "#1c252d",
        borderStyle: "solid",
        borderColor: "#2d3843",
        borderWidth: 1.5,
        paddingHorizontal: 20,
        flex: 1,
        borderRadius: 50,
        marginLeft: 10,
        justifyContent: 'center'
    },
    wrapConnect: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 26
    },
    txtConnect: {
        textAlign: 'right',
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#40505f",
    },
    wrapAnthem: {
        flexDirection: 'row',
        alignItems:'center'
    },
    anthem: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "#bb9a65",
        flex:1
    }
});
export default ProfileSocialConnect;




