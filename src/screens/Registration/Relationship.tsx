import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, PanResponder, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function SetRelationship() {
    const navigation = useNavigation();
    const dataMenu = [{
        id: 1,
        title: 'Commit',
        icon: require('../../assets/images/commit.png'),
    },
    {
        id: 2,
        title: 'Dating',
        icon: require('../../assets/images/dating.png'),
    },
    {
        id: 3,
        title: 'Casual',
        icon: require('../../assets/images/casual.png'),
    },
    {
        id: 4,
        title: 'FriendShip',
        icon: require('../../assets/images/friendship.png'),
    },
    {
        id: 5,
        title: 'Open to Options',
        icon: require('../../assets/images/commit.png'),
    },
    {
        id: 6,
        title: 'Networking',
        icon: require('../../assets/images/dating.png'),
    },]

    const renderItem = ({ item }) => (
        <TouchableOpacity style={[styles.itemMenu, { marginLeft: item?.id % 2 == 0 ? 16 : 0 }]}>
            <Image source={item?.icon} width={42} height={42} />
            <Text style={styles.itemTxt}>{item.title}</Text>
        </TouchableOpacity>
    );


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
                        source={require('../../assets/images/groupSlide_5.png')}
                        style={styles.grSlide}>
                    </Image>
                </View>
            </View>
            <View style={styles.wrapContent}>
                <Text style={styles.titleCode}>Your relationship goals</Text>
                <Text style={styles.description}>Choose the type of relationship you're seeking on Mr.Match. Love, friendship, or something in between—it's your choice.</Text>
                <FlatList
                    data={dataMenu}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2} // Display 2 items per row
                    columnWrapperStyle={styles.rowMenu} // Style for the row
                    style={{ marginTop: 16, marginBottom:100}}
                />
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Favorite');
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
    wrapContent: {
        paddingHorizontal: 18,
        flex:1
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
    itemMenu: {
        flex: 1,
        height: 121,
        borderRadius: 16,
        backgroundColor: 'rgba(44, 56, 67, 0.2)',
        borderStyle: "solid",
        borderColor: '#2c3843',
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemTxt: {
        fontSize: 16,
        letterSpacing: 0,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#fff',
        marginTop: 12
    },
    rowMenu: {
        marginTop: 24
    }
})