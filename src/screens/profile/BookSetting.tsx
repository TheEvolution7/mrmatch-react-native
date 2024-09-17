import * as React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import userStore from '../../storage/UserStore';

// Search bar component
const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <View style={styles.searchContainer}>
        <TextInput
            style={styles.searchInput}
            placeholder="Search interests"
            placeholderTextColor="#AAA"
            value={searchQuery}
            onChangeText={setSearchQuery}
        />
        <Image style={styles.iconSearch} source={require('../../assets/images/searchIcon.png')} width={24} height={24} />
    </View>
);

// Interest item component
const InterestItem = ({ interest, isSelected, toggleInterest }) => (
    <TouchableOpacity
        style={[styles.interestItem, isSelected && styles.selectedInterest]}
        onPress={() => toggleInterest(interest)}
    >
        <Text style={styles.interestText}>{interest}</Text>
    </TouchableOpacity>
);

export default function BookSetting({ closeModal }) {
    const navigation = useNavigation();
    const interests = [
        'Fiction', 'Non-Fiction', 'Sci-Fi', 'Romance', 'Plays', 'Comics', 'Science',
        'Historical Fiction', 'Biography', 'Self-Help', 'Poetry', 'Essays', 'Fantasy',
        'Young Adult', 'Classic Literature', 'Mystery/Thriller', 'Paranormal', 'Travel',
        'Business', 'Horror', 'Philosophy', 'Humor', 'Drama', 'Space Opera', 'Cyberpunk',
        'Urban Fantasy', 'Graphic Novels', 'Travelogues', 'True Crime', 'Autobiography',
        'Religious Texts', 'Anthologies', 'Memoir', 'Art & Photography', 'Dystopian',
        'Science Fiction Fantasy', 'Satire', 'Craft & Hobbies', 'Cookbooks',
        'Alternate History', 'Short Stories', 'Children\'s Books'
    ];
    const [selectedInterests, setSelectedInterests] = React.useState(userStore.bookRef);
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
        <View style={{ flex: 1, paddingHorizontal: 20, width: '100%' }}>
            <View style={styles.wrapContent}>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    {filteredInterests.map((interest, index) => (
                        <InterestItem
                            key={index}
                            interest={interest}
                            isSelected={selectedInterests.includes(interest)}
                            toggleInterest={toggleInterest}
                        />
                    ))}
                </ScrollView>
            </View>
            <TouchableOpacity onPress={() => {
                userStore.setBook(selectedInterests);
                closeModal(false);
            }} style={styles.doneButton}>
                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.lineGra}>
                    <Text style={styles.nextTxt}>Done ({selectedInterests.length}/5)</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapContent: {
        flex: 1,
        marginBottom: 90,
        width: '100%'
    },
    doneButton: {
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
    scrollViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-between',
    },
    interestItem: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
        marginHorizontal: 5,
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
        backgroundColor: 'rgba(44, 56, 67, 1)',
        borderRadius: 25,
        paddingLeft: 48,
        marginBottom: 18,
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        marginTop: 18
    },
    searchInput: {
        flex: 1,
        color: '#f8f1e6',
        fontSize: 16,
    },
    iconSearch: {
        position: 'absolute',
        top: 16,
        left: 16
    },
});
