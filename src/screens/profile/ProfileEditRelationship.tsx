import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import RelaItem from './RelaItem';

const ProfileEditRelationship: React.FC = () => {
    const [relations, setRelation] = useState([
        {
            id: '1',
            icon: require('../../assets/images/rl-1.png'),
            iconActive: require('../../assets/images/rl-1-act.png'),
            title: 'Commit',
            isActive: false,
        },
        {
            id: '2',
            icon: require('../../assets/images/rl-2.png'),
            iconActive: require('../../assets/images/rl-2-act.png'),
            title: 'Dating',
            isActive: false,
        },
        {
            id: '3',
            icon: require('../../assets/images/rl-3.png'),
            iconActive: require('../../assets/images/rl-3-act.png'),
            title: 'Casual',
            isActive: true,
        },
        {
            id: '4',
            icon: require('../../assets/images/rl-4.png'),
            iconActive: require('../../assets/images/rl-4-act.png'),
            title: 'Friendship',
            isActive: false,
        },
        {
            id: '5',
            icon: require('../../assets/images/rl-5.png'),
            iconActive: require('../../assets/images/rl-5-act.png'),
            title: 'Open to Options',
            isActive: false,
        },
        {
            id: '6',
            icon: require('../../assets/images/rl-6.png'),
            iconActive: require('../../assets/images/rl-6-act.png'),
            title: 'Networking',
            isActive: false,
        },
    ]);

    const toggleRelationActive = (id: string) => {
        setRelation((prevRelation) =>
          prevRelation.map((relation) =>
            relation.id === id ? { ...relation, isActive: !relation.isActive } : relation
          )
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Relationship Goals
                </Text>
            </View>

            <View style={styles.relationContainer}>
                {relations.map((item) => (
                    <View style={styles.relationItem} key={item.id}>
                        <RelaItem
                            icon={item.icon}
                            iconActive={item.iconActive}
                            title={item.title}
                            isActive={item.isActive}
                            onPress={() => toggleRelationActive(item.id)}
                        />
                    </View>
                ))}
            </View>

            <View style={styles.separator}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 20,
    },
    header: {
        marginBottom: 10,
    },
    headerText: {
        color: '#BB9A65',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'font-heading', // Assuming you have this font
    },
    relationContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -8,
        marginRight: -8,
    },
    relationItem: {
        minWidth: '50%',
        flex: 1,
    },
    separator: {
        marginTop: 28,
        marginBottom: 28,
        marginLeft: -20,
        marginRight: -20,
        height: 1,
        backgroundColor: '#6B7176',
    },
});

export default ProfileEditRelationship;
