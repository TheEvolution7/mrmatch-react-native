import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function YearSelected() {
    const [email, setEmail] = React.useState('');
    const [isShowClear, setShowClear] = React.useState(false);
    const [isShowError, setShowError] = React.useState(false);
    const navigation = useNavigation();
    const ITEM_HEIGHT = 50;
    const [idSelected, setIdSelected] = React.useState(0);
    const DATA = [
        {
            id: 1,
            title: '1995',
        },
        {
            id: 2,
            title: '1996',
        },
        {
            id: 3,
            title: '3232',
        },
        {
            id: 4,
            title: '1995',
        },
        {
            id: 5,
            title: '1996',
        },
        {
            id: 6,
            title: '1995',
        },
        {
            id: 7,
            title: '1996',
        },
        {
            id: 8,
            title: '3232',
        },
        {
            id: 9,
            title: '1995',
        },
        {
            id: 10,
            title: '1996',
        },
        {
            id: 11,
            title: '1995',
        },
        {
            id: 12,
            title: '1996',
        },
        {
            id: 13,
            title: '3232',
        },
        {
            id: 14,
            title: '1995',
        },
        {
            id: 15,
            title: '1996',
        },
    ];

    const years = Array.from({ length: new Date().getFullYear() - 1899 }, (v, k) => 1900 + k);

    const Item = ({ id }) => (
        <View style={styles.item}>
            {id < idSelected + 1 && <Text style={{}}>{id + 1975}</Text>}
            {id === idSelected + 1 && <Text style={styles.year1}>{id + 1975}</Text>}
            {id === idSelected + 2 && <Text style={styles.year2}>{id + 1975}</Text>}
            {id === idSelected + 3 && <Text style={styles.year3}>{id + 1975}</Text>}
            {id === idSelected + 4 && <Text style={styles.year2}>{id + 1975}</Text>}
            {id === idSelected + 5 && <Text style={styles.year1}>{id + 1975}</Text>}
            {id > idSelected + 5 && <Text style={{}}>{id + 1975}</Text>}
        </View>
    );

    const Item2 = ({ id }) => (
        <View style={styles.item}>
            {id < idSelected && <Text style={{}}>{id + 1975}</Text>}

        </View>
    );

    const selectYearList = DATA.map((item) => {
        return (
            <Item id={item?.id} />
        )
    })

    const onScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const index = Math.round(offsetY / ITEM_HEIGHT);
        console.log('offsetY: ', offsetY, index);
        setIdSelected(index);
    };

    return (
        <Container style={{ backgroundColor: '#131B22', flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/btnBack.png')}
                        style={styles.btnBack}>
                    </Image>
                </TouchableOpacity>
                <View style={styles.wrapSl}>
                    <Image
                        source={require('../../assets/images/groupSlide_2.png')}
                        style={styles.grSlide}>
                    </Image>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.txtEmail}>What year were you born?</Text>
                <View style={styles.selectYear}>
                    {/* <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Item title={item.title} id={item.id} />}
                        keyExtractor={item => item.id}
                        onScroll={onScroll}
                        snapToInterval={ITEM_HEIGHT}
                        // getItemLayout={(data, index) => (
                        //     { length: 50, offset: 50 * index, index }
                        // )}

                        style={{ flex: 1 }}
                    /> */}
                    <ScrollView  onScroll={onScroll} style={{height:220}}>
                        {selectYearList}
                    </ScrollView>

                </View>
            </View>
            {isShowError ?
                <TouchableOpacity style={styles.createAcc}>
                    <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={styles.createAcc}>
                        <Text style={styles.createTxt}>Next step</Text>
                        <Image
                            source={require('../../assets/images/rightArrow.png')}
                            style={{ width: 7, height: 14, marginLeft: 8, alignSelf: 'center', marginTop: 2 }}>
                        </Image>
                    </LinearGradient>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => {
                    setShowError(true);
                    Keyboard.dismiss();
                }} style={styles.next}>
                    <Image
                        source={require('../../assets/images/nextBtn.png')}
                        style={styles.nextBtn}>
                    </Image>
                </TouchableOpacity>
            }

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
    input: {
        marginTop: 0,
        borderBottomColor: 'rgba(255, 255, 255, 0.35)',
        borderBottomWidth: 1,
        color: '#f8f1e6',
        paddingBottom: 8,
        fontSize: 16,
        fontFamily: "Inter-Regular",
        textAlign: "left",
    },
    txtEmail: {
        fontSize: 24,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: "left",
        marginTop: 30
    },
    yourEmail: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
        textAlign: "left",
        marginTop: 28
    },
    btnClear: {
        height: 24,
        width: 24,
        position: 'absolute',
        right: 0,
        top: -26
    },
    next: {
        position: 'absolute',
        bottom: 30,
        right: 20
    },
    nextBtn: {
        width: 56,
        height: 56,
    },
    createAcc: {
        position: 'absolute',
        bottom: 15,
        right: 10,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 30,
        flexDirection: 'row'
    },
    createAccTxt: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: "center"
    },
    errorMess: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        textAlign: "left",
        opacity: 0.5,
        marginTop: 16
    },
    createTxt: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: "center"
    },
    bySigningUp: {
        color: '#f8f1e6'
    },
    termsOfUse1: {
        textDecoration: "underline"
    },
    termsOfUse: {
        color: '#d7c09c'
    },
    bySigningUpContainer: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        textAlign: "left",
        width: 250,
        height: 49,
        marginTop: 30,
    },
    selectYear: {
        marginTop: 50,
        height: 220,
        // backgroundColor: 'red'
    },
    year1: {
        fontSize: 20,
        letterSpacing: -0.2,
        lineHeight: 40,
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
        // textAlign: "center",
        opacity: 0.2,
        // height: 50,
        // flex:1
    },
    year2: {
        fontSize: 30,
        // letterSpacing: -0.3,
        // lineHeight: 40,
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
        // textAlign: "center",
        opacity: 0.5,
        // height: 50,
        // flex: 1
    },
    year3: {
        fontSize: 46,
        // letterSpacing: -0.4,
        // lineHeight: 61,
        // fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#bb9a65',
        textAlign: "center",
        height: 50,
        // backgroundColor: 'yellow',
        // justifyContent:'center',
        // alignItems:'center',
        // alignSelf:'center',
        marginBottom:12
    },
    item: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 1,
        // backgroundColor: 'blue',
        // textAlign: 'center',
    }
})