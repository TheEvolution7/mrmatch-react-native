import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, PanResponder, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function ProfileMember() {
    const navigation = useNavigation();
    const profile = [
        {
            id: 1,
            icon: require('../../assets/images/gender.png'),
            title: 'Woman (she/her/hers)'
        },
        {
            id: 2,
            icon: require('../../assets/images/ruler.png'),
            title: '173 cm, 62 kg'
        },
        {
            id: 3,
            icon: require('../../assets/images/Work.png'),
            title: 'Model at Creative Minds Agency'
        },
        {
            id: 4,
            icon: require('../../assets/images/education.png'),
            title: 'University of Arts and Design'
        },
        {
            id: 5,
            icon: require('../../assets/images/Home.png'),
            title: 'Live in New York City'
        },
        {
            id: 6,
            icon: require('../../assets/images/Location.png'),
            title: '5 kilometer away'
        },
    ]
    const interests = [
        { title: 'Travel ✈️', emoji: '✈️' },
        { title: 'Yoga 🧘', emoji: '🧘' },
        { title: 'Gaming 🎮', emoji: '🎮' },
        { title: 'Movies 🎥', emoji: '🎬' },
        { title: 'Music 🎵', emoji: '🎵' },
        { title: 'Art 🎨', emoji: '🎨' },
    ];

    const language = [
        { title: 'English 🇺🇸' },
        { title: 'Japanese 🇯🇵' },
        { title: 'Korean 🇰🇷' },
        { title: 'Vietnamese 🇻🇳' },
    ]

    const information = [
        {
            title: 'English 🇺🇸'
        },
        {
            title: 'Korean 🇰🇷'
        },
        {
            title: 'Japanese 🇯🇵'
        },
        {
            title: 'Christianity'
        },
        {
            title: 'Libra'
        },
        {
            title: 'Bachelors'
        },
        {
            title: 'Not Sure Yet'
        },
        {
            title: 'Vaccinated'
        },
        {
            title: 'ENFP'
        },
        {
            title: 'Storyteller'
        },
        {
            title: 'Hopeless Romantic '
        },
    ]

    const lifeStyle = [
        {
            icon: '',
            title: 'Dog'
        },
        {
            icon: '',
            title: 'Non-Drinker'
        },
        {
            icon: '',
            title: 'Non-smoker'
        },
        {
            icon: '',
            title: 'Sometimes'
        },
        {
            icon: '',
            title: 'Pescatarian'
        },
        {
            icon: '',
            title: 'Active on All'
        },
        {
            icon: '',
            title: 'Early Bird'
        },
    ]

    const musicList = [
        {
            title: 'Pop 🎵'
        },
        {
            title: 'Jazz 🎷'
        },
        {
            title: 'Classical 🎻'
        },
    ]

    const movieList = [
        {
            title: 'Drama 🎭'
        },
        {
            title: 'Romance 💕'
        },
        {
            title: 'Horror 🧟‍♂️'
        },
        {
            title: 'Musical 🎵'
        },
        {
            title: 'K-Drama 🇰🇷🎭'
        },
    ]
    const bookList = [
        {
            title: 'Romance 💖'
        },
        {
            title: 'Classic Literature 📜'
        },
        {
            title: 'Paranormal 👻'
        },
        {
            title: 'Travel ✈️'
        },
        {
            title: 'Drama 🎭'
        },
    ]

    const TravelList = [
        {
            title: 'City Breaks 🌆'
        },
        {
            title: 'Cultural Exploration 🏛️'
        },
        {
            title: 'Beach Vacations 🏖️'
        },
        {
            title: 'Food Tourism 🍔'
        },
        {
            title: 'Staycations 🏡'
        },
    ]
    return (
        <Container style={{ backgroundColor: '#131B22', flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/btnBack.png')}
                        style={styles.btnBack}>
                    </Image>
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Jessica’s Profile</Text>
                <Image
                    source={require('../../assets/images/shield.png')} />
            </View>
            <ScrollView style={{ flex: 1 }}>
                <Image resizeMode='cover' source={require('../../assets/images/profileMember.png')} style={styles.profileImage} />
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                        <Text style={styles.txt1}>Jessica (24)</Text>
                        <Image source={require('../../assets/images/verifyIc_30.png')} />
                    </View>
                    <View style={styles.wrapVerify}>
                        <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={styles.wrapVerify}>
                            <Image source={require('../../assets/images/verify_ic.png')} />
                            <Text style={styles.txt2}>Profile Verified</Text>
                        </LinearGradient>
                    </View>
                    {profile.map((item, index) => {
                        return (
                            <View key={index} style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Image source={item?.icon} />
                                <Text style={styles.txt3}>{item?.title}</Text>
                            </View>
                        )
                    })}
                    <View style={styles.device} />
                    <Text style={styles.aboutMe}>About Me</Text>
                    <Text style={styles.txt4}>Living life one pose at a time. As a model, I've learned to embrace beauty in all its forms. When I'm not on the runway, I'm exploring new places and creating art with my own unique style.</Text>
                    <View style={styles.device} />
                    <Text style={styles.aboutMe}>Interests & Hobbies</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                        {interests.map((item) => {
                            return (
                                <View style={styles.wrapTxt}>
                                    <Text style={styles.txt4}>
                                        {item.title}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.device} />
                    <Text style={styles.aboutMe}>Social Media</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Image source={require('../../assets/images/face.png')} style={{ marginHorizontal: 'auto' }} />
                        <Image source={require('../../assets/images/insta.png')} style={{ marginHorizontal: 'auto' }} />
                        <Image source={require('../../assets/images/tiktok.png')} style={{ marginHorizontal: 'auto' }} />
                        <Image source={require('../../assets/images/tw.png')} style={{ marginHorizontal: 'auto' }} />
                        <Image source={require('../../assets/images/in.png')} style={{ marginHorizontal: 'auto' }} />
                    </View>
                    <View style={styles.device} />
                    <Text style={styles.aboutMe}>Languages I Know</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                        {language.map((item) => {
                            return (
                                <View style={styles.wrapTxt}>
                                    <Text style={styles.txt4}>
                                        {item.title}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.device} />
                    <Text style={styles.aboutMe}>Relationship Goals</Text>
                    <View style={styles.wrapFriendShip}>
                        <Image source={require('../../assets/images/friendShipIc.png')} />
                        <Text style={[styles.txt3, { color: '#fff', marginTop: 16 }]}>Friendship</Text>
                    </View>
                    <View style={styles.device} />
                    <Text style={styles.aboutMe}>My Anthem</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={[styles.txt5, { marginTop: 8 }]}>Shape of You</Text>
                            <View style={{ flexDirection: 'row', marginTop: 18, alignItems: 'center' }}>
                                <Image source={require('../../assets/images/spotify.png')} />
                                <Text style={[styles.txt4, { marginLeft: 8 }]}>Ed Sheeran</Text>
                            </View>
                        </View>
                        <Image source={require('../../assets/images/media.png')} />
                    </View>
                    <View style={styles.device} />
                    <Text style={styles.aboutMe}>Basics Information</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                        {information.map((item) => {
                            return (
                                <View style={styles.wrapTxt}>
                                    <Text style={styles.txt4}>
                                        {item.title}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.device} />
                    <Text style={styles.aboutMe}>Lifestyle</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                        {lifeStyle.map((item) => {
                            return (
                                <View style={styles.wrapTxt}>
                                    <Text style={styles.txt4}>
                                        {item.title}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.device} />
                    <Text style={styles.aboutMe}>Music Preferences</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                        {musicList.map((item) => {
                            return (
                                <View style={styles.wrapTxt}>
                                    <Text style={styles.txt4}>
                                        {item.title}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.device} />
                    <Text style={styles.aboutMe}>Movies Preferences</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                        {movieList.map((item) => {
                            return (
                                <View style={styles.wrapTxt}>
                                    <Text style={styles.txt4}>
                                        {item.title}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.device} />
                    <Text style={styles.aboutMe}>Book Preferences</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                        {bookList.map((item) => {
                            return (
                                <View style={styles.wrapTxt}>
                                    <Text style={styles.txt4}>
                                        {item.title}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.device} />
                    <Text style={styles.aboutMe}>Travel Preferences</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                        {TravelList.map((item) => {
                            return (
                                <View style={styles.wrapTxt}>
                                    <Text style={styles.txt4}>
                                        {item.title}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        // height: 20,
        marginTop: 20,
        paddingHorizontal: 20
    },
    btnBack: {
        height: 14,
        width: 7,
    },
    txtHeader: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    profileImage: {
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 20
    },
    verifyIc: {
        height: 30,
        width: 30,
        marginLeft: 18
    },
    txt1: {
        fontSize: 24,
        lineHeight: 38,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#bb9a65',
    },
    txt2: {
        fontSize: 12,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        marginLeft: 14
    },
    txt3: {
        fontSize: 16,
        letterSpacing: 0,
        lineHeight: 26,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        marginLeft: 12
    },
    txt4: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
    txt5: {
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#f8f1e6',
    },
    wrapVerify: {
        borderRadius: 30,
        width: 148,
        height: 39,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    device: {
        height: 2,
        width: '120%',
        marginLeft: -20,
        opacity: 0.5,
        backgroundColor: 'rgba(107, 113, 118, 1)',
        marginTop: 30
    },
    aboutMe: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#bb9a65',
        marginTop: 24
    },
    wrapTxt: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#bb9a65',
        borderRadius: 30,
        marginLeft: 8,
        marginTop: 10
    },
    wrapFriendShip: {
        borderRadius: 16,
        backgroundColor: 'rgba(187, 154, 101, 0.1)',
        borderStyle: "solid",
        borderColor: '#bb9a65',
        borderWidth: 1.5,
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 19,
        paddingTop: 28
    }
})
