import React, { useCallback, useRef, useState } from 'react';
import {
    Image,
    StyleSheet,
    View,
    type ImageSourcePropType,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';
import Container from '../../components/Container';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
export default function Match() {
    const navigation = useNavigation();
    const [selected, setSelected] = useState('Likes');
    const dataMembers = [
        {
            id: 1,
            image: require('../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 2,
            image: require('../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 3,
            image: require('../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 4,
            image: require('../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 5,
            image: require('../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 6,
            image: require('../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 7,
            image: require('../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 8,
            image: require('../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 9,
            image: require('../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
        {
            id: 10,
            image: require('../../assets/images/profileMember.png'),
            name: 'Jessica (24)',
            distance: '5'
        },
    ]

    const renderItem =({item})=>{
        return(
            <View style={styles.wrapInfor}>
                <Image source={item?.image}/>
                <View>
                    <Text>{item?.name}</Text>
                    <Text>{item?.distance} km away</Text>
                </View>
            </View>
        )
    }

    return (
        <Container style={styles.container} >
            <View style={styles.wrapSetting}>
                <View>
                    <Image
                        source={require('../../assets/images/heart.png')}
                        style={styles.mrMatch}>
                    </Image>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginRight: 22 }}>
                    <Text style={styles.txt1}>Matches</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity >
                        <Image
                            source={require('../../assets/images/searchIcon.png')} >
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 16 }} onPress={() => { }}>
                        <Image
                            source={require('../../assets/images/fi_sliders.png')}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginLeft: 16 }}>
                        <Image
                            source={require('../../assets/images/fi_headPhone.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.warpTab}>
                <TouchableOpacity
                    style={[styles.segment, selected === 'Likes' && styles.selectedSegment]}
                    onPress={() => setSelected('Likes')}
                >
                    {selected === 'Likes' ?
                        <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.segment, selected === 'Likes' && styles.selectedSegment]}>
                            <Text style={[styles.text]}>
                                Likes (85)
                            </Text>
                        </LinearGradient>
                        :
                        <Text style={[styles.text]}>
                            Likes (85)
                        </Text>
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.segment, selected === 'Super Likes' && styles.selectedSegment]}
                    onPress={() => setSelected('Super Likes')}
                >
                    {selected === 'Super Likes' ?
                        <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.segment, selected === 'Likes' && styles.selectedSegment]}>
                            <Text style={[styles.text]}>
                                Super Likes (24)
                            </Text>
                        </LinearGradient>
                        :
                        <Text style={[styles.text]}>
                            Super Likes (24)
                        </Text>
                    }
                </TouchableOpacity>
            </View>
            <FlatList
                data={dataMembers}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2} // Display 2 items per row
                columnWrapperStyle={{}} // Style for the row
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131B22',
        paddingHorizontal: 20
    },
    wrapSetting: {
        flexDirection: 'row',
        height: 29,
        // alignItems: 'flex-start',
        // backgroundColor: 'red'
        // flex: 1
    },
    mrMatch: {
        height: 28.3,
        width: 32,
    },
    txt1: {
        fontSize: 20,
        // lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
        textAlign: 'right',
        marginBottom: 10
    },
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
        width: '100%'
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
    wrapInfor:{
        
    }
})