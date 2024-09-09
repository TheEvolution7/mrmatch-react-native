import React, {} from 'react';
import { ImageBackground, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Container from '../../components/Container';
import LinearGradient from 'react-native-linear-gradient';
const Stack = createNativeStackNavigator();
const SafeDateTutorial2: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <ImageBackground className="flex flex-1 flex-row justify-center items-center" source={require('../../assets/images/sd-4.jpg')} resizeMode="cover">
                <TouchableOpacity
                    className="flex-1 w-full h-full"
                    onPress={() => {
                        navigation.navigate('SafeDateTutorial5');
                    }}>
                </TouchableOpacity>
                
            </ImageBackground>
            
            
        </Container>
    );
};

export default SafeDateTutorial2;
