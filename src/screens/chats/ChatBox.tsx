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
    TextInput,
    Modal
} from 'react-native';
import Container from '../../components/Container';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import DocumentPicker, { types } from 'react-native-document-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ModalSafety from '../../components/ModalSafety';
const screenWidth = Dimensions.get('window').width;

export default function ChatBox({ }) {
    const navigation = useNavigation();
    const [isShowMulti, setShowMulti] = useState(false);
    const [textContent, setTextContent] = useState('');
    const [isShowAudio, setShowAudio] = useState(false);
    const [isShowSafety, setShowSafety]= useState(false);
    const [listData, setListData] = useState([{
        id: 1,
        mess: 'It seems we have a lot in common & have a lot of interest in each other 😂',
        userId: 1,
        time: 'today'
    },
    {
        id: 2,
        mess: 'abcd',
        userId: 4
    },
    {
        id: 3,
        mess: 'It seems we have a lot in common & have a lot of interest in each other 😂',
        userId: 1
    },
    {
        id: 4,
        mess: 'abcd',
        userId: 1
    },
    {
        id: 5,
        mess: 'It seems we have a lot in common & have a lot of interest in each other 😂',
        userId: 2
    },
    {
        id: 6,
        mess: 'abcd',
        userId: 3
    }
    ]);

    const sendMess = () => {
        if (textContent.trim()) {
            setListData([...listData, {
                id: listData.length + 1,
                mess: textContent,
                userId: 1
            }]);
            setTextContent('');
        }
    }

    const openCamera = () => {
        const options = {
            maxWidth: 2000,
            maxHeight: 2000,
            quality: 0.7,
            // selectionLimit:0
            // noData:true
        };

        launchCamera(options, response => {
            if (response['didCancel'] == true) {

            } else {
                if (response['errorCode'] == 'permission') {
                    // Alert.alert(
                    //     "Bạn cần cấp quyền truy cập camera cho ứng dụng để sử dụng tính năng này!",
                    //     "",
                    //     [
                    //         {
                    //             text: "Không",
                    //             onPress: () => console.log("Cancel Pressed"),
                    //             style: "cancel"
                    //         },
                    //         { text: "Cho phép", onPress: () => Linking.openSettings() }
                    //     ]
                    // );

                } else {
                    // console.warn(response);

                }

            }

        });
    }

    const pickImage = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.images], // Allows picking image files
            });

            // If the user selects an image, update the state

            if (result && result[0]) {

            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User canceled the picker');
            } else {
                console.log('Unknown error: ', err);
            }
        }
    };

    const renderItem = ({ item }) => {
        return (
            <>
                {
                    item?.time === 'today' && <Text style={styles.dayMess}>Today</Text>
                }

                {item?.userId == 1 ?
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={styles.timeMess}>09:41</Text>
                            <Image
                                source={require('../../assets/images/checkMess.png')} style={{ height: 14, width: 14, marginLeft: 6 }}
                            />
                        </View>
                        <View style={styles.wrapMess}>
                            <Text style={styles.message}>{item?.mess}</Text>
                        </View>
                    </View>
                    :
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={[styles.wrapMess, { backgroundColor: '#40505f', marginLeft: 0 }]}>
                            <Text style={styles.message}>{item?.mess}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <Text style={styles.timeMess}>09:41</Text>
                        </View>
                    </View>
                }
            </>
        )
    }
    return (
        <Container style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isShowAudio}
                onRequestClose={() => {
                    // setModalVisible(!modalVisible);
                }}>
                <BlurView
                    style={styles.absolute}
                    // blurType="light"
                    blurAmount={1}
                    reducedTransparencyFallbackColor="white"
                />
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.txt1}>Stop talking to send...</Text>
                        <TouchableOpacity onPress={() => setShowAudio(false)}>
                            <Image
                                source={require('../../assets/images/audioRecord.png')} style={{}}
                            />
                        </TouchableOpacity>
                        <Text style={styles.txt2}><Text>Stop talking to send...</Text></Text>
                        <Text style={styles.txt3}>Listening...</Text>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isShowSafety}
                onRequestClose={() => {
                    // setModalVisible(!modalVisible);
                }}>
                <BlurView
                    style={styles.absolute}
                    // blurType="light"
                    blurAmount={1}
                    reducedTransparencyFallbackColor="white"
                />
                <View style={styles.centeredViewSafety}>
                    <View style={styles.modalViewSafety}>
                        <ModalSafety isShowUnmatch={true} setShowSatety={setShowSafety} title='Share Date Details'/>
                    </View>
                </View>
            </Modal>

            <View style={styles.wrapHeader}>
                <TouchableOpacity hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/btnBack.png')} style={{ height: 14, width: 7 }}
                    />
                </TouchableOpacity>
                <Image source={require('../../assets/images/avatarFind.png')} style={styles.avatar} />
                <Text style={styles.name}>Charlotte</Text>
                <TouchableOpacity hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/fi_phone.png')} style={{ height: 24, width: 24 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity hitSlop={30} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/fi_video.png')} style={{ height: 24, width: 24, marginHorizontal: 14 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity hitSlop={30} onPress={() => {setShowSafety(true) }}>
                    <Image
                        source={require('../../assets/images/fi_shield.png')} style={{ height: 24, width: 24 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.device} />
            <FlatList
                // inverted
                data={listData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={{ flex: 1, paddingHorizontal: 20 }}
            />
            <View style={styles.wrapInputSend}>
                <View style={styles.wrapInput}>
                    <TextInput
                        style={styles.inputMess}
                        placeholder="Type a message"
                        placeholderTextColor="rgba(153, 153, 153, 1)"
                        value={textContent}
                        onChangeText={setTextContent}
                    />
                    <TouchableOpacity onPress={() => setShowMulti(!isShowMulti)} style={styles.addImage}>
                        <Image source={require('../../assets/images/plusMess.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.voice}>
                        <Image source={require('../../assets/images/voice.png')} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => sendMess()}>
                    <Image source={require('../../assets/images/sendMess.png')} style={{ marginTop: 21, marginLeft: 14 }} />
                </TouchableOpacity>
                {isShowMulti &&
                    <View style={styles.wrapMultimedia}>
                        <TouchableOpacity onPress={() => openCamera()} style={styles.tool}>
                            <Image source={require('../../assets/images/camera.png')} />
                            <Text style={styles.txtTool}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => pickImage()} style={styles.tool}>
                            <Image source={require('../../assets/images/doc.png')} />
                            <Text style={styles.txtTool}>Document</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => pickImage()} style={styles.tool}>
                            <Image source={require('../../assets/images/image.png')} />
                            <Text style={styles.txtTool}>Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setShowAudio(true);
                            setShowMulti(false);
                        }} style={styles.tool}>
                            <Image source={require('../../assets/images/audio.png')} />
                            <Text style={styles.txtTool}>Audio</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131B22',
        // paddingHorizontal: 20
    },
    wrapHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    avatar: {
        width: 39,
        height: 39,
        marginLeft: 20
    },
    name: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#d7c09c',
        marginLeft: 14,
        flex: 1
    },
    device: {
        height: 2,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 24,
        marginLeft: -20
    },
    wrapInput: {

        // width: '100%',
        flex: 1

    },
    inputMess: {
        height: 56,
        paddingLeft: 45,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#bb9a65',
        borderStyle: "solid",
        marginTop: 21,
        fontSize: 14,
        letterSpacing: 0,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6'
    },
    addImage: {
        position: 'absolute',
        top: 39,
        left: 15
    },
    voice: {
        position: 'absolute',
        top: 39,
        right: 15
    },
    wrapInputSend: {
        // flex: 1,
        backgroundColor: '#1c252d',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 20,
        height: 111,
        flexDirection: 'row'
    },
    dayMess: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: "#d7c09c",
        textAlign: 'center',
        marginTop: 26
    },
    timeMess: {
        fontSize: 10,
        letterSpacing: 0,
        lineHeight: 16,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#fff",
        marginLeft: 10
    },
    message: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
    },
    wrapMess: {
        paddingHorizontal: 22,
        paddingVertical: 16,
        backgroundColor: '#bb9a65',
        flex: 1,
        borderRadius: 10,
        marginLeft: 12
    },
    wrapMultimedia: {
        position: 'absolute',
        height: 131,
        backgroundColor: '#212c36',
        borderRadius: 10,
        bottom: 105,
        left: 24,
        right: 24,
        flexDirection: 'row'
    },
    txtTool: {
        fontSize: 12,
        letterSpacing: 0,
        lineHeight: 19,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6"
    },
    tool: {
        marginHorizontal: 'auto',
        marginTop: 24
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(19, 27, 34, 0.1)'
    },
    modalView: {
        margin: 20,
        // padding: 22,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 21,
        backgroundColor: '#1c252d',
        borderStyle: "solid",
        borderColor: '#bb9a65',
        borderWidth: 1,
        width: '100%',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        paddingHorizontal: 20
    },
    txt1: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: "#f8f1e6",
        marginVertical: 32
    },
    txt2: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        textAlign: "center",
        marginTop: 32
    },
    txt3: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        opacity: 0.5,
        marginTop: 8,
        marginBottom: 32
    },
    modalViewSafety: {
        width: '100%',
        backgroundColor: '#1c252d',
        position: 'absolute',
        bottom: 0,
        // left:0
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    centeredViewSafety: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})