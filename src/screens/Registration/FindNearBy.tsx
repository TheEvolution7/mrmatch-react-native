import * as React from 'react';
import Container from '../../components/Container';
import { Image, PanResponder, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';

export default function FindNearBy() {
    const navigation = useNavigation();
    const [sliderWidth, setSliderWidth] = React.useState(0);
    const [sliderPosition, setSliderPosition] = React.useState(100);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
            let newPosition = gestureState.moveX;
            // console.log(newPosition);
            if (newPosition >= 10 && newPosition <= sliderWidth - 8) {
                setSliderPosition(newPosition);
            }
        }
    });

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
                        source={require('../../assets/images/groupSlide_4.png')}
                        style={styles.grSlide}>
                    </Image>
                </View>
            </View>
            <View style={styles.wrapContent}>
                <Text style={styles.titleCode}>Find matches nearby</Text>
                <Text style={styles.description}>Select your preferred distance range to discover matches conveniently. We'll help you find love close by.</Text>
                <View style={{ flexDirection: 'row', marginTop: 36 }}>
                    <Text style={styles.titleDistance}>Distance Preference</Text>
                    <Text style={styles.numDisctance}>{Math.round((sliderPosition / (sliderWidth)) * 100 * 1.0637) - 3} km</Text>
                </View>

                <View
                    style={styles.slider}
                    onLayout={(e) => setSliderWidth(e.nativeEvent.layout.width)}
                    {...panResponder.panHandlers}
                >
                    <View
                        style={[
                            styles.sliderTrackLeft,
                            { width: sliderPosition },
                        ]}
                    />
                    <View
                        style={[
                            styles.sliderTrackRight,
                            { width: sliderWidth - sliderPosition },
                        ]}
                    />
                    <Image
                        source={require('../../assets/images/thumtint2.png')}
                        width={30} height={30}
                        style={[styles.knob, { left: sliderPosition - 10 }]}>
                    </Image>
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Relationship');
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
        width: 308,
        opacity: 0.5,
        marginTop: 10
    },
    wrapContent: {
        paddingHorizontal: 18
    },
    slider: {
        width: '100%',
        height: 30,  // Set the height of the track
        backgroundColor: 'transparent',  // Make the background transparent
        borderRadius: 2.5,
        overflow: 'hidden',
        position: 'relative',
        marginTop: 20
    },
    sliderTrackLeft: {
        position: 'absolute',
        height: 5,
        backgroundColor: '#BB9A65', // Left track color
        top: 15,
        left: 0,
        borderRadius: 30
    },
    sliderTrackRight: {
        position: 'absolute',
        height: 5,
        backgroundColor: '#eee', // Right track color
        top: 15,
        right: 0,
        borderRadius: 30
    },
    knob: {
        width: 20,
        height: 20,
        backgroundColor: '#007AFF',
        borderRadius: 10,
        position: 'absolute',
        top: 7.5, // Adjust to center the knob on the track
    },
    titleDistance: {
        flex: 1,
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#bb9a65',
        textAlign: "left"
    },
    numDisctance: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        textAlign: "right"
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
})