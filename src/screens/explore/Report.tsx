import * as React from 'react';
import Container from '../../components/Container';
import { FlatList, Image, Modal, PanResponder, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

export default function Report() {
    const navigation = useNavigation();
    const [positionBar, setPositionBar] = React.useState(1);
    const [positionReason, setPositionReason] = React.useState(0);
    const [positionBehavior, setPositionBehavior] = React.useState(0);
    const [positionSafety, setPositionSafety] = React.useState(0);
    const [comment, setComment] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    const scale = useSharedValue(1);
    scale.value = withRepeat(
        withSequence(
            withTiming(1.2, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
            withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })
        ),
        -1, // Infinite repeat
        true // Reverse on each iteration
    );
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });
    const nextPosition = () => {
        if (positionBar < 4) {
            setPositionBar(positionBar + 1);
            setPositionReason(0);
        } else {
            setModalVisible(true);
        }
    }
    return (
        <Container style={{ backgroundColor: '#131B22', flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
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
                    <View style={[styles.modalView, { paddingHorizontal: 20 }]}>
                        <Text style={styles.titleTxt}>Report Sucessfully</Text>
                        <View style={styles.device}></View>
                        {/* <Animated.View style={animatedStyle}> */}
                            <Image
                                source={require('../../assets/images/blockSuccess.png')}
                                style={{ width: 180, height: 186, marginTop: 23, marginBottom: 50 }}>
                            </Image>
                        {/* </Animated.View> */}

                        <Text style={styles.txt5}>Thank you for reaching out about your experience.</Text>
                        <Text style={[styles.txt1, { color: '#8d8d8b', marginTop: 22, textAlign: 'center' }]}>We take reports of this nature very seriously. It’s important to us that you feel safe. Someone from our team will be reviewing the info you provided. If you need additional support, please visit our <Text style={{ color: '#bb9a65' }}>Safety Center</Text> for helpful resources</Text>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(false);
                            navigation.goBack();
                        }} style={{ width: '100%', marginTop: 36, marginBottom: 40 }}>
                            <LinearGradient locations={[0, 1]} colors={['#bb9a65', '#775d34']} useAngle={true} angle={101.24} style={{ height: 56, borderRadius: 30, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.txt4, { color: '#f8f1e6' }]}>Done</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.header}>
                <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/images/btnBack.png')}
                        style={styles.btnBack}>
                    </Image>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/images/shield.png')} />
                    <Text style={[styles.txtHeader]}>Report Jessica</Text>
                </View>
                <Image
                    source={require('../../assets/images/fi_headPhone.png')} />
            </View>
            <View style={styles.wrapContent}>
                <View style={{ flexDirection: 'row', marginTop: 27 }}>
                    <View style={styles.barPosition} >
                        {positionBar >= 2 && <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={styles.barPosition}>
                        </LinearGradient>}
                    </View>
                    <View style={[styles.barPosition, { marginHorizontal: 8 }]} >
                        {positionBar >= 3 && <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={styles.barPosition}>
                        </LinearGradient>}
                    </View>
                    <View style={styles.barPosition} >
                        {positionBar >= 4 && <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={styles.barPosition}>
                        </LinearGradient>}
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.txt1, { flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: 9, opacity: positionBar <= 2 ? 1 : 0.4 }]}>Reason</Text>
                    <Text style={[styles.txt1, { flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: 9, opacity: positionBar == 3 ? 1 : 0.4 }]}>Detail</Text>
                    <Text style={[styles.txt1, { flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: 9, opacity: positionBar == 4 ? 1 : 0.4 }]}>Submit</Text>
                </View>
                <View style={styles.device} />
                {positionBar === 1 &&
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                        <Text style={[styles.txt2, { marginTop: 32 }]}>Why did you report this user?</Text>
                        <Text style={styles.txt3}>We care about you and what you have to say. If you are in immediate danger, call your local authorities. What you share with us here will be treated confidentially.</Text>
                        <TouchableOpacity onPress={() => setPositionReason(1)} style={[styles.btnReason, { marginTop: 40 }]}>
                            {positionReason === 1 ? <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnReason, { borderWidth: 0 }]}>
                                <Text style={[styles.txt4, { color: positionReason == 1 ? '#f8f1e6' : '#d7c09c' }]}>Their bio desciption</Text>
                            </LinearGradient> :
                                <Text style={styles.txt4}>Their bio desciption</Text>
                            }

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPositionReason(2)} style={[styles.btnReason, { marginTop: 16 }]}>
                            {positionReason === 2 ? <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnReason, { borderWidth: 0 }]}>
                                <Text style={[styles.txt4, { color: positionReason == 2 ? '#f8f1e6' : '#d7c09c' }]}>Their profile photos</Text>
                            </LinearGradient> :
                                <Text style={styles.txt4}>Their profile photos</Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPositionReason(3)} style={[styles.btnReason, , { marginTop: 16 }]}>
                            {positionReason === 3 ? <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnReason, { borderWidth: 0 }]}>
                                <Text style={[styles.txt4, { color: positionReason == 3 ? '#f8f1e6' : '#d7c09c' }]}>Something happened in real life</Text>
                            </LinearGradient> :
                                <Text style={styles.txt4}>Something happened in real life</Text>
                            }

                        </TouchableOpacity>
                        <View style={styles.wrapTxt}>
                            <Text style={styles.txt1}>To report a specific message, go to your chat, tap and hold the message to report. If you need to report something else on their profile, go to their profile, look for the thing you want to report, then tap the shield to report</Text>
                        </View>
                    </ScrollView>}
                {positionBar === 2 &&
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                        <Text style={[styles.txt2, { marginTop: 32 }]}>What is your reason for reporting?</Text>
                        <Text style={[styles.txt5, { marginTop: 32 }]}>Misleading Profile or Behavior</Text>
                        <TouchableOpacity onPress={() => setPositionReason(1)} style={[styles.btnReason, { marginTop: 30 }]}>
                            {positionReason === 1 ? <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnReason, { borderWidth: 0 }]}>
                                <Text style={[styles.txt4, { color: positionReason == 1 ? '#f8f1e6' : '#d7c09c' }]}>Fake profile, scammer, not one person</Text>
                            </LinearGradient> :
                                <Text style={styles.txt4}>Fake profile, scammer, not one person</Text>
                            }

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPositionReason(2)} style={[styles.btnReason, { marginTop: 16 }]}>
                            {positionReason === 2 ? <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnReason, { borderWidth: 0 }]}>
                                <Text style={[styles.txt4, { color: positionReason == 2 ? '#f8f1e6' : '#d7c09c' }]}>Someone is selling something</Text>
                            </LinearGradient> :
                                <Text style={styles.txt4}>Someone is selling something</Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPositionReason(3)} style={[styles.btnReason, , { marginTop: 16 }]}>
                            {positionReason === 3 ? <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnReason, { borderWidth: 0 }]}>
                                <Text style={[styles.txt4, { color: positionReason == 3 ? '#f8f1e6' : '#d7c09c' }]}>Someone under 18 is involved</Text>
                            </LinearGradient> :
                                <Text style={styles.txt4}>Someone under 18 is involved</Text>
                            }
                        </TouchableOpacity>
                        <View style={styles.device} />
                        <Text style={[styles.txt5, { marginTop: 32 }]}>Harassing or Bad Behavior</Text>
                        <TouchableOpacity onPress={() => setPositionBehavior(1)} style={[styles.btnReason, { marginTop: 30 }]}>
                            {positionBehavior === 1 ? <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnReason, { borderWidth: 0 }]}>
                                <Text style={[styles.txt4, { color: positionBehavior == 1 ? '#f8f1e6' : '#d7c09c' }]}>Nudity or something sexually explicit</Text>
                            </LinearGradient> :
                                <Text style={styles.txt4}>Nudity or something sexually explicit</Text>
                            }

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPositionBehavior(2)} style={[styles.btnReason, { marginTop: 16 }]}>
                            {positionBehavior === 2 ? <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnReason, { borderWidth: 0 }]}>
                                <Text style={[styles.txt4, { color: positionBehavior == 2 ? '#f8f1e6' : '#d7c09c' }]}>Abusive/hateful/threating behavior</Text>
                            </LinearGradient> :
                                <Text style={styles.txt4}>Abusive/hateful/threating behavior</Text>
                            }
                        </TouchableOpacity>

                        <Text style={[styles.txt5, { marginTop: 32 }]}>Physical Safety Concerns</Text>
                        <TouchableOpacity onPress={() => setPositionSafety(1)} style={[styles.btnReason, { marginTop: 30 }]}>
                            {positionSafety === 1 ? <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnReason, { borderWidth: 0 }]}>
                                <Text style={[styles.txt4, { color: positionSafety == 1 ? '#f8f1e6' : '#d7c09c' }]}>Possible threat to themselves or others</Text>
                            </LinearGradient> :
                                <Text style={styles.txt4}>Possible threat to themselves or others</Text>
                            }

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPositionSafety(2)} style={[styles.btnReason, { marginTop: 16, marginBottom: 30 }]}>
                            {positionSafety === 2 ? <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnReason, { borderWidth: 0 }]}>
                                <Text style={[styles.txt4, { color: positionSafety == 2 ? '#f8f1e6' : '#d7c09c' }]}>Real life physical/sexual harm or stalking</Text>
                            </LinearGradient> :
                                <Text style={styles.txt4}>Real life physical/sexual harm or stalking</Text>
                            }
                        </TouchableOpacity>
                    </ScrollView>
                }
                {positionBar === 3 &&
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                        <Text style={[styles.txt2, { marginTop: 32 }]}>Can you tell us what happened?</Text>
                        <TouchableOpacity onPress={() => setPositionReason(1)} style={[styles.btnReason, { marginTop: 40 }]}>
                            {positionReason === 1 ? <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnReason, { borderWidth: 0 }]}>
                                <Text style={[styles.txt4, { color: positionReason == 1 ? '#f8f1e6' : '#d7c09c' }]}>Harassment or bullying</Text>
                            </LinearGradient> :
                                <Text style={styles.txt4}>Harassment or bullying</Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPositionReason(2)} style={[styles.btnReason, { marginTop: 16 }]}>
                            {positionReason === 2 ? <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnReason, { borderWidth: 0 }]}>
                                <Text style={[styles.txt4, { color: positionReason == 2 ? '#f8f1e6' : '#d7c09c' }]}>Hate speech</Text>
                            </LinearGradient> :
                                <Text style={styles.txt4}>Hate speech</Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPositionReason(3)} style={[styles.btnReason, , { marginTop: 16 }]}>
                            {positionReason === 3 ? <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnReason, { borderWidth: 0 }]}>
                                <Text style={[styles.txt4, { color: positionReason == 3 ? '#f8f1e6' : '#d7c09c' }]}>Threats or intimidation</Text>
                            </LinearGradient> :
                                <Text style={styles.txt4}>Threats or intimidation</Text>
                            }

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPositionReason(3)} style={[styles.btnReason, , { marginTop: 16 }]}>
                            {positionReason === 4 ? <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnReason, { borderWidth: 0 }]}>
                                <Text style={[styles.txt4, { color: positionReason == 4 ? '#f8f1e6' : '#d7c09c' }]}>Sextortion</Text>
                            </LinearGradient> :
                                <Text style={styles.txt4}>Sextortion</Text>
                            }
                        </TouchableOpacity>
                    </ScrollView>}
                {positionBar === 4 &&
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                        <Text style={[styles.txt2, { marginTop: 32 }]}>You could share more details with us</Text>
                        <Text style={[styles.txt5, { marginTop: 32 }]}>Add a Comment</Text>
                        <TextInput
                            style={[styles.Wrapinput, { opacity: comment.length >= 1 ? 1 : 0.4 }]}
                            placeholder='Please provide additional details about what you’re reporting'
                            placeholderTextColor={'#f8f1e6'}
                            multiline
                            onChangeText={text => setComment(text)}
                            value={comment} />
                    </ScrollView>}
                {positionBar > 4 && <View style={{ flex: 1 }}></View>}
                <View style={[styles.device, { marginTop: 0 }]} />
                <Text style={[styles.txt4, { marginTop: 34, textAlign: 'center' }]}>We wont tell Jessica you reported them</Text>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 38 }}>
                    <TouchableOpacity style={styles.btnAction}>
                        <Text style={styles.txt4}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nextPosition()} style={[styles.btnAction, { marginLeft: 15 }]}>
                        {positionReason >= 1 || comment.length >= 1 ?
                            <LinearGradient locations={[0, 1]} colors={['rgba(187, 154, 101, 1)', 'rgba(119, 93, 52, 1)']} useAngle={true} angle={101.24} style={[styles.btnAction, { width: '100%' }]}>
                                <Text style={[styles.txt4, { color: '#F8F1E6' }]}>Next</Text>
                            </LinearGradient>
                            :
                            <Text style={[styles.txt4, { opacity: 0.3 }]}>Next</Text>}
                    </TouchableOpacity>
                </View>
            </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 10
    },
    wrapContent: {
        flex: 1,
        marginTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'rgba(28, 37, 45, 1)',
        paddingHorizontal: 20
    },
    barPosition: {
        flex: 1,
        height: 4,
        borderRadius: 10,
        backgroundColor: '#40505f'
    },
    txt1: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
    },
    device: {
        height: 2,
        width: '120%',
        backgroundColor: 'rgba(107, 113, 118, 1)',
        opacity: 0.5,
        marginTop: 26,
        marginLeft: -20
    },
    txt2: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: '#bb9a65',
    },
    txt3: {
        fontSize: 14,
        letterSpacing: -0.2,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        color: '#f8f1e6',
        opacity: 0.5,
        marginTop: 10
    },
    txt4: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: '#d7c09c',
    },
    txt5: {
        fontSize: 18,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        textAlign: 'center'
    },
    btnReason: {
        borderRadius: 30,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: "solid",
        borderColor: '#d7c09c',
        borderWidth: 1,
        width: '100%'
        // marginTop: 16
    },
    wrapTxt: {
        borderRadius: 10,
        backgroundColor: '#40505f',
        marginTop: 55,
        padding: 18
    },
    btnAction: {
        flex: 1,
        backgroundColor: '#2c3843',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    Wrapinput: {
        borderWidth: 1,
        borderRadius: 6,
        opacity: 0.4,
        height: 124,
        padding: 18,
        textAlignVertical: 'top',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        marginTop: 20,
        color: '#f8f1e6'
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(19, 27, 34, 0.1)'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        paddingHorizontal: 20
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
    titleTxt: {
        fontSize: 21,
        letterSpacing: -0.2,
        lineHeight: 35,
        fontWeight: "500",
        fontFamily: "Inter-Medium",
        color: '#f8f1e6',
        marginTop: 22
    },
})