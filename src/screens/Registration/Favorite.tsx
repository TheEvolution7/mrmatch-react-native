import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, PanResponder, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function Favorite() {
    const navigation = useNavigation();

    const interests = [
        'Travel ✈️', 'Cooking 🍳', 'Hiking 🏞️', 'Yoga 🧘‍♀️', 'Gaming 🎮', 'Movies 🎥',
        'Photography 📸', 'Music 🎵', 'Pets 🐱', 'Painting 🎨', 'Art 🎨', 'Fitness 💪',
        'Reading 📚', 'Dancing 💃', 'Sports 🏀', 'Board Games 🎲', 'Technology 🖥️',
        'Fashion 👗', 'Motorcycling 🏍️'
    ];
    const [selectedInterests, setSelectedInterests] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');

    const toggleInterest = (interest) => {
        setSelectedInterests((prevSelected) =>
            prevSelected.includes(interest)
                ? prevSelected.filter((i) => i !== interest)
                : prevSelected.length < 5 ? [...prevSelected, interest] : prevSelected
        );
    };


    const filteredInterests = interests.filter((interest) =>
        interest.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <Container style={{ backgroundColor: '#131B22', flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/btnBack.png')}
                        style={styles.btnBack}>
                    </Image>
                </TouchableOpacity>
                <View style={styles.wrapSl}>
                    <Image
                        source={require('../../assets/images/groupSlide_6.png')}
                        style={styles.grSlide}>
                    </Image>
                </View>
            </View>
            <View style={styles.wrapContent}>
                <Text style={styles.titleCode}>Discover like-minded people</Text>
                <Text style={styles.description}>Share your interests, passions, and hobbies. We'll connect you with people who share your enthusiasm.</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search interests"
                        placeholderTextColor="#AAA"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <Image style={styles.iconSearch} source={require('../../assets/images/searchIcon.png')} width={24} height={24}/>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    {filteredInterests.map((interest, index) => (
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
                </ScrollView>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('CollectionImage');
            }} style={styles.next}>
                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.lineGra}>
                    <Text style={styles.nextTxt}>Next</Text>
                </LinearGradient>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        height: 20,
        marginTop: 20
    },
    btnBack: {
        height: 14,
        width: 7,
        marginLeft: 20
    },
    grSlide: {
        width: 167,
        height: 20,
        marginLeft: -27
    },
    wrapSl: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapContent: {
        paddingHorizontal: 18,
        flex: 1,
        marginBottom: 90
    },
    next: {
        position: 'absolute',
        bottom: 34,
        height: 56,
        borderRadius: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    nextTxt: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: "center",
    },
    lineGra: {
        marginHorizontal: 20,
        borderRadius: 30,
        width: '100%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleCode: {
        fontSize: 24,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        textAlign: "left",
        color: '#f8f1e6',
        marginTop: 28
    },
    description: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        textAlign: "left",
        // width: 308,
        opacity: 0.5,
        marginTop: 10
    },
    scrollViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // marginTop:18
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
    searchContainer: {
        backgroundColor: '#333',
        borderRadius: 25,
        // paddingVertical: 8,
        paddingLeft: 48,
        marginBottom: 18,
        flexDirection: 'row',
        alignItems: 'center',
        height:56,
        marginTop:18
    },
    searchInput: {
        flex: 1,
        color: '#f8f1e6',
        fontSize: 16,
    },
    iconSearch:{
        position:'absolute',
        top:16,
        left:16
    }
})
