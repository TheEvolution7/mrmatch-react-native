import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
const screenWidth = Dimensions.get('window').width;

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
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                headerShown: false,
                tabBarStyle: [styles.tabBarStyle, { bottom: insets.bottom }],
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
                            <View style={{ backgroundColor: '#1c252d', height: 64, marginTop: 20, width: screenWidth / 5, borderTopLeftRadius: 20 }}>
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
                name="Explore" component={ExploreScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ backgroundColor: '#1c252d', height: 64, marginTop: 20, width: screenWidth / 5 }}>
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
                        <View style={{ backgroundColor: '#1c252d', height: 64, marginTop: 20, width: screenWidth / 5 }}>
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
                    return (
                        <View style={{ backgroundColor: '#1c252d', height: 64, marginTop: 20, width: screenWidth / 5 }}>
                            {focused && <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.0 }} colors={['rgba(187, 154, 101, 0)', 'rgba(187, 154, 101, 1)']} style={{ height: 60, width: screenWidth / 5, opacity: 0.2 }}>
                            </LinearGradient>}

                            <View style={{ position: 'absolute', left: 0, bottom: 0, alignItems: 'center', height: 64, width: '100%', justifyContent: 'center', borderTopLeftRadius: 20 }}>
                                {focused ?
                                    <Image
                                        source={require('../../assets/images/shieldInact.png')}
                                        width={24} height={24}>
                                    </Image>
                                    :
                                    <Image
                                        source={require('../../assets/images/shieldInact.png')}
                                        width={24} height={24}>
                                    </Image>}
                                {focused && <Text style={styles.txtTabBar}>SafeDate</Text>}

                            </View>
                            {focused && <View style={{ height: 4, width: screenWidth / 5, backgroundColor: '#BB9A65' }}></View>}
                        </View>
                    )
                }
            }} name="SafeDate" component={SecurityScreen} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ backgroundColor: '#1c252d', height: 64, marginTop: 20, width: screenWidth / 5, borderTopRightRadius: 20 }}>
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
        height: 64,
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
    }
});
