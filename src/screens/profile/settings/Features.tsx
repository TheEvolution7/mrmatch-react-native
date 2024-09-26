import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, Modal } from 'react-native';
import Container from '../../../components/Container';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Features: React.FC = () => {
    const navigation = useNavigation();
    const featureLisst = [
        {
            id: 1,
            title: 'How to use SafeDate',
            description: 'Lorem ipsum dolor sit amet consectet. Vulputate quis mattis est risus eu.',
            image: require('../../../assets/images/feature1.png')
        },
        {
            id: 2,
            title: 'How to Report',
            description: 'Lorem ipsum dolor sit amet consectet. Vulputate quis mattis est risus eu.',
            image: require('../../../assets/images/feature2.png')
        },
        {
            id: 3,
            title: 'How to Block',
            description: 'Lorem ipsum dolor sit amet consectet. Vulputate quis mattis est risus eu.',
            image: require('../../../assets/images/feature3.png')
        },
        {
            id: 4,
            title: 'How to Unmatched Someone',
            description: 'Lorem ipsum dolor sit amet consectet. Vulputate quis mattis est risus eu.',
            image: require('../../../assets/images/feature4.png')
        },
        {
            id: 5,
            title: 'How to get a Verified Badge',
            description: 'Lorem ipsum dolor sit amet consectet. Vulputate quis mattis est risus eu.',
            image: require('../../../assets/images/feature5.png')
        },
    ]
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {featureLisst.map((item) => {
                return (
                    <LinearGradient locations={[0, 0.3, 1]} colors={['rgba(187, 154, 101, 0)', 'rgba(187, 154, 101, 0)', 'rgba(119, 93, 52, 0.2)']} useAngle={true} angle={101.24} style={styles.line}>
                        <Image source={item?.image} resizeMode='cover' style={styles.image} />
                        <Text style={styles.title}>{item?.title}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 6, paddingBottom: 24, marginHorizontal: 20 }}>
                            <Text style={styles.desc}>{item?.description}</Text>
                            <Image source={require('../../../assets/images/rightArrow_2.png')} />
                        </View>
                    </LinearGradient >
                )
            })}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    line: {
        marginTop: 40,
        borderRadius: 10,
        backgroundColor: '#1c252d',
    },
    image: {
        width: '100%'

    },
    title: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "#f8f1e6",
        marginTop: 24,
        marginLeft: 20
    },
    desc: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        opacity: 0.5,
        marginRight: 15
    }
})
export default Features;