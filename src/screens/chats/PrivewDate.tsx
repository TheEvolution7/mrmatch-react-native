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
    TextInput,
    Modal,
    Share
} from 'react-native';
import Container from '../../components/Container';
import { useNavigation } from '@react-navigation/native';
import HeaderScreen from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
const screenWidth = Dimensions.get('window').width;

export default function PreviewDate({ }) {
    const navigation = useNavigation();
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Sharing information',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            //   Alert.alert(error.message);
        }
    };
    return (
        <Container style={{ paddingHorizontal: 20 }}>
            <HeaderScreen title='Preview' />
            <ScrollView>
                <Text style={styles.txt1}>Andy & Charlotte’s Date</Text>
                <Text style={styles.txt2}>Keeping friends and family updated</Text>
                <View style={styles.separator} />
                <View style={styles.wrapInfor}>
                    <Image source={require('../../assets/images/avatarFind.png')} style={{ width: 73, height: 73 }} />
                    <Text style={styles.txt3}>Charlotte</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt4}>View profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.separator} />
                <View style={styles.wrapInfor}>
                    <Image source={require('../../assets/images/fi_location.png')} style={{ width: 73, height: 73 }} />
                    <Text style={styles.txt5}>Al Margarezzi
                        2391 Love Street,
                        Downtown Lust, CA 21395</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt4}>View on Map</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.separator} />
                <View style={styles.wrapInfor}>
                    <Image source={require('../../assets/images/fi_date.png')} style={{ width: 73, height: 73 }} />
                    <Text style={styles.txt5}>Saturday
                        12/27/2024
                        8:00PM</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt4}>Add to calendar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.separator} />
                <Text style={[styles.txt6, { color: 'rgba(248, 241, 230, 1)' }]}>Anyone with this link can view this page.</Text>
                <Text style={[styles.txt6, { color: 'rgba(133, 134, 132, 1)' }]}>You can edit or cancel your date before the link automatically expires 7 days after the date. Your date will be automatically deleted in 30 days.
                    View our Privacy Policy for more information.</Text>
                <Text style={[styles.txt6, { color: 'rgba(133, 134, 132, 1)' }]}>This features doesn’t track or monitor dates. For more safety and tracking use our SafeDate feature.</Text>
            </ScrollView>
            <View style={{ paddingHorizontal: 20, width: '100%' }}>
                <TouchableOpacity onPress={() => {onShare();}} style={{ width: '100%', marginTop: 36 }}>
                    <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ height: 56, borderRadius: 30, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.letChat}>Share Date Details</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('HomePage')
                    // setShowBlock(false);
                }} style={{ height: 56, borderRadius: 30, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2c3843', marginTop: 16 }}>
                    <Text style={styles.letChat}>Cancel Date</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    letChat: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
    },
    txt6: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
    },
    txt5: {
        fontSize: 14,
        lineHeight: 20,
        color: "#f8f1e6",
        flex: 1,
        marginLeft: 14,
    },
    txt3: {
        fontSize: 20,
        letterSpacing: 0,
        fontWeight: "700",
        fontFamily: "Inter-Bold",
        color: "#f8f1e6",
        marginLeft: 14,
        flex: 1
    },
    txt4: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#bb9a65",
        marginLeft: 40
    },
    wrapInfor: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    txt1: {
        fontSize: 24,
        lineHeight: 38,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: 'rgba(187, 154, 102, 1)',
        marginTop: 18
    },
    txt2: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        opacity: 0.5,
        marginTop: 9
    },
    separator: {
        marginTop: 28,
        marginBottom: 28,
        height: 1,
        backgroundColor: '#6B7176',
        marginLeft: -20,
        marginRight: -20,
    },
})