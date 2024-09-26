import React from 'react';
import { ImageBackground, Text, View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from '../../components/Container';
import LinearGradient from 'react-native-linear-gradient';

const SafeDateTutorial1: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <ImageBackground 
                style={styles.imageBackground} 
                source={require('../../assets/images/sd-1.jpg')} 
                resizeMode="cover"
            >
                <ScrollView>
                    <View style={styles.scrollContainer}>
                        <LinearGradient
                            locations={[0, 0.1, 0.2, 0.7]}
                            colors={['#BB9A65','#BB9A6570','#BB9A653F', '#BB9A6500']}
                            useAngle={true}
                            angle={-130}
                            style={styles.gradientContainer}
                        >
                            <Image 
                                style={styles.bannerImage}
                                resizeMode="cover"
                                source={require('../../assets/images/sd-bn.jpg')}
                            />
                            <View style={styles.borderBottom}>
                                <Text style={styles.welcomeText}>Welcome to SafeDate Mode</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.descriptionText}>
                                    Using this advance safety mode when going out on dates to keep yourself completely safe with real-time location tracking, safety checking, emergency services and contact
                                </Text>
                                
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('SafeDateTutorial2');
                                    }}
                                >
                                    <LinearGradient
                                        locations={[0, 1]}
                                        colors={['#bb9a65', '#775d34']}
                                        useAngle={true}
                                        angle={101.24}
                                        style={styles.button}
                                    >
                                        <Text style={styles.buttonText}>Start Tutorial</Text>
                                    </LinearGradient>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('SafeDateScreen');
                                    }}
                                    style={styles.skipButton}
                                >
                                    <Text style={styles.buttonText}>Skip</Text>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </View>
                </ScrollView>
            </ImageBackground>
        </Container>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        marginHorizontal: 20,
        marginVertical: 30,
    },
    gradientContainer: {
        borderWidth: 1,
        borderColor: '#BB9A65',
        borderRadius: 21,
        backgroundColor: '#2C3843',
    },
    bannerImage: {
        width: '100%',
        height: '50vw',  // Adjust this value if needed
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
    },
    borderBottom: {
        borderBottomWidth: 2,
        borderBottomColor: '#707070',
        marginBottom: 25,
        paddingVertical: 25,
    },
    welcomeText: {
        color: 'white',
        fontSize: 23,
        fontFamily: 'Helvetica',  // Replace with your font if you are using custom fonts
        fontWeight: '500',
        textAlign: 'center',
    },
    textContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    descriptionText: {
        color: '#F8F1E6',
        fontSize: 16,
        opacity: 0.5,
        marginBottom: 30,
        lineHeight: 20,
        textAlign: 'center',
    },
    button: {
        flexDirection: 'row',
        borderRadius: 800,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Helvetica',  // Replace with your custom font
        fontWeight: '500',
        textAlign: 'center',
    },
    skipButton: {
        flexDirection: 'row',
        borderRadius: 800,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#42505D',
        paddingHorizontal: 20,
    },
});

export default SafeDateTutorial1;
