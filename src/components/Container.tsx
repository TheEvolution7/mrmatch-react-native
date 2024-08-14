import {
    ViewStyle,
    // SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    View,
    StatusBar
} from 'react-native';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
    children?: React.ReactElement | React.ReactElement[];
    style?: ViewStyle;
}

const Container = (props: Props) => {
    const { children, style } = props;
    return (
        <SafeAreaView style={[{ flex: 1 }, style]} edges={['top', 'bottom']}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>{children}</View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Container;
