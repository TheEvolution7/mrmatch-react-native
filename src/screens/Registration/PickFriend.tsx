import * as React from 'react';
import Container from '../../components/Container';
import { Dimensions, FlatList, Image, ImageBackground, PanResponder, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const heightScreen = Dimensions.get('window').height;

export default function PickFriend() {
    const navigation = useNavigation();

    const dataAvatar = [1, 2, 3, 4, 5, 6];
    const users = [
        { id: '1', name: 'Emily Johnson', avatar: require('../../assets/images/avatarFind.png'), checked: false },
        { id: '2', name: 'Ava Martinez', avatar: require('../../assets/images/avatarFind.png'), checked: false },
        { id: '3', name: 'Jessica Brown', avatar: require('../../assets/images/avatarFind.png'), checked: false },
        { id: '4', name: 'Lucas Rodriguez', avatar: require('../../assets/images/avatarFind.png'), checked: false },
        { id: '5', name: 'Sophia Chen', avatar: require('../../assets/images/avatarFind.png'), checked: false },
    ];
    const [selectedUsers, setSelectedUsers] = React.useState(users);


    const toggleCheck = (id) => {
        setSelectedUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === id ? { ...user, checked: !user.checked } : user
            )
        );
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => toggleCheck(item.id)} style={styles.itemContainer}>
            <Image source={require('../../assets/images/avatarFind.png')} style={styles.avatar} />
            <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.descriptionText}>Lorem Ipsum</Text>
            </View>
            <View style={styles.checkmarkContainer}>
                {item.checked ? <Image source={require('../../assets/images/checked.png')} style={styles.checkedCircle} /> : <Image source={require('../../assets/images/uncheck.png')} style={styles.uncheckedCircle} />}
            </View>
        </TouchableOpacity>
    );

    return (
        <Container style={{ backgroundColor: '#131B22', flex: 1, paddingHorizontal: 20 }}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#AAA"
                // value={searchQuery}
                // onChangeText={setSearchQuery}
                />
                <Image style={styles.iconSearch} source={require('../../assets/images/searchIcon.png')} width={24} height={24} />
            </View>
            <Text style={styles.txt1}>Pick your people</Text>
            <Text style={styles.txt2}>Using your contacts list. We don't send notification when you edit your list.</Text>
            <View style={styles.device}></View>
            <FlatList
                data={selectedUsers}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={{ flex: 1 }}
            />
            <TouchableOpacity onPress={() => {
                navigation.navigate('LoginScreen');
            }} style={styles.next}>
                <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.lineGra}>
                    <Text style={styles.nextTxt}>Done</Text>
                </LinearGradient>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
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
        fontSize: 24,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
    },
    txt2: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        opacity: 0.5
    },
    device: {
        backgroundColor: '#6B7176',
        height: 2,
        opacity: 0.5,
        marginHorizontal: -20,
        marginTop: 20
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // padding: 15,
        marginTop: 25
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    nameText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    descriptionText: {
        color: '#999',
    },
    checkmarkContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#d4af37',
    },
    uncheckedCircle: {
        width: 24,
        height: 24,
        // borderRadius: 12,
        // borderWidth: 2,
        // borderColor: '#999',
    },
    next: {
        position: 'absolute',
        bottom: 34,
        height: 56,
        borderRadius: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextTxt: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: "center",
    },
    lineGra: {
        borderRadius: 30,
        width: '100%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
})