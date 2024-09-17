import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, PanResponder, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import userStore from '../../storage/UserStore';

const CategorySection = ({ imageSource, title, options, selectedOptions, toggleOption }) => (
    <View>
        <View style={styles.device} />
        <View style={styles.wrapTitle}>
            <Image source={imageSource} />
            <Text style={styles.languagesTxt}>{title}</Text>
        </View>
        <View style={styles.scrollViewContent}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.languageItem,
                        selectedOptions.includes(option) && styles.selectedlanguage
                    ]}
                    onPress={() => toggleOption(option)}
                >
                    <Text style={styles.languageText}>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
);

export default function LifeStyles({ closeModal }) {
    const navigation = useNavigation();

    const petOptions = [
        'Other', 'Exotic Pet', 'Reptile', 'Hamster', 'Rabbit',
        'Dog', 'Fish', 'Cat', 'Bird', 'None'
    ];
    const drinkingHabits = [
        'Cocktail Connoisseur', 'Non-Drinker', 'Craft Beer Lover',
        'Occasional Drinker', 'Wine Enthusiast', 'Social Drinker'
    ];

    const smokingHabits = [
        'Vape Enthusiast', 'Quitter', 'Occasional Smoker', 'Non-Smoker', 'Smoker '
    ];

    const workoutOptions = ['Never', 'Sometimes', 'Often', 'Everyday'];

    const dietaryPreferences = [
        'Other', 'Kosher', 'Raw Food', 'Keto', 'Plant-Based', 'Dairy-Free',
        'Pescatarian', 'Vegan', 'Halal', 'Gluten-Free', 'Omnivore', 'Vegetarian'
    ];

    const socialMediaPresenceOptions = [
        'Minimal Social Media Presence', 'Active on Some',
        'Social Media Influencer', 'Active on All'
    ];

    const sleepingHabits = [
        'Regular Sleeper', 'Night Owl', 'Insomniac', 'Early Bird'
    ];

    const [selectedPets, setSelectedPets] = React.useState(userStore.pets);
    const [selectedDrink, setSelectedDrink] = React.useState(userStore.drinking);
    const [selectedSmo, setSelectedSmo] = React.useState(userStore.smoking);
    const [selectedWO, setSelectedWO] = React.useState(userStore.workout);
    const [selectedFood, setSelectedFood] = React.useState(userStore.dietary);
    const [selectedSocial, setSelectedSocial] = React.useState(userStore.social);
    const [selectedSleep, setSelectedSleep] = React.useState(userStore.sleeping);

    const togglePet = (value) => {
        setSelectedPets(value);
    };

    const toggleSmo = (value) => {
        setSelectedSmo(value);
    };

    const toggleFood = (value) => {
        setSelectedFood(value);
    };

    const toggleWO = (value) => {
        setSelectedWO(value);
    };

    const toggleSocial = (value) => {
        setSelectedSocial(value);
    };

    const toggleDrink = (value) => {
        setSelectedDrink(value);
    };

    const toggleSleep = (value) => {
        setSelectedSleep(value);
    };

    return (
        <>
            <View style={styles.wrapContent}>

                <ScrollView style={{ flex: 1 }}>
                    <CategorySection
                        imageSource={require('../../assets/images/pet.png')}
                        title="Pets"
                        options={petOptions}
                        selectedOptions={selectedPets}
                        toggleOption={togglePet}
                    />
                    <CategorySection
                        imageSource={require('../../assets/images/drinking.png')}
                        title="Drinking Habits"
                        options={drinkingHabits}
                        selectedOptions={selectedDrink}
                        toggleOption={toggleDrink}
                    />
                    <CategorySection
                        imageSource={require('../../assets/images/smoking.png')}
                        title="Smoking Habits"
                        options={smokingHabits}
                        selectedOptions={selectedSmo}
                        toggleOption={toggleSmo}
                    />
                    <CategorySection
                        imageSource={require('../../assets/images/workout.png')}
                        title="Workout"
                        options={workoutOptions}
                        selectedOptions={selectedWO}
                        toggleOption={toggleWO}
                    />
                    <CategorySection
                        imageSource={require('../../assets/images/hambuger.png')}
                        title="Dietary Preferences"
                        options={dietaryPreferences}
                        selectedOptions={selectedFood}
                        toggleOption={toggleFood}
                    />
                    <CategorySection
                        imageSource={require('../../assets/images/socail.png')}
                        title="Social Media Presence"
                        options={socialMediaPresenceOptions}
                        selectedOptions={selectedSocial}
                        toggleOption={toggleSocial}
                    />
                    <CategorySection
                        imageSource={require('../../assets/images/sleeping.png')}
                        title="Sleeping Habits"
                        options={sleepingHabits}
                        selectedOptions={selectedSleep}
                        toggleOption={toggleSleep}
                    />
                </ScrollView>
            </View>
            <TouchableOpacity onPress={() => {
                userStore.setPets(selectedPets);
                userStore.setDrinks(selectedDrink);
                userStore.setSmoking(selectedSmo);
                userStore.setWorkout(selectedWO);
                userStore.setDietary(selectedFood);
                userStore.setSocial(selectedSocial);
                userStore.setSleeping(selectedSleep);
                console.log(selectedPets);
                closeModal(false);
            }} style={styles.next}>
                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.lineGra}>
                    <Text style={styles.nextTxt}>Done</Text>
                </LinearGradient>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: 'red',
        // flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    btnBack: {
        height: 24,
        width: 24,
    },
    grSlide: {
        width: 167,
        height: 20,
        marginLeft: -27
    },
    wrapSl: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    wrapContent: {
        // paddingHorizontal: 18,
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
        // paddingHorizontal: 20
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
        // justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20
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
        backgroundColor: 'rgba(44, 56, 67, 1)',
        borderRadius: 25,
        // paddingVertical: 8,
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
    title: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#d7c09c",
    },
    headerModal: {
        position: 'absolute',
        top: 5,
        left: 0
    },
    languagesTxt: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "#f8f1e6",
        marginLeft: 10
    },
    wrapTitle: {
        flexDirection: 'row',
        marginTop: 28,
        paddingHorizontal: 20
    },
    device: {
        height: 1,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 24,
        marginLeft: -20
    },
    languageItem: {
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
    selectedlanguage: {
        backgroundColor: '#BB9A65',
    },
    languageText: {
        color: '#f8f1e6',
        fontSize: 16,
    },
})