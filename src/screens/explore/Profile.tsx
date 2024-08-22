import * as React from 'react';
import Container from '../../components/Container';
import { Image, Modal, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from "@react-native-community/blur";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withRepeat } from 'react-native-reanimated';
import Svg, { G, Path, Defs, Stop, LinearGradient, Rect } from 'react-native-svg';

export default function Profile() {
    return(
        <Container>
            <Text>Profile</Text>
        </Container>
    )
}