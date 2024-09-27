import React, { useState } from 'react';
import { Button, Image, Modal, Platform, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserProfile } from './ProfileInfo';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';
import FieldInput from '../../components/FieldInput';

interface ProfileEditInfoProps {
    profile: UserProfile;
    setProfile: (profile: UserProfile) => void;
}

const ProfileEditInfo: React.FC<ProfileEditInfoProps> = ({ profile, setProfile }) => {
    const [name, setName] = useState(profile.name);

    const formatDate = (date: Date) => {
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };

    const parseDate = (dateString: string) => {
        const [month, day, year] = dateString.split('/');
        return new Date(Number(year), Number(month) - 1, Number(day));
    };

    const [birthdate, setBirthdate] = useState(parseDate(profile.birthdate));
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [gender, setGender] = useState(profile.gender);
    const [isGenderPickerVisible, setGenderPickerVisibility] = useState(false);

    const [pronouns, setPronouns] = useState(profile.pronouns);
    const [isPronounsPickerVisible, setPronounsPickerVisibility] = useState(false);

    const [height, setHeight] = useState(profile.height);
    const [isHeightPickerVisible, setHeightPickerVisibility] = useState(false);

    const [weight, setWeight] = useState(profile.weight);
    const [isWeightPickerVisible, setWeightPickerVisibility] = useState(false);

    const [jobtitle, setJobTitle] = useState(profile.jobtitle);
    const [company, setCompany] = useState(profile.company);
    const [school, setSchool] = useState(profile.school);
    const [livingin, setLivingIn] = useState(profile.livingin);
    const [isLivingInPickerVisible, setLivingInPickerVisibility] = useState(false);
    const [aboutme, setAboutMe] = useState(profile.aboutme);

    const navigation = useNavigation();

    const handleSave = () => {
        setProfile({ name, birthdate: formatDate(birthdate), gender, pronouns, height, weight, jobtitle, company, school, livingin, aboutme });
        navigation.goBack();
    };

    const handleConfirm = (date: Date) => {
        setBirthdate(date);
        setDatePickerVisibility(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.label}>Nickname</Text>
                    <TextInput
                        style={styles.textInput}
                        value={name}
                        onChangeText={setName}
                        selectionColor={'#BB9A65'}
                    />
                </View>
                <View style={styles.column}>
                    <Text style={styles.label}>Birthday</Text>
                    <TouchableOpacity
                        onPress={() => setDatePickerVisibility(true)}
                        style={styles.datePickerButton}
                    >
                        <Image style={{}} resizeMode="contain" source={require('../../assets/images/fi_calendar.png')} />
                        <Text style={styles.dateText}>{formatDate(birthdate)}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        date={birthdate}
                        onConfirm={handleConfirm}
                        onCancel={() => setDatePickerVisibility(false)}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.label}>Gender</Text>
                    <TouchableOpacity
                        style={styles.pickerButton}
                        onPress={() => setGenderPickerVisibility(true)}
                    >
                        <Text style={[styles.pickerText, gender ? {} : styles.placeholder]}>{gender.charAt(0).toUpperCase() + gender.slice(1)}</Text>
                        <Image style={styles.icon} resizeMode="contain" source={require('../../assets/images/ar-down.png')} />
                    </TouchableOpacity>
                    {/* <Modal
                        visible={isGenderPickerVisible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={() => setGenderPickerVisibility(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.pickerContainer}>
                                <Picker
                                    selectedValue={gender}
                                    onValueChange={(itemValue) => setGender(itemValue)}
                                >
                                    <Picker.Item label="Male" value="male" />
                                    <Picker.Item label="Female" value="female" />
                                    <Picker.Item label="Other" value="other" />
                                </Picker>
                                <View style={styles.modalButton}>
                                    <Button title="Done" onPress={() => setGenderPickerVisibility(false)} />
                                </View>
                            </View>
                        </View>
                    </Modal> */}
                </View>

                <View style={styles.column}>
                    <Text style={styles.label}>Pronouns</Text>
                    <TouchableOpacity
                        style={styles.pickerButton}
                        onPress={() => setPronounsPickerVisibility(true)}
                    >
                        <Text style={[styles.pickerText, pronouns ? {} : styles.placeholder]}>{pronouns || 'Choose Pronoun'}</Text>
                        <Image style={styles.icon} resizeMode="contain" source={require('../../assets/images/ar-down.png')} />
                    </TouchableOpacity>
                    {/* <Modal
                        visible={isPronounsPickerVisible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={() => setPronounsPickerVisibility(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.pickerContainer}>
                                <Picker
                                    selectedValue={pronouns}
                                    onValueChange={(itemValue) => setPronouns(itemValue)}
                                >
                                    <Picker.Item label="Mr" value="mr" />
                                    <Picker.Item label="Ms" value="ms" />
                                    <Picker.Item label="Other" value="other" />
                                </Picker>
                                <View style={styles.modalButton}>
                                    <Button title="Done" onPress={() => setPronounsPickerVisibility(false)} />
                                </View>
                            </View>
                        </View>
                    </Modal> */}
                </View>
            </View>
            <FieldInput title='Job Title' placeHolder='Add Job Title' onChangeText={setJobTitle} contentText={jobtitle} />
            <FieldInput title='Company' placeHolder='Add Company' onChangeText={setCompany} contentText={company} />
            <FieldInput title='School' placeHolder='Add School' onChangeText={setSchool} contentText={school} />
            <FieldInput title='Living In' placeHolder='Add City' onChangeText={setJobTitle} contentText={livingin} />
            <Text style={styles.label}>About Me</Text>
            <TextInput
                style={styles.aboutMe}
                placeholder='Introduce yourself'
                placeholderTextColor="rgba(248, 241, 230, 0.2)"
                value={aboutme}
                onChangeText={setAboutMe}
                multiline
                
            />
            {/* Remaining rows for height, weight, job title, company, school, living in, about me, etc. */}
            <View style={styles.device} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    column: {
        flexBasis: '50%',
        paddingLeft: 5,
        paddingRight: 5,
    },
    label: {
        fontSize: 14,
        color: '#D7C09C',
        marginBottom: 5,
        fontFamily: 'font-body', // Assuming you have this font
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff59',
        color: 'white',
        fontSize: 16,
        paddingVertical: 7,
    },
    datePickerButton: {
        flexDirection: 'row',
        paddingVertical: 7,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff59',
    },
    dateText: {
        marginLeft: 8,
        color: 'white',
        fontSize: 16,
    },
    icon: {
        width: 14,
        height: 7,
    },
    pickerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff59',
    },
    pickerText: {
        color: 'white',
        fontSize: 16,
    },
    placeholder: {
        opacity: 0.2,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        // backgroundColor:'#ffffff'
    },
    pickerContainer: {
        paddingBottom: 40,
        backgroundColor: '#ffffff'
    },
    modalButton: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 8,
        paddingVertical: 8,
    },
    aboutMe: {
        height:114,
        borderWidth:1,
        borderColor:'rgba(255, 255, 255, 0.3)',
        borderStyle: "solid",
        borderRadius:6,
        paddingLeft:14,
        paddingTop:8
    },
    device: {
        height: 2,
        backgroundColor: 'rgba(107, 113, 118, 0.5)',
        width:'120%',
        marginLeft:-20,
        marginVertical:24
    }
});

export default ProfileEditInfo;
