import React, { useState } from 'react';
import { Button, Image, Modal, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserProfile } from './ProfileInfo';

import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { styled } from 'nativewind';
import { Picker } from '@react-native-picker/picker';
interface ProfileEditInfoProps{
    profile: UserProfile;
    setProfile: (profile: UserProfile) => void;
}

const StyledLabel = styled(Text, 'text-[14px] font-body text-[#D7C09C] mb-[5px]');
const StyledTextInput = styled(TextInput, 'border-b-[1px] border-b-[#ffffff59] text-white text-[16px] py-[7px]');

const StyledRow = styled(View, 'flex flex-row items-center space-x-[10px] justify-center w-full mb-[32px]');
const StyledColumn = styled(View, 'basis-1/2 pl-[5px] pr-[5px]');
const StyledColumnFull = styled(View, 'flex-1 pl-[5px] pr-[5px]');

const StyledButton = styled(View, 'bg-[#ffffff] mt-[10px] mx-[10px] rounded-[8px] py-[8px]')
const StyledSelect = styled(View, 'bg-[#ffffff] pt-[0px] mx-[10px] rounded-[8px]')

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

    const [gender, setGender] = useState(profile.gender); // Default to 'male' if not set
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
        <View className="flex mt-[20px] mx-[20px]">
            <StyledRow>
                <StyledColumn>
                    <StyledLabel>
                        Nickname
                    </StyledLabel>
                    <StyledTextInput 
                        value={name}
                        onChangeText={setName}
                        selectionColor={'#BB9A65'}
                    />
                </StyledColumn>
                <StyledColumn>
                    <StyledLabel>
                        Birthday
                    </StyledLabel>
                    
                    <TouchableOpacity 
                        onPress={() => setDatePickerVisibility(true)}
                        className="flex flex-row py-[7px] border-b-[1px] border-b-[#ffffff59]">
                            <Image className="w-[21px] h-[20px]" resizeMode="contain" source={require('../../assets/images/fi_calendar.png')} />
                            <Text className="ml-[8px] text-white text-[16px]">{formatDate(birthdate)}</Text>
                    </TouchableOpacity>
                    
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        date={birthdate}
                        onConfirm={handleConfirm}
                        onCancel={() => setDatePickerVisibility(false)}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    />
                </StyledColumn>
            </StyledRow>

            <StyledRow>
                <StyledColumn>
                    <StyledLabel>
                        Gender
                    </StyledLabel>
                    <TouchableOpacity className="flex flex-row justify-between items-center py-[7px] border-b-[1px] border-b-[#ffffff59]" onPress={() => setGenderPickerVisibility(true)}>
                        <Text className={`text-white text-[16px] ${gender ? 'opacity-1' : 'opacity-[0.2]'}`}>{gender.charAt(0).toUpperCase() + gender.slice(1)}</Text>
                        <Image className="w-[12px] h-[20px]" resizeMode="contain" source={require('../../assets/images/ar-down.png')} />
                    </TouchableOpacity>
                    <Modal
                        visible={isGenderPickerVisible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={() => setGenderPickerVisibility(false)}
                    >
                        <View className="flex-1 justify-end">
                            <View className="pb-[40px]">
                                <StyledSelect>
                                    <Picker
                                        selectedValue={gender}
                                        onValueChange={(itemValue) => setGender(itemValue)}
                                        className="w-full"
                                    >
                                        <Picker.Item label="Male" value="male" />
                                        <Picker.Item label="Female" value="female" />
                                        <Picker.Item label="Other" value="other" />
                                    </Picker>
                                </StyledSelect>
                                <StyledButton>
                                    <Button 
                                        title="Done" 
                                        onPress={() => setGenderPickerVisibility(false)}
                                    />
                                </StyledButton>
                            </View>
                        </View>
                    </Modal>
                    
                </StyledColumn>

                <StyledColumn>
                    <StyledLabel>
                        Pronouns
                    </StyledLabel>
                    <TouchableOpacity className="flex flex-row justify-between items-center py-[7px] border-b-[1px] border-b-[#ffffff59]" onPress={() => setPronounsPickerVisibility(true)}>
                        <Text className={`text-white text-[16px] ${pronouns ? 'opacity-1' : 'opacity-[0.2]'}`}>{pronouns ? pronouns : 'Choose Pronoun' }</Text>
                        <Image className="w-[12px] h-[20px]" resizeMode="contain" source={require('../../assets/images/ar-down.png')} />
                    </TouchableOpacity>
                    <Modal
                        visible={isPronounsPickerVisible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={() => setPronounsPickerVisibility(false)}
                    >
                        <View className="flex-1 justify-end">
                            <View className="pb-[40px]">
                                <StyledSelect>
                                    <Picker
                                        selectedValue={pronouns}
                                        onValueChange={(itemValue) => setPronouns(itemValue)}
                                        className="w-full"
                                    >
                                        <Picker.Item label="Mr" value="mr" />
                                        <Picker.Item label="Ms" value="ms" />
                                        <Picker.Item label="Other" value="other" />
                                    </Picker>
                                </StyledSelect>
                                <StyledButton>
                                    <Button 
                                        title="Done" 
                                        onPress={() => setPronounsPickerVisibility(false)}
                                    />
                                </StyledButton>
                            </View>
                        </View>
                    </Modal>
                    
                </StyledColumn>

            </StyledRow>

            <StyledRow>
                <StyledColumn>
                    <StyledLabel>
                        Height
                    </StyledLabel>
                    <TouchableOpacity className="flex flex-row justify-between items-center py-[7px] border-b-[1px] border-b-[#ffffff59]" onPress={() => setHeightPickerVisibility(true)}>
                        <Text className={`text-white text-[16px] ${height ? 'opacity-1' : 'opacity-[0.2]'}`}>{height ? height : 'Add Height'}</Text>
                        <Image className="w-[12px] h-[20px]" resizeMode="contain" source={require('../../assets/images/ar-down.png')} />
                    </TouchableOpacity>
                    <Modal
                        visible={isHeightPickerVisible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={() => setHeightPickerVisibility(false)}
                    >
                        <View className="flex-1 justify-end">
                            <View className="pb-[40px]">
                                <StyledSelect>
                                    <Picker
                                        selectedValue={height}
                                        onValueChange={(itemValue) => setHeight(itemValue)}
                                        className="w-full"
                                    >
                                        {Array.from({ length: 151 }, (_, i) => 100 + i).map(option => (
                                            <Picker.Item label={`${option} cm`} value={`${option} cm`} key={option} />
                                        ))}
                                    </Picker>
                                </StyledSelect>
                                <StyledButton>
                                    <Button 
                                        title="Done" 
                                        onPress={() => setHeightPickerVisibility(false)}
                                    />
                                </StyledButton>
                            </View>
                        </View>
                    </Modal>
                    
                </StyledColumn>
                <StyledColumn>
                    <StyledLabel>
                        Weight
                    </StyledLabel>
                    <TouchableOpacity className="flex flex-row justify-between items-center py-[7px] border-b-[1px] border-b-[#ffffff59]" onPress={() => setWeightPickerVisibility(true)}>
                        <Text className={`text-white text-[16px] ${weight ? 'opacity-1' : 'opacity-[0.2]'}`}>{weight ? weight : 'Add Weight'}</Text>
                        <Image className="w-[12px] h-[20px]" resizeMode="contain" source={require('../../assets/images/ar-down.png')} />
                    </TouchableOpacity>
                    <Modal
                        visible={isWeightPickerVisible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={() => setWeightPickerVisibility(false)}
                    >
                        <View className="flex-1 justify-end">
                            <View className="pb-[40px]">
                                <StyledSelect>
                                    <Picker
                                        selectedValue={weight}
                                        onValueChange={(itemValue) => setWeight(itemValue)}
                                        className="w-full"
                                    >
                                        {Array.from({ length: 151 }, (_, i) => 30 + i).map(option => (
                                            <Picker.Item label={`${option} kg`} value={`${option} kg`} key={option} />
                                        ))}
                                    </Picker>
                                </StyledSelect>
                                <StyledButton>
                                    <Button 
                                        title="Done" 
                                        onPress={() => setWeightPickerVisibility(false)}
                                    />
                                </StyledButton>
                            </View>
                        </View>
                    </Modal>
                    
                </StyledColumn>
            </StyledRow>

            <StyledRow>
                <StyledColumnFull>
                    <StyledLabel>
                        Job Title
                    </StyledLabel>
                    <StyledTextInput 
                        value={jobtitle}
                        onChangeText={setJobTitle}
                        selectionColor={'#BB9A65'}
                        placeholder="Add Job Title"
                        placeholderTextColor="#ffffff33" 
                    />
                </StyledColumnFull>
            </StyledRow>

            <StyledRow>
                <StyledColumnFull>
                    <StyledLabel>
                       Company
                    </StyledLabel>
                    <StyledTextInput 
                        value={company}
                        onChangeText={setCompany}
                        selectionColor={'#BB9A65'}
                        placeholder="Add Company"
                        placeholderTextColor="#ffffff33" 
                    />
                </StyledColumnFull>
            </StyledRow>

            <StyledRow>
                <StyledColumnFull>
                    <StyledLabel>
                       School
                    </StyledLabel>
                    <StyledTextInput 
                        value={school}
                        onChangeText={setSchool}
                        selectionColor={'#BB9A65'}
                        placeholder="Add School"
                        placeholderTextColor="#ffffff33" 
                    />
                </StyledColumnFull>
            </StyledRow>

            <StyledRow>
                <StyledColumnFull>
                    <StyledLabel>
                       Living In
                    </StyledLabel>
                    <TouchableOpacity className="flex flex-row justify-between items-center py-[7px] border-b-[1px] border-b-[#ffffff59]" onPress={() => setLivingInPickerVisibility(true)}>
                        <Text className={`text-white text-[16px] ${livingin ? 'opacity-1' : 'opacity-[0.2]'}`}>{livingin ? livingin : 'Add City'}</Text>
                        <Image className="w-[12px] h-[20px]" resizeMode="contain" source={require('../../assets/images/ar-down.png')} />
                    </TouchableOpacity>
                    <Modal
                        visible={isLivingInPickerVisible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={() => setLivingInPickerVisibility(false)}
                    >
                        <View className="flex-1 justify-end">
                            <View className="pb-[40px]">
                                <StyledSelect>
                                    <Picker
                                        selectedValue={livingin}
                                        onValueChange={(itemValue) => setLivingIn(itemValue)}
                                        className="w-full"
                                    >
                                        <Picker.Item label="None" value="" />
                                        <Picker.Item label="New York" value="New York" />
                                        <Picker.Item label="Florida" value="Florida" />
                                        <Picker.Item label="Alaska" value="Alaska" />
                                    </Picker>
                                </StyledSelect>
                                <StyledButton>
                                    <Button 
                                        title="Done" 
                                        onPress={() => setLivingInPickerVisibility(false)}
                                    />
                                </StyledButton>
                            </View>
                        </View>
                    </Modal>
                </StyledColumnFull>
            </StyledRow>

            <StyledRow>
                <StyledColumnFull>
                    <StyledLabel>
                        About Me  
                    </StyledLabel>
                    <TextInput
                        className="mt-[10px] border-[1px] h-[114px] border-[#ffffff59] text-white text-[16px] p-[14px] rounded-[6px]"
                        value={aboutme}
                        onChangeText={setAboutMe}
                        placeholder="Introduce yourself"
                        selectionColor={'#BB9A65'}
                        placeholderTextColor="#ffffff33"
                        multiline={true}
                        numberOfLines={4}
                    />
                </StyledColumnFull>
            </StyledRow>

            <View className="mt-[0px] mb-[28px] ml-[-20px] mr-[-20px] h-[1px] bg-[#6B7176]"></View>
        </View>
    );
};

export default ProfileEditInfo;




