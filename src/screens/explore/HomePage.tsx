import React, { useState, useContext, createContext } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Modal, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
const screenWidth = Dimensions.get('window').width;

import Explore from './Explore';
import { BlurView } from '@react-native-community/blur';
import SafeDateTutorial from '../SafeDate/SafeDateTutorial';

function ExploreScreen() {
    return (
        <View style={styles.container}>
            <Text>Explore Screen</Text>
        </View>
    );
}

function DiscoverScreen() {
    return (
        <View style={styles.container}>
            <Text>Discover Screen</Text>
        </View>
    );
}

function ChatScreen() {
    return (
        <View style={styles.container}>
            <Text>Chat Screen</Text>
        </View>
    );
}

function SecurityScreen() {
    return (
        <View style={styles.container}>
            <Text>Security Screen</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();


export default function HomePage() {
    const insets = useSafeAreaInsets();
    const [modalVisible, setModalVisible] = React.useState(false);
    const [isIconOn, setIsIconOn] = useState<boolean>(false);
    const showModalGotMatch = () => {
        setModalVisible(!modalVisible);
    }

    
   

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                }}>
                <BlurView
                    style={styles.absolute}
                    // blurType="light"
                    blurAmount={0.1}
                // reducedTransparencyFallbackColor="white"
                />
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.titleTxt}>You Got Matched!</Text>
                        <View style={styles.line}></View>
                        <Image
                            source={require('../../assets/images/matchGroup.png')}
                            style={{ width: 268, height: 197, marginTop: 23, marginBottom: 28 }}>
                        </Image>
                        <Text style={styles.txtDes}>You both liked each other.</Text>
                        <Text style={styles.txtDes}>Take charge and start a</Text>
                        <Text style={styles.txtDes}>meaningful conversation.</Text>
                        <TouchableOpacity onPress={() => { }} style={{ width: '100%', marginTop: 36 }}>
                            <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ height: 56, borderRadius: 30, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.letChat}>Create a new account</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { showModalGotMatch(); }} style={{ height: 56, borderRadius: 30, width: '100%', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#D7C09C', marginTop: 16 }}>
                            <Text style={styles.letChat}>Maybe Later</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: [styles.tabBarStyle, { height: 64 + insets.bottom }],
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIconStyle: styles.tabBarIconStyle,
                    tabBarItemStyle: styles.tabBarItemStyle,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#d3af6e', // Active color like in your image
                    tabBarInactiveTintColor: '#8e8e93', // Inactive color
                 
                  
                })}
            // tabBar={(props) => <MyTabBar {...props} />}
            >
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{ backgroundColor: '#1c252d', height: 64, marginTop: 20, width: screenWidth / 5, borderTopLeftRadius: 20, marginBottom: insets.bottom }}>
                                    {focused && <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.0 }} colors={['rgba(187, 154, 101, 0)', 'rgba(187, 154, 101, 1)']} style={{ height: 60, width: screenWidth / 5, opacity: 0.2 }}>
                                    </LinearGradient>}

                                    <View style={{ position: 'absolute', left: 0, bottom: 0, alignItems: 'center', height: 64, width: '100%', justifyContent: 'center', borderTopLeftRadius: 20 }}>
                                        {focused ?
                                            <Image
                                                source={require('../../assets/images/heartIcon.png')}
                                                width={24} height={24}>
                                            </Image>
                                            :
                                            <Image
                                                source={require('../../assets/images/heartInactive.png')}
                                                width={24} height={24}>
                                            </Image>}
                                        {focused && <Text style={styles.txtTabBar}>Explore</Text>}

                                    </View>
                                    {focused && <View style={{ height: 4, width: screenWidth / 5, backgroundColor: '#BB9A65' }}></View>}
                                </View>
                            )
                        }
                    }}
                    name="Explore"
                    children={() => (
                        <Explore showModalGotMatch={showModalGotMatch} />
                    )} />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{ backgroundColor: '#1c252d', height: 64, marginTop: 20, width: screenWidth / 5, marginBottom: insets.bottom }}>
                                    {focused && <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.0 }} colors={['rgba(187, 154, 101, 0)', 'rgba(187, 154, 101, 1)']} style={{ height: 60, width: screenWidth / 5, opacity: 0.2 }}>
                                    </LinearGradient>}

                                    <View style={{ position: 'absolute', left: 0, bottom: 0, alignItems: 'center', height: 64, width: '100%', justifyContent: 'center', borderTopLeftRadius: 20 }}>
                                        {focused ?
                                            <Image
                                                source={require('../../assets/images/matchAct.png')}
                                                width={24} height={24}>
                                            </Image>
                                            :
                                            <Image
                                                source={require('../../assets/images/matchAct.png')}
                                                width={24} height={24}>
                                            </Image>}
                                        {focused && <Text style={styles.txtTabBar}>Match</Text>}

                                    </View>
                                    {focused && <View style={{ height: 4, width: screenWidth / 5, backgroundColor: '#BB9A65' }}></View>}
                                </View>
                            )
                        }
                    }} name="Match" component={DiscoverScreen} />
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ backgroundColor: '#1c252d', height: 64, marginTop: 20, width: screenWidth / 5, marginBottom: insets.bottom }}>
                                {focused && <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.0 }} colors={['rgba(187, 154, 101, 0)', 'rgba(187, 154, 101, 1)']} style={{ height: 60, width: screenWidth / 5, opacity: 0.2 }}>
                                </LinearGradient>}

                                <View style={{ position: 'absolute', left: 0, bottom: 0, alignItems: 'center', height: 64, width: '100%', justifyContent: 'center', borderTopLeftRadius: 20 }}>
                                    {focused ?
                                        <Image
                                            source={require('../../assets/images/chatInact.png')}
                                            width={24} height={24}>
                                        </Image>
                                        :
                                        <Image
                                            source={require('../../assets/images/chatInact.png')}
                                            width={24} height={24}>
                                        </Image>}
                                    {focused && <Text style={styles.txtTabBar}>Chats</Text>}

                                </View>
                                {focused && <View style={{ height: 4, width: screenWidth / 5, backgroundColor: '#BB9A65' }}></View>}
                            </View>
                        )
                    }
                }} name="Chats" component={ChatScreen} />
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => {
                        let iconSource;
                        iconSource = isIconOn
                            ? require('../../assets/images/heartIcon.png')
                            : require('../../assets/images/heartIcon.png');
                        console.log(isIconOn)
                        return (
                            <View style={{ backgroundColor: '#1c252d', height: 64, marginTop: 20, width: screenWidth / 5, marginBottom: insets.bottom }}>
                                {focused && <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.0 }} colors={['rgba(187, 154, 101, 0)', 'rgba(187, 154, 101, 1)']} style={{ height: 60, width: screenWidth / 5, opacity: 0.2 }}>
                                </LinearGradient>}

                                <View style={{ position: 'absolute', left: 0, bottom: 0, alignItems: 'center', height: 64, width: '100%', justifyContent: 'center', borderTopLeftRadius: 20 }}>
                                    {focused ?
                                        <Image
                                            className='w-[24px] h-[24px]'
                                            resizeMode='contain'
                                            source={iconSource}
                                            width={24} height={24}>
                                        </Image>
                                        :
                                        <Image
                                            className='w-[24px] h-[24px]'
                                            resizeMode='contain'
                                            source={require('../../assets/images/shieldInact.png')}
                                            width={24} height={24}>
                                        </Image>}
                                    {focused && <Text style={styles.txtTabBar}>SafeDate</Text>}

                                </View>
                                {focused && <View style={{ height: 4, width: screenWidth / 5, backgroundColor: '#BB9A65' }}></View>}
                            </View>
                        )
                    }
                }} name="SafeDate">
                    {(props) => <SafeDateTutorial {...props} setIsIconOn={setIsIconOn} isIconOn={isIconOn} />}
                </Tab.Screen>
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ backgroundColor: '#1c252d', height: 64, marginTop: 20, width: screenWidth / 5, borderTopRightRadius: 20, marginBottom: insets.bottom }}>
                                {focused && <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.0 }} colors={['rgba(187, 154, 101, 0)', 'rgba(187, 154, 101, 1)']} style={{ height: 60, width: screenWidth / 5, opacity: 0.2 }}>
                                </LinearGradient>}

                                <View style={{ position: 'absolute', left: 0, bottom: 0, alignItems: 'center', height: 64, width: '100%', justifyContent: 'center', borderTopLeftRadius: 20 }}>
                                    {focused ?
                                        <Image
                                            source={require('../../assets/images/profileInact.png')}
                                            width={24} height={24}>
                                        </Image>
                                        :
                                        <Image
                                            source={require('../../assets/images/profileInact.png')}
                                            width={24} height={24}>
                                        </Image>}
                                    {focused && <Text style={styles.txtTabBar}>Profile</Text>}

                                </View>
                                {focused && <View style={{ height: 4, width: screenWidth / 5, backgroundColor: '#BB9A65' }}></View>}
                            </View>
                        )
                    }
                }} name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    tabBarStyle: {
        position: 'absolute',
        // left: 0,
        // right: 0,
        // elevation: 0,
        backgroundColor: '#1c1c1e', // Dark background color
        borderTopLeftRadius: 20, // Rounded corners
        borderTopRightRadius: 20,
        // height:64+ insets.bottom,
        borderTopWidth: 0, // Remove the default border
    },
    tabBarLabelStyle: {
        fontSize: 12,
        paddingBottom: 8,
    },
    tabBarIconStyle: {
        marginTop: 8,
    },
    tabBarItemStyle: {
        borderRadius: 15,
    },
    wrapTabbar: {
        height: 64,
        marginBottom: 25
    },
    lineGra: {
        flex: 1
    },
    txtTabBar: {
        fontSize: 10,
        lineHeight: 20,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(19, 27, 34, 0.4)'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        paddingHorizontal: 20
    },
    modalView: {
        margin: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 21,
        backgroundColor: '#1c252d',
        borderStyle: "solid",
        borderColor: '#bb9a65',
        borderWidth: 1,
        width: '100%',
        paddingBottom: 32
    },
    titleTxt: {
        fontSize: 21,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        marginTop: 22
    },
    line: {
        height: 2,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.14)',
        marginTop: 16,
        marginBottom: 20
    },
    txtDes: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
    },
    letChat: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
    }
});
