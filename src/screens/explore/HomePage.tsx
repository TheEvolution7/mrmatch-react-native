import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Modal, TouchableOpacity, ScrollView, ImageBackground, FlatList, Share } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
const screenWidth = Dimensions.get('window').width;

import Explore from './Explore';
import { BlurView } from '@react-native-community/blur';
import Slider from '@react-native-community/slider';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import Match from '../match/Match';
import ModalSafety from '../../components/ModalSafety';
import ModalBlock from '../../components/ModalBlock';
import ListChat from '../chats/ListChat';

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
    const [isShowPrivacy, setShowPrivacy] = React.useState(false);
    const [isShowFilter, setShowFilter] = React.useState(false);
    const [isShowSafety, setShowSatety] = React.useState(false);
    const [isShowBlock, setShowBlock] = React.useState(false);
    const [isStatusBlock, setStatusBlock] = React.useState(false);
    const navigation = useNavigation();
    const scale = useSharedValue(1);
    scale.value = withRepeat(
        withSequence(
            withTiming(1.2, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
            withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })
        ),
        -1, // Infinite repeat
        true // Reverse on each iteration
    );
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });
    const showModalGotMatch = () => {
        setModalVisible(!modalVisible);
    }

    const showModalPrivacy = () => {
        setShowPrivacy(!isShowPrivacy);
    }

    const showModalFilter = () => {
        setShowFilter(!isShowFilter);
    }

    const showModalBlock = (value) => {
        setShowBlock(value);
    }
    const [distance, setDistance] = React.useState(200);
    const [ageRange, setAgeRange] = React.useState([18, 40])

    const handleValueChange = (values) => {
        setAgeRange(values);
    };

    const showModalSafety = () => {
        setShowSatety(!isShowSafety);
    }

    const [selectedNumber, setSelectedNumber] = React.useState(4);
    const [selectedInterests, setSelectedInterests] = React.useState([]);
    const dataMenu = [{
        id: 1,
        title: 'Commit',
        icon: require('../../assets/images/commit.png'),
    },
    {
        id: 2,
        title: 'Dating',
        icon: require('../../assets/images/dating.png'),
    },
    {
        id: 3,
        title: 'Casual',
        icon: require('../../assets/images/casual.png'),
    },
    {
        id: 4,
        title: 'FriendShip',
        icon: require('../../assets/images/friendship.png'),
    },
    {
        id: 5,
        title: 'Open to Options',
        icon: require('../../assets/images/commit.png'),
    },
    {
        id: 6,
        title: 'Networking',
        icon: require('../../assets/images/dating.png'),
    },]

    const interests = [
        'Travel ✈️', 'Cooking 🍳', 'Hiking 🏞️', 'Yoga 🧘‍♀️', 'Gaming 🎮', 'Movies 🎥',
        'Photography 📸', 'Music 🎵', 'Pets 🐱', 'Painting 🎨', 'Art 🎨', 'Fitness 💪',
        'Reading 📚', 'Dancing 💃', 'Sports 🏀', 'Board Games 🎲', 'Technology 🖥️',
        'Fashion 👗', 'Motorcycling 🏍️'
    ];

    const dataInfor = [
        { id: 1, label: 'Languages', icon: require('../../assets/images/language.png') },
        { id: 2, label: 'Religions', icon: require('../../assets/images/religion.png') },
        { id: 3, label: 'Zodiac', icon: require('../../assets/images/zodiac.png') },
        { id: 4, label: 'Education', icon: require('../../assets/images/education.png') },
        { id: 5, label: 'Family Plans', icon: require('../../assets/images/baby.png') },
        { id: 6, label: 'COVID Vaccine', icon: require('../../assets/images/vaccine.png') },
        { id: 7, label: 'Personality Type', icon: require('../../assets/images/puzzle.png') },
        { id: 8, label: 'Communication Style', icon: require('../../assets/images/communication.png') },
        { id: 9, label: 'Love Style', icon: require('../../assets/images/love.png') },
        { id: 10, label: 'Blood Type', icon: require('../../assets/images/blood.png') },
    ];

    const dataLifeStyle = [
        { id: 1, label: 'Pets', icon: require('../../assets/images/pet.png') },
        { id: 2, label: 'Drinking Habits', icon: require('../../assets/images/drinking.png') },
        { id: 3, label: 'Smoking Habits', icon: require('../../assets/images/smoking.png') },
        { id: 4, label: 'Workout', icon: require('../../assets/images/workout.png') },
        { id: 5, label: 'Dietary Preferences', icon: require('../../assets/images/hambuger.png') },
        { id: 6, label: 'Social Media Presence', icon: require('../../assets/images/socail.png') },
        { id: 7, label: 'Sleeping Habits', icon: require('../../assets/images/sleeping.png') },
    ]
    const toggleInterest = (interest) => {
        setSelectedInterests((prevSelected) =>
            prevSelected.includes(interest)
                ? prevSelected.filter((i) => i !== interest)
                : prevSelected.length < 5 ? [...prevSelected, interest] : prevSelected
        );
    };


    const renderItemRelationShip = ({ item }) => (
        <TouchableOpacity style={[styles.itemMenu, { marginLeft: item?.id % 2 == 0 ? 16 : 0 }]}>
            <Image source={item?.icon} width={42} height={42} />
            <Text style={styles.itemTxt}>{item.title}</Text>
        </TouchableOpacity>
    );

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
                                <Text style={styles.letChat}>Let’s Chat</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { showModalGotMatch(); }} style={{ height: 56, borderRadius: 30, width: '100%', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#D7C09C', marginTop: 16 }}>
                            <Text style={styles.letChat}>Maybe Later</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isShowBlock}
                onRequestClose={() => {
                }}>
                <BlurView
                    style={styles.absolute}
                    blurAmount={1}
                    reducedTransparencyFallbackColor="white"
                />
                <View style={styles.centeredView}>
                    <ModalBlock showModalBlock={showModalBlock} />
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isShowSafety}
                onRequestClose={() => {
                }}>
                <BlurView
                    style={styles.absolute}
                    blurAmount={0.1}
                />
                <View style={styles.centeredViewSafety}>
                    <View style={styles.modalViewSafety}>
                        <ModalSafety showModalSafety={showModalSafety} showModalBlock={showModalBlock} setShowSatety={setShowSatety} />
                    </View>
                </View>
            </Modal>



            <Modal
                animationType="slide"
                transparent={true}
                visible={isShowPrivacy}
                onRequestClose={() => {
                }}>
                <BlurView
                    style={styles.absolute}
                    // blurType="light"
                    blurAmount={0.1}
                // reducedTransparencyFallbackColor="white"
                />
                <View style={[styles.centeredView, { paddingHorizontal: 0, paddingTop: 80 }]}>
                    <View style={[styles.modalView, { borderWidth: 0, backgroundColor: '#1c252d', paddingHorizontal: 0, alignItems: 'flex-start' }]}>
                        <View style={styles.wrapHeader}>
                            <TouchableOpacity hitSlop={30} onPress={() => setShowPrivacy(false)}>
                                <Image
                                    source={require('../../assets/images/closeIc.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.txtHeader}>Privacy & Discovery</Text>
                        </View>
                        <View style={styles.device}>
                        </View>
                        <ScrollView style={{ flex: 1, paddingHorizontal: 20, width: '100%' }}>
                            <Text style={styles.txt1}>Who You See</Text>
                            <View style={styles.wrapBasic}>
                                <Text style={styles.txt2}>Basic Recommendation</Text>
                                <Text style={styles.txt3}>See the most revelant people to you</Text>
                            </View>

                            <View style={[styles.wrapBasic, styles.wrapExt]}>
                                <Text style={styles.txt2}>Recently Active</Text>
                                <Text style={styles.txt3}>See the most recently active first</Text>
                                <TouchableOpacity style={styles.riverBtn}>
                                    <LinearGradient locations={[0, 1]} colors={['rgba(75, 125, 255, 1)', 'rgba(22, 48, 115, 1)']} useAngle={true} angle={101.24} style={{ flex: 1, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={styles.riverTxt}>River</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.device} />
                            <Text style={styles.txt1}>Your Visibility</Text>
                            <View style={styles.wrapBasic}>
                                <Text style={styles.txt2}>Standard</Text>
                                <Text style={styles.txt3}>You will be discoverable in the card stack</Text>
                            </View>
                            <View style={[styles.wrapBasic, styles.wrapExt]}>
                                <Text style={styles.txt2}>Hidden</Text>
                                <Text style={styles.txt3}>Your profile will be hidden. Explore is disabled</Text>
                            </View>
                            <View style={[styles.wrapBasic, styles.wrapExt]}>
                                <Text style={styles.txt2}>Igconito Mode</Text>
                                <Text style={styles.txt3}>You will be seen only by people you Like</Text>
                                <TouchableOpacity style={styles.riverBtn}>
                                    <LinearGradient locations={[0, 1]} colors={['rgba(75, 125, 255, 1)', 'rgba(22, 48, 115, 1)']} useAngle={true} angle={101.24} style={{ flex: 1, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={styles.riverTxt}>River</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.device} />
                            <View style={styles.wrapTravel}>
                                <Text style={styles.txt1}>Travel Mode</Text>
                                <Text style={styles.txt3}>Change your location to find datify members in other cities.</Text>
                                <TouchableOpacity onPress={() => {
                                    setShowPrivacy(false);
                                    navigation.navigate('TravelMode');
                                }} style={[styles.riverBtn, { top: 27, right: 0 }]}>
                                    <LinearGradient locations={[0, 1]} colors={['rgba(75, 125, 255, 1)', 'rgba(22, 48, 115, 1)']} useAngle={true} angle={101.24} style={{ flex: 1, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={styles.riverTxt}>River</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.device} />
                            <View style={styles.wrapTravel}>
                                <Text style={styles.txt1}>Global Mode</Text>
                                <Text style={styles.txt3}>Going global will allow you to see people from all over the world.</Text>
                                <TouchableOpacity style={[styles.riverBtn, { top: 27, right: 14, width: 52 }]}>
                                    <Image
                                        source={require('../../assets/images/sliderOff.png')}
                                    >
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.device} />
                            <View style={styles.wrapTravel}>
                                <Text style={styles.txt1}>Who Message You</Text>
                                <View style={[styles.wrapVerify]}>
                                    <Text style={styles.txt4}>Verified Message</Text>
                                    <Image
                                        source={require('../../assets/images/verifyIc.png')}
                                    >
                                    </Image>
                                    <TouchableOpacity style={[styles.riverBtn, { top: 13, right: 0, width: 52 }]}>
                                        <Image
                                            source={require('../../assets/images/sliderOn.png')}
                                        >
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.txt3}>Only Verified Profile can enabled this to only receive messages from other Verified Profile</Text>
                            </View>
                            <View style={styles.device} />
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <Text style={styles.txt1}>Distance Range</Text>
                                <Text style={styles.txt5}>{distance}</Text>
                            </View>
                            <Slider
                                style={styles.slider}
                                minimumValue={0}
                                maximumValue={500}
                                minimumTrackTintColor="#D4B07A" // Gold-like color for the track
                                maximumTrackTintColor="#FFFFFF" // White color for the track
                                // thumbTintColor="#FFFFFF" // White color for the thumb
                                value={distance}
                                onValueChange={(value) => setDistance(Math.floor(value))} // Update the distance value
                                thumbImage={require('../../assets/images/thumtintIc.png')}
                            />
                            <View style={styles.device} />
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <Text style={styles.txt1}>Age Range</Text>
                                <Text style={styles.txt5}>{ageRange[0]} - {ageRange[1]}</Text>
                            </View>
                            <MultiSlider
                                values={ageRange}
                                sliderLength={screenWidth - 40}
                                onValuesChange={handleValueChange}
                                min={0}
                                max={100}
                                step={1}
                                allowOverlap={false}
                                snapped
                                selectedStyle={{ backgroundColor: '#BB9A65', height: 4 }} // Gold-like color for the selected track
                                unselectedStyle={{ backgroundColor: '#FFFFFF', height: 4 }} // White color for the unselected track
                                markerStyle={{ backgroundColor: '#FFFFFF', borderWidth: 4, borderColor: '#BB9A65' }} // Customize marker (thumb)
                            />
                            <View style={styles.device} />
                            <Text style={styles.txt1}>Minimum Number of Photos</Text>
                            <View style={styles.wrapNumPhoto}>
                                {[1, 2, 3, 4, 5, 6].map((item) => {
                                    const isSelected = item === selectedNumber;
                                    return (
                                        <TouchableOpacity
                                            key={item}
                                            style={[
                                                styles.circle,
                                                isSelected ? styles.selectedCircle : styles.unselectedCircle,
                                            ]}
                                            onPress={() => setSelectedNumber(item)}
                                        >
                                            {isSelected ?
                                                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.circle}>
                                                    <Text
                                                        style={[
                                                            styles.number,
                                                            isSelected ? styles.selectedNumber : styles.unselectedNumber,
                                                        ]}
                                                    >
                                                        {item}
                                                    </Text>
                                                </LinearGradient>
                                                :
                                                <Text
                                                    style={[
                                                        styles.number,
                                                        isSelected ? styles.selectedNumber : styles.unselectedNumber,
                                                    ]}
                                                >
                                                    {item}
                                                </Text>
                                            }


                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                            <View style={styles.device} />
                            <Text style={styles.txt1}>Show Me</Text>
                            <View style={styles.wrapGender}>
                                <TouchableOpacity style={{ flex: 1, borderRadius: 30, borderWidth: 1, borderColor: 'rgba(44, 56, 67, 1)', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.number}>Men</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 1, marginLeft: 8 }}>
                                    <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', height: 44 }}>
                                        <Text style={styles.number}>Women</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.device} />
                            <View style={styles.wrapGender}>
                                <Text style={[styles.txt1, { marginTop: 0, flex: 1 }]}>Has a Bio</Text>
                                <Image
                                    source={require('../../assets/images/sliderOn.png')}
                                >
                                </Image>
                            </View>
                            <View style={styles.device} />
                            <Text style={[styles.txt1]}>Relationship Goals</Text>
                            <FlatList
                                data={dataMenu}
                                renderItem={renderItemRelationShip}
                                keyExtractor={item => item.id}
                                numColumns={2} // Display 2 items per row
                                columnWrapperStyle={styles.rowMenu} // Style for the row
                            />
                            <View style={styles.device} />
                            <View style={styles.wrapGender}>
                                <Text style={[styles.txt1, { marginTop: 0, flex: 1 }]}>Interests & Hobbies</Text>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[styles.txt6, { marginRight: 8 }]}>See less</Text>
                                    <Image
                                        source={require('../../assets/images/less.png')}
                                    >
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.scrollViewContent}>
                                {interests.map((interest, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[
                                            styles.interestItem,
                                            selectedInterests.includes(interest) && styles.selectedInterest
                                        ]}
                                        onPress={() => toggleInterest(interest)}
                                    >
                                        <Text style={styles.interestText}>{interest}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={styles.device} />
                            <Text style={[styles.txt1]}>Basics Information</Text>
                            {dataInfor.map((item, index) => (
                                <TouchableOpacity key={index} style={styles.item}>
                                    <View style={styles.iconContainer}>
                                        <Image source={item?.icon} />
                                    </View>
                                    <Text style={styles.label}>{item.label}</Text>
                                    <Text style={styles.select}>Select</Text>
                                    <Image source={require('../../assets/images/ArrowRight.png')} />
                                </TouchableOpacity>
                            ))}
                            <View style={styles.device} />
                            <Text style={[styles.txt1]}>Lifestyle</Text>
                            {dataLifeStyle.map((item) => (
                                <TouchableOpacity key={item.id} style={styles.item}>
                                    <View style={styles.iconContainer}>
                                        <Image source={item?.icon} />
                                    </View>
                                    <Text style={styles.label}>{item.label}</Text>
                                    <Text style={styles.select}>Select</Text>
                                    <Image source={require('../../assets/images/ArrowRight.png')} />
                                </TouchableOpacity>
                            ))}
                            <View style={styles.device} />
                        </ScrollView>
                        <View style={[styles.wrapGender, { paddingHorizontal: 20 }]}>
                            <TouchableOpacity style={{ flex: 1, borderRadius: 30, borderWidth: 1, borderColor: '#d7c09c', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.number, { color: '#d7c09c' }]}>Reset</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, marginLeft: 8 }}>
                                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', height: 56 }}>
                                    <Text style={styles.number}>Apply</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


            <Modal
                animationType="slide"
                transparent={true}
                visible={isShowFilter}
                onRequestClose={() => {
                }}>
                <BlurView
                    style={styles.absolute}
                    // blurType="light"
                    blurAmount={0.1}
                // reducedTransparencyFallbackColor="white"
                />
                <View style={[styles.centeredView, { paddingHorizontal: 0, paddingTop: 80 }]}>
                    <View style={[styles.modalView, { borderWidth: 0, backgroundColor: '#1c252d', paddingHorizontal: 0, alignItems: 'flex-start' }]}>
                        <View style={styles.wrapHeader}>
                            <TouchableOpacity hitSlop={30} onPress={() => setShowFilter(false)}>
                                <Image
                                    source={require('../../assets/images/closeIc.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.txtHeader}>Filter & Show</Text>
                        </View>
                        <View style={styles.device} />
                        <ScrollView style={{flex:1, paddingHorizontal:20}}>
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <Text style={styles.txt1}>Distance Range</Text>
                                <Text style={styles.txt5}>{distance}</Text>
                            </View>
                            <Slider
                                style={styles.slider}
                                minimumValue={0}
                                maximumValue={500}
                                minimumTrackTintColor="#D4B07A" // Gold-like color for the track
                                maximumTrackTintColor="#FFFFFF" // White color for the track
                                // thumbTintColor="#FFFFFF" // White color for the thumb
                                value={distance}
                                onValueChange={(value) => setDistance(Math.floor(value))} // Update the distance value
                                thumbImage={require('../../assets/images/thumtintIc.png')}
                            />
                            <View style={styles.device} />
                            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                <Text style={styles.txt1}>Age Range</Text>
                                <Text style={styles.txt5}>{ageRange[0]} - {ageRange[1]}</Text>
                            </View>
                            <MultiSlider
                                values={ageRange}
                                sliderLength={screenWidth - 40}
                                onValuesChange={handleValueChange}
                                min={0}
                                max={100}
                                step={1}
                                allowOverlap={false}
                                snapped
                                selectedStyle={{ backgroundColor: '#BB9A65', height: 4 }} // Gold-like color for the selected track
                                unselectedStyle={{ backgroundColor: '#FFFFFF', height: 4 }} // White color for the unselected track
                                markerStyle={{ backgroundColor: '#FFFFFF', borderWidth: 4, borderColor: '#BB9A65' }} // Customize marker (thumb)
                            />
                            <View style={styles.device} />
                            <Text style={styles.txt1}>Minimum Number of Photos</Text>
                            <View style={styles.wrapNumPhoto}>
                                {[1, 2, 3, 4, 5, 6].map((item) => {
                                    const isSelected = item === selectedNumber;
                                    return (
                                        <TouchableOpacity
                                            key={item}
                                            style={[
                                                styles.circle,
                                                isSelected ? styles.selectedCircle : styles.unselectedCircle,
                                            ]}
                                            onPress={() => setSelectedNumber(item)}
                                        >
                                            {isSelected ?
                                                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.circle}>
                                                    <Text
                                                        style={[
                                                            styles.number,
                                                            isSelected ? styles.selectedNumber : styles.unselectedNumber,
                                                        ]}
                                                    >
                                                        {item}
                                                    </Text>
                                                </LinearGradient>
                                                :
                                                <Text
                                                    style={[
                                                        styles.number,
                                                        isSelected ? styles.selectedNumber : styles.unselectedNumber,
                                                    ]}
                                                >
                                                    {item}
                                                </Text>
                                            }


                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                            <View style={styles.device} />
                            <Text style={styles.txt1}>Show Me</Text>
                            <View style={styles.wrapGender}>
                                <TouchableOpacity style={{ flex: 1, borderRadius: 30, borderWidth: 1, borderColor: 'rgba(44, 56, 67, 1)', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.number}>Men</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 1, marginLeft: 8 }}>
                                    <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', height: 44 }}>
                                        <Text style={styles.number}>Women</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.device} />
                            <View style={styles.wrapGender}>
                                <Text style={[styles.txt1, { marginTop: 0, flex: 1 }]}>Has a Bio</Text>
                                <Image
                                    source={require('../../assets/images/sliderOn.png')}
                                >
                                </Image>
                            </View>
                            <View style={styles.device} />
                        </ScrollView>
                    </View>
                </View>
            </Modal>

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
                        <Explore showModalGotMatch={showModalGotMatch} showModalPrivacy={showModalPrivacy} showModalSafety={showModalSafety} />
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
                                                source={require('../../assets/images/matchIna.png')}
                                                width={24} height={24}>
                                            </Image>}
                                        {focused && <Text style={styles.txtTabBar}>Match</Text>}

                                    </View>
                                    {focused && <View style={{ height: 4, width: screenWidth / 5, backgroundColor: '#BB9A65' }}></View>}
                                </View>
                            )
                        }
                    }} name="Match"
                    children={() => (
                        <Match showModalFilter={showModalFilter} />
                    )}
                // component={Match} 
                />
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ backgroundColor: '#1c252d', height: 64, marginTop: 20, width: screenWidth / 5, marginBottom: insets.bottom }}>
                                {focused && <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.0 }} colors={['rgba(187, 154, 101, 0)', 'rgba(187, 154, 101, 1)']} style={{ height: 60, width: screenWidth / 5, opacity: 0.2 }}>
                                </LinearGradient>}

                                <View style={{ position: 'absolute', left: 0, bottom: 0, alignItems: 'center', height: 64, width: '100%', justifyContent: 'center', borderTopLeftRadius: 20 }}>
                                    {focused ?
                                        <Image
                                            source={require('../../assets/images/chatAct.png')}
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
                }} name="Chats" component={ListChat} />
                <Tab.Screen options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ backgroundColor: '#1c252d', height: 64, marginTop: 20, width: screenWidth / 5, marginBottom: insets.bottom }}>
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
        paddingHorizontal: 20,
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
        height: '100%',
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
    },
    wrapHeader: {
        flexDirection: 'row',
        width: '100%',
        height: 32,
        alignItems: 'center',
        marginTop: 26,
        paddingHorizontal: 20
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
    device: {
        height: 1,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 24,
        marginLeft: -20
    },
    txt1: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#bb9a65',
        marginTop: 27
    },
    wrapBasic: {
        borderRadius: 16,
        backgroundColor: 'rgba(187, 154, 101, 0.1)',
        borderStyle: "solid",
        borderColor: '#bb9a65',
        borderWidth: 1.5,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 18,
        marginTop: 20
    },
    txt2: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
    },
    txt3: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        opacity: 0.5,
        marginTop: 10
    },
    wrapExt: {
        marginTop: 20,
        backgroundColor: 'transparent',
        borderColor: 'rgba(44, 56, 67, 1)'
    },
    riverBtn: {
        position: 'absolute',
        top: 14,
        right: 14,
        borderRadius: 14,
        width: 68,
        height: 34
    },
    riverTxt: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 22,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#f8f1e6',
    },
    wrapTravel: {

    },
    txt4: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
    },
    wrapVerify: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    slider: {
        width: '100%',
        height: 40,
    },
    txt5: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        marginTop: 27,
        flex: 1,
        textAlign: 'right'
    },
    txt6: {
        fontSize: 18,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: 'center'
    },
    wrapNumPhoto: {
        flexDirection: 'row',
        marginTop: 22
    },
    circle: {
        width: 50,
        height: 44,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 'auto',
    },
    selectedCircle: {
        backgroundColor: '#D4B07A', // Gold background for selected item
    },
    unselectedCircle: {
        borderWidth: 2,
        borderColor: '#3E444D', // Dark gray border for unselected items
    },
    number: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
    selectedNumber: {
        color: '#FFFFFF', // White text color for selected number
    },
    unselectedNumber: {
        color: '#FFFFFF', // White text color for unselected numbers
    },
    wrapGender: {
        flexDirection: 'row',
        marginTop: 22
    },
    rowMenu: {
        marginTop: 24
    },
    itemMenu: {
        flex: 1,
        height: 121,
        borderRadius: 16,
        backgroundColor: 'rgba(44, 56, 67, 0.2)',
        borderStyle: "solid",
        borderColor: '#2c3843',
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemTxt: {
        fontSize: 16,
        letterSpacing: 0,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#fff',
        marginTop: 12
    },
    txt6: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
    interestItem: {
        // backgroundColor: '#333',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
        marginHorizontal: 5,
        borderStyle: "solid",
        borderColor: '#2c3843',
        borderWidth: 1.5,
    },
    selectedInterest: {
        backgroundColor: '#BB9A65',
    },
    interestText: {
        color: '#f8f1e6',
        fontSize: 16,
    },
    scrollViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 18
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
    },
    iconContainer: {
        width: 40,
    },
    label: {
        flex: 1,
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#f8f1e6',
    },
    select: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        marginRight: 10,
        opacity: 0.5
    },
    modalViewSafety: {
        width: '100%',
        backgroundColor: '#1c252d',
        position: 'absolute',
        bottom: 0,
        // left:0
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    centeredViewSafety: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
