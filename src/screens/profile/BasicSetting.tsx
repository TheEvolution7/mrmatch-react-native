import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, PanResponder, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import userStore from '../../storage/UserStore';

export default function BasicSetting({ closeModal }) {
    const navigation = useNavigation();

    const languages = [
        'English 🇺🇸', 'Chinese 🇨🇳', 'Hindi 🇮🇳', 'Arabic 🇸🇦', 'Bengali 🇧🇩', 'Spanish 🇪🇸', 'Portuguese 🇵🇹', 'Russian 🇷🇺', 'Japanese 🇯🇵', 'French 🇫🇷', 'Punjabi 🇮🇳', 'German 🇩🇪', 'Malay 🇲🇾', 'Telugu 🇮🇳', 'Urdu 🇵🇰', 'Turkish 🇹🇷', 'Marathi 🇮🇳', 'Tamil 🇮🇳', 'Korean 🇰🇷', 'Vietnamese 🇻🇳', 'Italian 🇮🇹', 'Thai 🇹🇭', 'Filipino 🇵🇭', 'Swahili 🇰🇪', 'Dutch 🇳🇱', 'Polish 🇵🇱', 'Ukrainian 🇺🇦', 'Romanian 🇷🇴', 'Greek 🇬🇷', 'Nepali 🇳🇵', 'Hungarian 🇭🇺', 'Czech 🇨🇿', 'Danish 🇩🇰', 'Hebrew 🇮🇱', 'Swedish 🇸🇪', 'Finnish 🇫🇮', 'Norwegian 🇳🇴', 'Slovak 🇸🇰', 'Bulgarian 🇧🇬',
    ];
    const religions = [
        'Christianity', 'Islam', 'Hinduism', 'Buddhism', 'Secular/Atheist/Agnostic',
        'Chinese Traditional Religion', 'Sikhism', 'Diasporic Religions', 'Spiritism',
        'Judaism', 'Baháʼí', 'Jainism', 'Shinto', 'Cao Dai', 'Other'
    ];

    const zodiacSigns = [
        'Pisces', 'Aquarius', 'Scorpio', 'Capricorn', 'Libra', 'Sagittarius',
        'Virgo', 'Cancer', 'Gemini', 'Leo', 'Taurus', 'Aries'
    ];

    const educations = ['Other', 'PhD', 'High School', 'Masters', 'Bachelors', 'Trade School'];

    const family = ['Not Sure Yet', 'Dont Want Kids', 'Want Kids'];
    const vaccines = ['Prefer Not to Say', 'Unvaccinated', 'Vaccinated'];
    const personalityTypes = [
        'ISTP', 'ESFJ', 'ESTJ', 'ISFJ', 'ISTJ', 'ENFP', 'ESFP', 'ENFJ',
        'ENTP', 'INTP', 'ISFP', 'INFJ', 'ESTP', 'INFP', 'ENTJ', 'INTJ'
    ];

    const communicationStyles = [
        'Storyteller', 'Straight Shooter', 'Easygoing', 'Sarcastic Wit',
        'Chatty Cathy', 'Deep Thinker', 'Listener', 'Joker'
    ];

    const loveStyles = [
        'Spontaneous Adventurer', 'Best Friend', 'Analytical Lover', 'Caregiver',
        'Adventure Seeker', 'Classic Lover', 'Independent Spirit', 'Hopeless Romantic'
    ];

    const bloodTypes = ['O', 'AB', 'B ', 'A '];

    const [selectedlanguages, setSelectedlanguages] = React.useState(userStore.languages);
    const [selectedReligion, setSelectedReligion] = React.useState(userStore.religion);
    const [selectedEdu, setSelectedEdu] = React.useState(userStore.education);
    const [selectedZodiac, setSelectedZodiac] = React.useState(userStore.zodiac);
    const [selectedFam, setSelectedFam] = React.useState(userStore.familyPlan);
    const [selectedCov, setSelectedCov] = React.useState(userStore.vaccine);
    const [selectedType, setSelectedType] = React.useState(userStore.personalType);
    const [selectedCom, setSelectedCom] = React.useState(userStore.communStyle);
    const [selectedLov, setSelectedLov] = React.useState(userStore.loveStyle);
    const [selectedBlood, setSelectedBlood] = React.useState(userStore.bloodType);

    const togglelanguage = (language) => {
        setSelectedlanguages((prevSelected) =>
            prevSelected.includes(language)
                ? prevSelected.filter((i) => i !== language)
                : [...prevSelected, language]
        );
    };

    const toggleReligion = (religion) => {
        setSelectedReligion(religion);
    };

    const toggleEdu = (edu) => {
        setSelectedEdu(edu);
    };

    const toggleCom = (com) => {
        setSelectedCom(com);
    };

    const toggleBlood = (blood) => {
        setSelectedBlood(blood);
    };

    const toggleLov = (love) => {
        setSelectedLov(love);
    };

    const toggleType = (type) => {
        setSelectedType(type);
    };

    const toggleCov = (cov) => {
        setSelectedCov(cov);
    };

    const toggleZodiac = (Zodiac) => {
        setSelectedZodiac(Zodiac);
    };

    const toggleFam = (fam) => {
        setSelectedFam(fam);
    };


    return (
        <>
            <View style={styles.wrapContent}>

                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.device} />
                    <View style={styles.wrapTitle}>
                        <Image source={require('../../assets/images/language.png')} />
                        <Text style={styles.languagesTxt}>Languages</Text>
                    </View>
                    <View style={styles.scrollViewContent}>
                        {languages.map((language, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.languageItem,
                                    selectedlanguages.includes(language) && styles.selectedlanguage
                                ]}
                                onPress={() => togglelanguage(language)}
                            >
                                <Text style={styles.languageText}>{language}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.device} />
                    <View style={styles.wrapTitle}>
                        <Image source={require('../../assets/images/religion.png')} />
                        <Text style={styles.languagesTxt}>religion</Text>
                    </View>
                    <View style={styles.scrollViewContent}>
                        {religions.map((religion, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.languageItem,
                                    selectedReligion.includes(religion) && styles.selectedlanguage
                                ]}
                                onPress={() => toggleReligion(religion)}
                            >
                                <Text style={styles.languageText}>{religion}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.device} />
                    <View style={styles.wrapTitle}>
                        <Image source={require('../../assets/images/zodiac.png')} />
                        <Text style={styles.languagesTxt}>Zodiac</Text>
                    </View>
                    <View style={styles.scrollViewContent}>
                        {zodiacSigns.map((zodiac, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.languageItem,
                                    selectedZodiac.includes(zodiac) && styles.selectedlanguage
                                ]}
                                onPress={() => toggleZodiac(zodiac)}
                            >
                                <Text style={styles.languageText}>{zodiac}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.device} />
                    <View style={styles.wrapTitle}>
                        <Image source={require('../../assets/images/education.png')} />
                        <Text style={styles.languagesTxt}>Education</Text>
                    </View>
                    <View style={styles.scrollViewContent}>
                        {educations.map((edu, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.languageItem,
                                    selectedEdu.includes(edu) && styles.selectedlanguage
                                ]}
                                onPress={() => toggleEdu(edu)}
                            >
                                <Text style={styles.languageText}>{edu}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.device} />
                    <View style={styles.wrapTitle}>
                        <Image source={require('../../assets/images/baby.png')} />
                        <Text style={styles.languagesTxt}>Family Plans</Text>
                    </View>
                    <View style={styles.scrollViewContent}>
                        {family.map((fam, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.languageItem,
                                    selectedFam.includes(fam) && styles.selectedlanguage
                                ]}
                                onPress={() => toggleFam(fam)}
                            >
                                <Text style={styles.languageText}>{fam}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.device} />
                    <View style={styles.wrapTitle}>
                        <Image source={require('../../assets/images/vaccine.png')} />
                        <Text style={styles.languagesTxt}>COVID Vaccine</Text>
                    </View>
                    <View style={styles.scrollViewContent}>
                        {vaccines.map((cov, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.languageItem,
                                    selectedCov.includes(cov) && styles.selectedlanguage
                                ]}
                                onPress={() => toggleCov(cov)}
                            >
                                <Text style={styles.languageText}>{cov}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.device} />
                    <View style={styles.wrapTitle}>
                        <Image source={require('../../assets/images/puzzle.png')} />
                        <Text style={styles.languagesTxt}>Personality Type</Text>
                    </View>
                    <View style={styles.scrollViewContent}>
                        {personalityTypes.map((type, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.languageItem,
                                    selectedType.includes(type) && styles.selectedlanguage
                                ]}
                                onPress={() => toggleType(type)}
                            >
                                <Text style={styles.languageText}>{type}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.device} />
                    <View style={styles.wrapTitle}>
                        <Image source={require('../../assets/images/communication.png')} />
                        <Text style={styles.languagesTxt}>Communication Style</Text>
                    </View>
                    <View style={styles.scrollViewContent}>
                        {communicationStyles.map((com, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.languageItem,
                                    selectedCom.includes(com) && styles.selectedlanguage
                                ]}
                                onPress={() => toggleCom(com)}
                            >
                                <Text style={styles.languageText}>{com}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.device} />
                    <View style={styles.wrapTitle}>
                        <Image source={require('../../assets/images/love.png')} />
                        <Text style={styles.languagesTxt}>Love Style</Text>
                    </View>
                    <View style={styles.scrollViewContent}>
                        {loveStyles.map((love, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.languageItem,
                                    selectedLov.includes(love) && styles.selectedlanguage
                                ]}
                                onPress={() => toggleLov(love)}
                            >
                                <Text style={styles.languageText}>{love}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.device} />
                    <View style={styles.wrapTitle}>
                        <Image source={require('../../assets/images/blood.png')} />
                        <Text style={styles.languagesTxt}>Blood Type</Text>
                    </View>
                    <View style={styles.scrollViewContent}>
                        {bloodTypes.map((blood, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.languageItem,
                                    selectedBlood.includes(blood) && styles.selectedlanguage
                                ]}
                                onPress={() => toggleBlood(blood)}
                            >
                                <Text style={styles.languageText}>{blood}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity onPress={() => {
                userStore.setLanguages(selectedlanguages);
                userStore.setReligion(selectedReligion);
                userStore.setZodiac(selectedZodiac);
                userStore.setEducation(selectedEdu);
                userStore.setBlood(selectedBlood);
                userStore.setCommunication(selectedCom);
                userStore.setFamilyPlan(selectedFam);
                userStore.setLoveStyle(selectedLov);
                userStore.setPersonalType(selectedType);
                userStore.setVaccine(selectedCov);
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
        marginBottom: 90,
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
        // justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20
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
})
