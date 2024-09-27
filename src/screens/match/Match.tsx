import React, { useCallback, useRef, useState } from 'react';
import {
    Image,
    StyleSheet,
    View,
    type ImageSourcePropType,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Dimensions,
    TextInput
} from 'react-native';
import Container from '../../components/Container';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const screenWidth = Dimensions.get('window').width;

export default function Match({ showModalFilter }) {
    const navigation = useNavigation();
    const [selected, setSelected] = useState('Likes');
    const [isFocusSearch, setFocusSearch] = useState(false);
    const [textSearch, setTextSearch] = useState('');
    const input1Ref = useRef(null);
    const [arrayRecent, setArrayRecent] = useState(['Francene Vandyne', 'Cyndy Lillibridge', 'Marci Senter'])
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

    const removeRecent = (item) => {
        let tmp = arrayRecent.filter((text) => text !== item);
        setArrayRecent(tmp);
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ProfileMember')} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.overlay} />
            <View style={styles.textContainer}>
                <LinearGradient style={{ borderRadius: 10, width: '100%', flex: 1 }} locations={[0, 0.32, 0.49, 0.65, 0.82, 1]} colors={['rgba(28, 37, 45, 0)', 'rgba(28, 37, 45, 0.6)', 'rgba(28, 37, 45, 0.75)', 'rgba(28, 37, 45, 0.85)', 'rgba(28, 37, 45, 0.95)', '#1c252d']} useAngle={true} angle={180} >
                    <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.name}>
                                {item.name}
                            </Text>
                            <Image
                                source={require('../../assets/images/verifyIc_30.png')}
                                style={{ width: 30, height: 30 }} />
                        </View>

                        <Text style={styles.distance}>{item.distance} km away</Text>
                    </View>
                </LinearGradient>
            </View>
        </TouchableOpacity>
    );
    return (
        <Container style={styles.container} >
            {isFocusSearch ?
                <View style={{}}>
                    <View style={styles.searchContainer}>
                        <TextInput
                            ref={input1Ref}
                            style={styles.searchInput}
                            placeholder="Search a Location"
                            placeholderTextColor="#AAA"
                            value={textSearch}
                            onChangeText={setTextSearch}
                            // onFocus={() => setShowPopularLocation(true)}
                            onSubmitEditing={() => {
                                let tmp = arrayRecent;
                                tmp.push(textSearch);
                                setTextSearch('');
                                setFocusSearch(false);
                            }}
                        />
                        <Image style={styles.iconSearch} source={require('../../assets/images/searchIcon.png')} width={24} height={24} />
                        <TouchableOpacity onPress={() => {
                            setTextSearch('');
                            setFocusSearch(false);
                        }} style={styles.iconClear} >
                            <Image source={require('../../assets/images/clearSearch.png')} width={24} height={24} />
                        </TouchableOpacity>

                    </View>
                </View>
                :
                <>
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
                        <View style={{ flexDirection: 'row', justifyContent: 'center' , alignItems:'center'}}>
                            <TouchableOpacity onPress={() => {
                                setFocusSearch(true);
                                setTimeout(() => {
                                    input1Ref.current.focus();
                                }, 300);
                            }}>
                                <Image
                                    source={require('../../assets/images/searchIcon.png')} >
                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 16 }} onPress={() => showModalFilter()}>
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
                </>
            }
            {textSearch.length > 0 || !isFocusSearch ?
                <FlatList
                    data={dataMembers}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.list}
                    columnWrapperStyle={{ marginTop: 14 }}
                    style={{ flex: 1 }}
                />
                :
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.recentAll}>Recent Searches</Text>
                        <TouchableOpacity onPress={() => setArrayRecent([])}>
                            <Image source={require('../../assets/images/removeRecentAll.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.device} />
                    {
                        arrayRecent.map((item) => {
                            return (
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                                    <Text style={styles.receentText}>{item}</Text>
                                    <TouchableOpacity onPress={() => removeRecent(item)}>
                                        <Image source={require('../../assets/images/removeRecent.png')} />
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>
            }

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
    wrapInfor: {
        // width: screenWidth / 2.34,
        // height: screenWidth / 1.53,
        flex: 1,
        // margin: 10,
        borderRadius: 10,
    },
    list: {
        // paddingHorizontal: 10,
    },
    card: {
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 10,
        overflow: 'hidden',
        // backgroundColor: '#1F2227',
        // alignItems: 'center'
    },
    image: {
        // width: screenWidth / 2.34,
        height: screenWidth / 1.53,
        width: '100%',
        borderRadius: 10,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        // backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        // backgroundColor: 'red',
        height: screenWidth / 4.59,
        // backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    name: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 21,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#f8f1e6',
    },
    distance: {
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
        fontSize: 9,
        marginTop: 5,
    },
    searchContainer: {
        backgroundColor: '#2c3843',
        borderRadius: 25,
        // paddingVertical: 8,
        paddingLeft: 48,
        marginBottom: 18,
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        marginTop: 20,
        // marginHorizontal: 20
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
    iconClear: {
        position: 'absolute',
        top: 16,
        right: 16
    },
    recentAll: {
        fontSize: 20,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        flex: 1
    },
    receentText: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        flex: 1
    },
    device: {
        height: 2,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 20,
        marginLeft: -20
    }
})