import React from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from '../../components/Container';

const SafeDateTutorial2: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <ImageBackground 
                style={styles.imageBackground} 
                source={require('../../assets/images/sd-6.jpg')} 
                resizeMode="cover"
            >
                <TouchableOpacity
                    style={styles.touchableArea}
                    onPress={() => {
                        navigation.navigate('SafeDateScreen');
                    }}
                />
            </ImageBackground>
        </Container>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableArea: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

export default SafeDateTutorial2;
