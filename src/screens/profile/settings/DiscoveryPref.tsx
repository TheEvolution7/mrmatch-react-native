import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import SwitchS from '../../../components/Switch';
import Slider from '@react-native-community/slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import BasicInformation from '../../explore/BasicInformation';
const screenWidth = Dimensions.get('window').width;

const DiscoveryPref: React.FC = () => {

    const navigation = useNavigation();
    const [distance, setDistance] = React.useState(200);
    const [ageRange, setAgeRange] = React.useState([18, 40])
    const [selectedNumber, setSelectedNumber] = React.useState(4);
    const [selectedInterests, setSelectedInterests] = React.useState([]);
    const handleValueChange = (values) => {
        setAgeRange(values);
    };
    const dataMenu = [{
        id: 1,
        title: 'Commit',
        icon: require('../../../assets/images/commit.png'),
    },
    {
        id: 2,
        title: 'Dating',
        icon: require('../../../assets/images/dating.png'),
    },
    {
        id: 3,
        title: 'Casual',
        icon: require('../../../assets/images/casual.png'),
    },
    {
        id: 4,
        title: 'FriendShip',
        icon: require('../../../assets/images/friendship.png'),
    },
    {
        id: 5,
        title: 'Open to Options',
        icon: require('../../../assets/images/commit.png'),
    },
    {
        id: 6,
        title: 'Networking',
        icon: require('../../../assets/images/dating.png'),
    },]
    const interests = [
        'Travel ✈️', 'Cooking 🍳', 'Hiking 🏞️', 'Yoga 🧘‍♀️', 'Gaming 🎮', 'Movies 🎥',
        'Photography 📸', 'Music 🎵', 'Pets 🐱', 'Painting 🎨', 'Art 🎨', 'Fitness 💪',
        'Reading 📚', 'Dancing 💃', 'Sports 🏀', 'Board Games 🎲', 'Technology 🖥️',
        'Fashion 👗', 'Motorcycling 🏍️'
    ];
    const dataLifeStyle = [
        { id: 1, label: 'Pets', icon: require('../../../assets/images/pet.png') },
        { id: 2, label: 'Drinking Habits', icon: require('../../../assets/images/drinking.png') },
        { id: 3, label: 'Smoking Habits', icon: require('../../../assets/images/smoking.png') },
        { id: 4, label: 'Workout', icon: require('../../../assets/images/workout.png') },
        { id: 5, label: 'Dietary Preferences', icon: require('../../../assets/images/hambuger.png') },
        { id: 6, label: 'Social Media Presence', icon: require('../../../assets/images/socail.png') },
        { id: 7, label: 'Sleeping Habits', icon: require('../../../assets/images/sleeping.png') },
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
    return (
        <Container style={{}}>
            <View style={styles.wrapHeader}>
                <TouchableOpacity style={{ padding: 10, marginLeft: -10 }} hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../../assets/images/btnBack.png')}
                        style={styles.btnBack}
                    />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Discovery Preferences</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20 }}>
                <View style={styles.wrapTravel}>
                    <Text style={[styles.txt1, { color: '#f8f1e6' }]}>Travel Mode</Text>
                    <Text style={styles.txt3}>Change your location to find datify members in other cities.</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('TravelMode');
                    }} style={[styles.riverBtn, { top: 0, right: 0 }]}>
                        <LinearGradient locations={[0, 1]} colors={['rgba(75, 125, 255, 1)', 'rgba(22, 48, 115, 1)']} useAngle={true} angle={101.24} style={{ flex: 1, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.riverTxt}>River</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.device} />
                <View style={styles.wrapTravel}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.txt1, { flex: 1, color: '#f8f1e6' }]}>Global Mode</Text>
                        <SwitchS />
                    </View>
                    <Text style={styles.txt3}>Going global will allow you to see people from all over the world.</Text>
                </View>
                <View style={styles.device} />
                <Text style={[styles.txt1, { color: '#f8f1e6', marginTop: 28 }]}>Show Distances In</Text>
                <View style={styles.wrapGender}>
                    <TouchableOpacity style={{ flex: 1, borderRadius: 30, borderWidth: 1, borderColor: 'rgba(44, 56, 67, 1)', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.number}>Miles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, marginLeft: 8 }}>
                        <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', height: 44 }}>
                            <Text style={styles.number}>Kilometers</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.device} />
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={[styles.txt1, { color: '#f8f1e6', marginTop: 28 }]}>Distance Range</Text>
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
                    thumbImage={require('../../../assets/images/thumtintIc.png')}
                />
                <View style={styles.device} />
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={[styles.txt1, { color: '#f8f1e6', marginTop: 28 }]}>Age Range</Text>
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
                <Text style={[styles.txt1, { marginTop: 28 }]}>Minimum Number of Photos</Text>
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
                <Text style={[styles.txt1, { marginTop: 28 }]}>Show Me</Text>
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
                    <SwitchS />
                </View>
                <View style={styles.device} />
                <Text style={[styles.txt1, { marginTop: 28 }]}>Relationship Goals</Text>
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
                            source={require('../../../assets/images/less.png')}
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
                <BasicInformation />
                <Text style={[styles.txt1, { marginTop: 28 }]}>Lifestyle</Text>
                {dataLifeStyle.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.item}>
                        <View style={styles.iconContainer}>
                            <Image source={item?.icon} />
                        </View>
                        <Text style={styles.label}>{item.label}</Text>
                        <Text style={styles.select}>Select</Text>
                        <Image source={require('../../../assets/images/ArrowRight.png')} />
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
        </Container>

    );
};

const styles = StyleSheet.create({
    wrapTravel: {
        marginTop: 30
    },
    txt1: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#bb9a65',
        marginTop: 0
    },
    txt3: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        opacity: 0.5,
        marginTop: 10
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
    device: {
        height: 1,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 24,
        marginLeft: -20
    },
    wrapHeader: {
        flexDirection: 'row',
        width: '100%',
        height: 32,
        alignItems: 'center',
        marginTop: 0,
        paddingHorizontal:20
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
    wrapGender: {
        flexDirection: 'row',
        marginTop: 22
    },
    number: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
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
    slider: {
        width: '100%',
        height: 40,
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
    selectedNumber: {
        color: '#FFFFFF', // White text color for selected number
    },
    unselectedNumber: {
        color: '#FFFFFF', // White text color for unselected numbers
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
    rowMenu: {
        marginTop: 24
    },
    txt6: {
        fontSize: 18,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: 'center'
    },
    scrollViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 18
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
})

export default DiscoveryPref;
