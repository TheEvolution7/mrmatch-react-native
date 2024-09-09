import React, { useCallback, useRef, useState } from 'react';
import {
    Image,
    StyleSheet,
    View,
    type ImageSourcePropType,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Dimensions,
    TextInput
} from 'react-native';
import Container from '../../components/Container';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const screenWidth = Dimensions.get('window').width;

export default function ListChat({ }) {
    const navigation = useNavigation();
    const listUser = [
        {
            id: 1,
            icon: require('../../assets/images/avatarFind.png'),
            isActive: false
        },
        {
            id: 2,
            icon: require('../../assets/images/avatarFind.png'),
            isActive: true
        },
        {
            id: 3,
            icon: require('../../assets/images/avatarFind.png'),
            isActive: false
        },
        {
            id: 4,
            icon: require('../../assets/images/avatarFind.png'),
            isActive: true
        },
        {
            id: 5,
            icon: require('../../assets/images/avatarFind.png'),
            isActive: false
        },
        {
            id: 6,
            icon: require('../../assets/images/avatarFind.png'),
            isActive: false
        },
    ]
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ChatBox')} style={styles.itemContainer}>
            <View>
                <Image source={item?.icon} style={styles.iconUser} />
                {item?.isActive && <Image source={require('../../assets/images/activeUser.png')} style={styles.activeUser} />}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.nameText}>Charlotte</Text>
                <Text style={styles.descriptionText}>Hello, how can i help you...</Text>
            </View>
            <View style={{ width: 'auto', alignItems: 'flex-end' }}>
                <Text style={styles.txt5}>09:41</Text>
                <View style={styles.wrapMess}>
                    <Text style={styles.txt4}>3</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    return (
        <Container style={styles.container}>
            <View style={styles.wrapSetting}>
                <View>
                    <Image
                        source={require('../../assets/images/heart.png')}
                        style={styles.mrMatch}>
                    </Image>
                </View>
                <View style={{ flex: 1, alignItems: 'center', marginRight: -22 }}>
                    <Text style={styles.txt1}>Chat</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => {
                    }}>
                        <Image
                            source={require('../../assets/images/searchIcon.png')} >
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginLeft: 16 }}>
                        <Image
                            source={require('../../assets/images/fi_headPhone.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.wrapActive}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 28 }}>
                    <Text style={styles.txt2}>Now Active</Text>
                    <Text style={styles.txt3}>See All</Text>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 22 }}>
                    {listUser.map((user) => {
                        return (
                            <View>
                                <Image source={user?.icon} style={styles.iconUser} />
                                {user?.isActive && <Image source={require('../../assets/images/activeUser.png')} style={styles.activeUser} />}
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={styles.device} />
            <FlatList
                data={listUser}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={{ flex: 1 }}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131B22',
        paddingHorizontal: 20
    },
    wrapSetting: {
        flexDirection: 'row',
        height: 29,
        // alignItems: 'flex-start',
        // backgroundColor: 'red'
        // flex: 1
    },
    mrMatch: {
        height: 28.3,
        width: 32,
    },
    txt1: {
        fontSize: 20,
        // lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
        textAlign: 'right',
        marginBottom: 10
    },
    wrapActive: {

    },
    txt2: {
        fontSize: 20,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: 'left',
        flex: 1
    },
    txt3: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
        textAlign: 'right'
    },
    iconUser: {
        width: 56,
        height: 56,
        borderRadius: 56,
        marginRight: 20,
    },
    activeUser: {
        position: 'absolute',
        right: 20,
        bottom: 0
    },
    device: {
        height: 2,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 24,
        marginLeft: -20
    },
    itemContainer: {
        marginTop: 16,
        flexDirection: 'row',
        flex: 1,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 56
    },
    textContainer: {
        flex: 1
    },
    nameText: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "700",
        fontFamily: "Inter-Bold",
        color: '#f8f1e6',
    },
    descriptionText: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
    txt4: {
        fontSize: 10,
        letterSpacing: 0,
        lineHeight: 16,
        fontWeight: "500",
        fontFamily: "Urbanist-Medium",
        color: '#fff'
    },
    txt5: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        opacity: 0.5
    },
    wrapMess: {
        backgroundColor: '#BB9A65',
        width: 25,
        height: 25,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }
})