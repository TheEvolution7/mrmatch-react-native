import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, PanResponder, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';

export default function AddTravelLocation() {
    const navigation = useNavigation();
    const [isShowPopularLocation, setShowPopularLocation] = React.useState(false);
    const [isShowMarker, setShowMarker] = React.useState(false);
    const markerRef = React.useRef(null);
    const [locationPin, setLocationPin] = React.useState(null);
    const customMapStyle = [
        {
            elementType: "geometry",
            stylers: [
                {
                    color: "#212121",
                },
            ],
        },
        {
            elementType: "geometry.fill",
            stylers: [
                {
                    saturation: -5,
                },
                {
                    lightness: -5,
                },
            ],
        },
        {
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#757575",
                },
            ],
        },
        {
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#212121",
                },
            ],
        },
        {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
                {
                    color: "#757575",
                },
            ],
        },
        {
            featureType: "administrative.country",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#9E9E9E",
                },
            ],
        },
        {
            featureType: "administrative.land_parcel",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#BDBDBD",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#757575",
                },
            ],
        },
        {
            featureType: "poi.business",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
                {
                    color: "#181818",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#616161",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1B1B1B",
                },
            ],
        },
        {
            featureType: "road",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#2C2C2C",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#8A8A8A",
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
                {
                    color: "#373737",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
                {
                    color: "#3C3C3C",
                },
            ],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [
                {
                    color: "#4E4E4E",
                },
            ],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#616161",
                },
            ],
        },
        {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#757575",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#000000",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#3D3D3D",
                },
            ],
        },
    ];

    const cities = [
        { city: 'Barcelona', country: 'Spain' },
        { city: 'Berlin', country: 'Germany' },
        { city: 'Buenos Aires', country: 'Argentina' },
        { city: 'Cape Town', country: 'South Africa' },
        { city: 'Copenhagen', country: 'Denmark' },
        { city: 'Dubai', country: 'United Arab Emirates' },
        { city: 'Dublin', country: 'Ireland' },
        { city: 'Madrid', country: 'Spain' },
    ];
    const showLocation = (item) => {
        setShowMarker(true);
        setLocationPin(item);
        setShowPopularLocation(false);
    }

    return (
        <Container style={{ backgroundColor: '#131B22', flex: 1, paddingHorizontal: 0 }}>
            <View style={styles.header}>
                <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/btnBack.png')}
                        style={styles.btnBack}>
                    </Image>
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Travel Mode</Text>
                <Image
                    source={require('../../assets/images/locationIc.png')} />
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search a Location"
                    placeholderTextColor="#AAA"
                    // value={searchQuery}
                    // onChangeText={setSearchQuery}
                    onFocus={() => setShowPopularLocation(true)}
                    onSubmitEditing={() => setShowPopularLocation(false)}
                />
                <Image style={styles.iconSearch} source={require('../../assets/images/searchIcon.png')} width={24} height={24} />
            </View>
            {isShowPopularLocation ?
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                    <Text style={styles.txt1}>Popular Location</Text>
                    <View style={styles.device} />
                    {cities.map((item, index) => (
                        <TouchableOpacity onPress={() => showLocation(item)} key={index} style={styles.item}>
                            <Image
                                source={require('../../assets/images/locationIc.png')} />
                            <View style={styles.textContainer}>
                                <Text style={styles.city}>{item.city}</Text>
                                <Text style={styles.country}>{item.country}</Text>
                            </View>

                        </TouchableOpacity>
                    ))}
                </View>
                :
                <MapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    googleMapId='d332ea0c79655d88'
                    style={{ flex: 1, marginTop: 15, borderRadius: 20 }}
                // customMapStyle={customMapStyle}
                >
                    {isShowMarker && <Marker
                        coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                        image={require('../../assets/images/pinIc.png')}
                        ref={markerRef}
                    // style={{ height: 49, width: 40 }}
                    >
                        <Callout tooltip={true}>
                            <View style={styles.calloutContainer}>
                                <View style={styles.calloutBubble}>
                                    <View style={styles.calloutContent}>
                                        {/* <Icon name="airplane-outline" size={24} color="#FFF" style={styles.calloutIcon} /> */}
                                        <Image source={require('../../assets/images/flightIc.png')} style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                                        <View style={styles.calloutText}>
                                            <Text style={styles.calloutTitle}>{locationPin?.city}</Text>
                                            <Text style={styles.calloutSubtitle}>{locationPin?.country}</Text>
                                        </View>
                                        <Image
                                            source={require('../../assets/images/rightArrow.png')} style={{ height: 14, width: 7, marginRight: 18, marginLeft: 30 }} />
                                    </View>
                                </View>
                            </View>
                        </Callout>
                    </Marker>}

                </MapView>}

        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        // height: 20,
        marginTop: 20,
        paddingHorizontal: 20
    },
    btnBack: {
        height: 14,
        width: 7,
    },
    txtHeader: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
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
        marginHorizontal: 20
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
    txt1: {
        fontSize: 20,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        marginTop: 7
    },
    device: {
        height: 2,
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 20,
        width: '120%',
        marginLeft: -20
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24

    },
    icon: {
        marginRight: 20,
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 16
    },
    city: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
    },
    country: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
    },
    calloutContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    calloutBubble: {
        flexDirection: 'row',
        backgroundColor: '#BB9A65', // Gold color for the callout
        borderRadius: 10,
        // padding: 10,
        alignItems: 'center',
        height: 73,
    },
    calloutContent: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius: 10, borderBottomLeftRadius: 10
    },
    calloutText: {
        flexDirection: 'column',
        marginLeft: 22,
        marginRight: 10,
    },
    calloutTitle: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
    },
    calloutSubtitle: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
    calloutIcon: {
        marginRight: 10,
    },
})