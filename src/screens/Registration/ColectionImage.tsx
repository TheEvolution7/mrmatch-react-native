import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, PanResponder, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import DocumentPicker, { types } from 'react-native-document-picker';

export default function CollectionImage() {
    const navigation = useNavigation();
    const [linkImage1, setLinkImage1] = React.useState(null);
    const [linkImage2, setLinkImage2] = React.useState(null);
    const [linkImage3, setLinkImage3] = React.useState(null);
    const [linkImage4, setLinkImage4] = React.useState(null);
    const [linkImage5, setLinkImage5] = React.useState(null);
    const [linkImage6, setLinkImage6] = React.useState(null);

    const pickImage = async (value) => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.images], // Allows picking image files
            });

            // If the user selects an image, update the state
            switch (value) {
                case 1:
                    setLinkImage1(result[0].uri);
                    break;
                case 2:
                    setLinkImage2(result[0].uri);
                    break;
                case 3:
                    setLinkImage3(result[0].uri);
                    break;
                case 4:
                    setLinkImage4(result[0].uri);
                    break;
                case 5:
                    setLinkImage5(result[0].uri);
                    break;
                case 5:
                    setLinkImage6(result[0].uri);
                    break;
                default:
                    break;
            }
            if (result && result[0]) {
                setLinkImage1(result[0].uri);
                console.log(result[0].uri);
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User canceled the picker');
            } else {
                console.log('Unknown error: ', err);
            }
        }
    };

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
                        source={require('../../assets/images/groupSlide_6.png')}
                        style={styles.grSlide}>
                    </Image>
                </View>
            </View>
            <View style={styles.wrapContent}>
                <Text style={styles.titleCode}>Show your best self</Text>
                <Text style={styles.description}>Upload up to six of your best photos to make a fantastic first impression. Let your personality shine.</Text>
                <View style={styles.wrapImage}>
                    <TouchableOpacity onPress={() => pickImage()} style={styles.imageSelected}>
                        {linkImage1 ?
                            <Image source={{ uri: linkImage1 }} resizeMode='cover' style={{ height: 180, flex: 1, borderRadius: 10 }} />
                            :
                            <Image source={require('../../assets/images/plusIcon.png')} />
                        }

                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.imageSelected, { marginHorizontal: 16 }]}>
                        {linkImage2 ?
                            <Image source={{ uri: linkImage2 }} resizeMode='cover' style={{ height: 180, flex: 1, borderRadius: 10 }} />
                            :
                            <Image source={require('../../assets/images/plusIcon.png')} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.imageSelected]}>
                        {linkImage3 ?
                            <Image source={{ uri: linkImage3 }} resizeMode='cover' style={{ height: 180, flex: 1, borderRadius: 10 }} />
                            :
                            <Image source={require('../../assets/images/plusIcon.png')} />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapImage}>
                    <TouchableOpacity onPress={() => pickImage()} style={styles.imageSelected}>
                        {linkImage1 ?
                            <Image source={{ uri: linkImage1 }} resizeMode='cover' style={{ height: 180, flex: 1, borderRadius: 10 }} />
                            :
                            <Image source={require('../../assets/images/plusIcon.png')} />
                        }

                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.imageSelected, { marginHorizontal: 16 }]}>
                        {linkImage2 ?
                            <Image source={{ uri: linkImage2 }} resizeMode='cover' style={{ height: 180, flex: 1, borderRadius: 10 }} />
                            :
                            <Image source={require('../../assets/images/plusIcon.png')} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.imageSelected]}>
                        {linkImage3 ?
                            <Image source={{ uri: linkImage3 }} resizeMode='cover' style={{ height: 180, flex: 1, borderRadius: 10 }} />
                            :
                            <Image source={require('../../assets/images/plusIcon.png')} />
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Notification');
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
        flex: 1,
        marginBottom: 90
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
        // width: 308,
        opacity: 0.5,
        marginTop: 10
    },
    wrapImage: {
        flexDirection: 'row',
        marginTop: 46
    },
    imageSelected: {
        flex: 1,
        margin: 'auto',
        borderRadius: 10,
        // borderColor: 'red',
        height: 180,
        backgroundColor: 'rgba(44, 56, 67, 0.2)',
        borderStyle: "solid",
        borderColor: '#2c3843',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})