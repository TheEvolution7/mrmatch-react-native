import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, StyleSheet, TextInput } from 'react-native';


type FieldInputProps = {
    title?: string;
    placeHolder?: string;
    onChangeText?: (text: any) => void;
    contentText?: string;
}

const FieldInput: React.FC<FieldInputProps> = ({ title, placeHolder, onChangeText, contentText }) => {

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.inputtext}
                placeholder={placeHolder}
                placeholderTextColor="rgba(248, 241, 230, 0.2)"
                value={contentText}
                onChangeText={onChangeText}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    inputtext: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: "#f8f1e6",
        borderBottomColor:'rgba(255, 255, 255, 0.35)',
        borderBottomWidth:1,
        paddingBottom:8,
        marginBottom:32

    },
    title: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: "#d7c09c",
        marginBottom:12
    }
});
export default FieldInput;
