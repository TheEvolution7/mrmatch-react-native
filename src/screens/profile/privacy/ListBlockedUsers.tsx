import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal, FlatList, Dimensions } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const screenWidth = Dimensions.get('window').width;

const ListBlockedUsers: React.FC = () => {
    const navigation = useNavigation();

    const dataMembers = [
        {
            id: 1,
            image: require('../../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 2,
            image: require('../../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 3,
            image: require('../../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 4,
            image: require('../../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 5,
            image: require('../../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 6,
            image: require('../../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 7,
            image: require('../../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 8,
            image: require('../../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 9,
            image: require('../../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 10,
            image: require('../../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
    ]

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ProfileMember')} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.overlay} />
            <View style={styles.textContainer}>
                <LinearGradient style={{ borderRadius: 10, width: '100%', flex: 1 }} locations={[0, 0.32, 0.49, 0.65, 0.82, 1]} colors={['rgba(28, 37, 45, 0)', 'rgba(28, 37, 45, 0.6)', 'rgba(28, 37, 45, 0.75)', 'rgba(28, 37, 45, 0.85)', 'rgba(28, 37, 45, 0.95)', '#1c252d']} useAngle={true} angle={180} >
                    <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.name}>
                                {item.name}
                            </Text>
                            <Image
                                source={require('../../../assets/images/verifyIc_30.png')}
                                style={{ width: 30, height: 30 }} />
                        </View>

                        <Text style={styles.distance}>{item.distance} km away</Text>
                    </View>
                </LinearGradient>
            </View>
        </TouchableOpacity>
    );

    return (
        <Container style={{ paddingHorizontal: 20 }}>
            <View style={styles.wrapHeader}>
                <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../../assets/images/btnBack.png')}
                        style={styles.btnBack}
                    />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Blocked Users (24)</Text>
                <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../../assets/images/AddUser.png')}
                        style={{}}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={dataMembers}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={{}}
                columnWrapperStyle={{ marginTop: 14 }}
                style={{ flex: 1 }}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    wrapHeader: {
        flexDirection: 'row',
        width: '100%',
        height: 32,
        alignItems: 'center',
        marginTop: 0,
    },
    txtHeader: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
        flex: 1,
        textAlign: 'center',
        marginLeft: -12
    },
    btnBack: {
        width: 7,
        height: 14
    },
    card: {
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 10,
        overflow: 'hidden',
        // backgroundColor: '#1F2227',
        // alignItems: 'center'
    },
    image: {
        // width: screenWidth / 2.34,
        height: screenWidth / 1.53,
        width: '100%',
        borderRadius: 10,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        // backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        // backgroundColor: 'red',
        height: screenWidth / 4.59,
        // backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    name: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 21,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#f8f1e6',
    },
    distance: {
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
        fontSize: 9,
        marginTop: 5,
    },
})

export default ListBlockedUsers;