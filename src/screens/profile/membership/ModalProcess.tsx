import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withRepeat } from 'react-native-reanimated';
import Svg, { G, Path, Defs, Stop, LinearGradient, Rect } from 'react-native-svg';
const ModalProcess: React.FC = () => {
    const rotateValue = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotateValue.value}deg` }],
        };
    });

    React.useEffect(() => {
        rotateValue.value = withRepeat(
            withTiming(360, {
                duration: 2000,
                easing: Easing.linear,
            }),
            -1
        );
    }, []);

    return (
        <View style={styles.modalView}>
            <Text style={[styles.titlePayment, { color: '#f8f1e6', }]}>Processing payment...</Text>
            <Animated.View style={[animatedStyle, { marginTop: 36, marginBottom: 36 }]}>
                <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <G id="Group">
                        <Path
                            id="Vector"
                            d="M36.6476 6.35265C36.9608 6.00324 37.3398 5.71898 37.7629 5.5161C38.186 5.31323 38.645 5.19572 39.1135 5.17029C39.582 5.14486 40.051 5.21201 40.4936 5.36791C40.9362 5.5238 41.3437 5.76538 41.6929 6.07884C44.31 8.42129 46.4029 11.2901 47.8344 14.4975C49.266 17.7048 50.0039 21.1784 50 24.6907C50 38.5003 38.8071 49.6907 25 49.6907V42.5479C28.6147 42.5479 32.1442 41.451 35.1221 39.4021C38.1 37.3532 40.386 34.4489 41.6779 31.073C42.9698 27.6971 43.2068 24.0086 42.3575 20.4951C41.5082 16.9816 39.6127 13.8086 36.9214 11.3955C36.2165 10.763 35.7916 9.87647 35.7402 8.93078C35.6889 7.98509 36.0153 7.05772 36.6476 6.35265Z"
                            fill="url(#paint0_linear_2051_2186)"
                        />
                        <Path
                            id="Vector_2"
                            d="M20.8309 0.0388083C21.7563 -0.0987019 22.6986 0.132342 23.4554 0.682272C24.2122 1.2322 24.723 2.05711 24.878 2.97967C25.033 3.90223 24.8198 4.84877 24.2843 5.61583C23.7488 6.38289 22.9337 6.90921 22.0143 7.08166C17.8551 7.78797 14.0801 9.94363 11.3582 13.1668C8.6362 16.3899 7.14292 20.4724 7.14285 24.6912C7.14285 29.4272 9.02423 33.9692 12.3731 37.3181C15.722 40.6669 20.264 42.5483 25 42.5483V49.6912C11.1929 49.6912 0 38.5007 0 24.6912C0 12.4412 8.87142 2.04833 20.8309 0.0388083Z"
                            fill="#BB9A65"
                        />
                    </G>
                    <Defs>
                        <LinearGradient id="paint0_linear_2051_2186" x1="37.5" y1="5.16504" x2="25" y2="42.5464" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#BB9A66" stopOpacity="0" />
                            <Stop offset="1" stopColor="#BB9A66" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            </Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
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
    titlePayment: {
        fontSize: 18,
        lineHeight: 29,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "#bb9a65",
        marginTop: 50
    },
})
export default ModalProcess;