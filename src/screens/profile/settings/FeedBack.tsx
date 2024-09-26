import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import HeaderScreen from '../../../components/Header';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { BlurView } from '@react-native-community/blur';

interface StarRatingProps {
    rating: number;              // The current rating value (e.g., 3)
    maxRating?: number;          // Total number of stars, defaults to 5
    onRatingChange?: (rating: number) => void;  // Optional callback when rating is changed
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5, onRatingChange }) => {
    const filledStar = require('../../../assets/images/filled_star.png');  // Replace with actual path to filled star icon
    const outlinedStar = require('../../../assets/images/outlined_star.png'); // Replace with actual path to outlined star icon

    // Function to render stars
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= maxRating; i++) {
            stars.push(
                <TouchableOpacity key={i} onPress={() => onRatingChange && onRatingChange(i)} style={{ margin: 'auto' }}>
                    <Image
                        source={i <= rating ? filledStar : outlinedStar}
                        style={styles.star}
                    />
                </TouchableOpacity>
            );
        }
        return stars;
    };

    return <View style={styles.starContainer}>{renderStars()}</View>;
};

const FeedBack: React.FC = () => {
    const navigation = useNavigation();
    const [rating, onRatingChange] = useState(0);
    const [selectedInterests, setSelectedInterests] = React.useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const interests = [
        'Overall App', 'Accesibility', 'SafeDate', 'Diversity', 'App Performance', 'User Support', 'Transparancy'
    ];

    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    }

    const toggleInterest = (interest) => {
        setSelectedInterests((prevSelected) =>
            prevSelected.includes(interest)
                ? prevSelected.filter((i) => i !== interest)
                : prevSelected.length < 5 ? [...prevSelected, interest] : prevSelected
        );
    };

    return (
        <Container style={{}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // setModalVisible(!modalVisible);
                }}>
                <BlurView
                    style={styles.absolute}
                    // blurType="light"
                    blurAmount={1}
                    reducedTransparencyFallbackColor="white"
                />
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, { paddingHorizontal: 20 }]}>
                        <Text style={styles.titleTxt}>Report Sucessfully</Text>
                        <View style={styles.device}></View>
                        {/* <Animated.View style={animatedStyle}> */}
                        <Image
                            source={require('../../../assets/images/submitSuccess.png')}
                            style={{ width: 180, height: 186, marginTop: 23, marginBottom: 50 }}>
                        </Image>
                        {/* </Animated.View> */}

                        <Text style={styles.txt5}>Thank you for reaching out about your experience.</Text>

                        <TouchableOpacity onPress={() => {
                            setModalVisible(false);
                            navigation.goBack();
                        }} style={{ width: '100%', marginTop: 36, marginBottom: 40 }}>
                            <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ height: 56, borderRadius: 30, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.txt4, { color: '#f8f1e6' }]}>Go Back to Settings</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={{ paddingHorizontal: 20 }}>
                <HeaderScreen title='Feedback' />
            </View>
            <View style={styles.wrapView}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.txt1}>Rate Your Experience</Text>
                    <Text style={styles.txt2}>Are you Satisfied with our Apps & Features</Text>
                    <StarRating rating={rating} maxRating={5} onRatingChange={onRatingChange} />
                    <View style={styles.separator} />
                    <Text style={styles.txt1}>Tell Us What Can Be Improved?</Text>
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
                    <TextInput
                        style={styles.inputTxt}
                        placeholder="Please tell us more on how we can improve your experience"
                        placeholderTextColor="rgba(248, 241, 230, 0.2)"
                        multiline />
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 30 }}>
                    <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.btnCont}>
                        <Text style={styles.txtCon}>Submit</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    wrapView: {
        paddingHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#1c252d',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1
    },
    starContainer: {
        flexDirection: 'row',       // Align stars in a row
        justifyContent: 'center',   // Center stars in the container
    },
    star: {
        width: 50,                  // Adjust the size of the stars
        height: 47,
        // marginHorizontal: 'auto',        // Spacing between stars
        marginTop: 20,
    },
    txt1: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "#bb9a65",
        marginTop: 30
    },
    txt2: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        opacity: 0.5,
        marginTop: 11
    },
    separator: {
        marginTop: 28,
        height: 1,
        backgroundColor: '#6B7176',
        marginLeft: -20,
        marginRight: -20,
    },
    scrollViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-between',
        marginTop: 18
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
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
    inputTxt: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        borderRadius: 6,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 1,
        height: 142,
        padding: 15,
        marginTop: 22
    },
    txtCon: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
    },
    btnCont: {
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(19, 27, 34, 0.1)'
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
        // padding: 22,
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
    device: {
        height: 2,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 26,
        marginLeft: -20
    },
    txt5: {
        fontSize: 18,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: 'center'
    },
    txt4: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
    },
})

export default FeedBack;