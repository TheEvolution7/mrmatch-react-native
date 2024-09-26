import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import HeaderScreen from '../../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Safety from './Safety';
import Features from './Features';
import Information from './Information';

const SafetySupport: React.FC = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(1);
    return (
        <Container style={{ paddingHorizontal: 20 }}>
            <HeaderScreen title='Safety & Support' />
            <View style={styles.warpTab}>
                <TouchableOpacity
                    style={[styles.segment, selected === 1 && styles.selectedSegment]}
                    onPress={() => setSelected(1)}
                >
                    {selected === 1 ?
                        <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.segment, selected === 1 && styles.selectedSegment]}>
                            <Text style={[styles.text]}>
                                Safety
                            </Text>
                        </LinearGradient>
                        :
                        <Text style={[styles.text]}>
                            Safety
                        </Text>
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.segment, selected === 2 && styles.selectedSegment]}
                    onPress={() => setSelected(2)}
                >
                    {selected === 2 ?
                        <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.segment, selected === 2 && styles.selectedSegment]}>
                            <Text style={[styles.text]}>
                                Features
                            </Text>
                        </LinearGradient>
                        :
                        <Text style={[styles.text]}>
                            Features
                        </Text>
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.segment, selected === 3 && styles.selectedSegment]}
                    onPress={() => setSelected(3)}
                >
                    {selected === 3 ?
                        <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.segment, selected === 3 && styles.selectedSegment]}>
                            <Text style={[styles.text]}>
                                Information
                            </Text>
                        </LinearGradient>
                        :
                        <Text style={[styles.text]}>
                            Information
                        </Text>
                    }
                </TouchableOpacity>
            </View>
            {selected === 1 && <Safety />}
            {selected === 2 && <Features />}
            {selected === 3 && <Information />}
        </Container>
    )
}
const styles = StyleSheet.create({
    warpTab: {
        flexDirection: 'row',
        backgroundColor: '#212c36', // Dark background color for unselected
        borderRadius: 25,
        height: 44,
        marginTop: 23,
        // padding: 5,
    },
    segment: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 10,
        borderRadius: 25,
        width: '100%',
    },
    selectedSegment: {
        backgroundColor: '#D4B07A', // Gold color for selected segment
    },
    text: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
    selectedText: {
        color: '#f8f1e6', // White text color for selected text
    },
    wrapModule: {
        borderRadius: 10,
        backgroundColor: "#1c252d",
        borderStyle: "solid",
        borderColor: "#40505f",
        borderWidth: 1,
        height: 83,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
})
export default SafetySupport;