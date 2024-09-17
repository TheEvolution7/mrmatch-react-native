import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CircularProgress from '../../components/CircularProgress';
import ProfileInfoItem from './ProfileInfoItem';

export interface UserProfile {
    name: string;
    birthdate: string;
    gender: string;
    pronouns: string;
    height: string;
    weight: string;
    jobtitle: string;
    company: string;
    school: string;
    livingin: string;
    aboutme: string;
}

const ProfileInfo: React.FC = () => {
    const [progress, setProgress] = useState(10);
    const [infoitem] = useState([
        {
            icon: require('../../assets/images/gender-male.png'),
            title: 'Man',
        },
        {
            icon: require('../../assets/images/Location.png'),
            title: 'Less than a kilometer away',
        },
    ]);

    return (
        <View style={styles.container}>
            <LinearGradient
                locations={[0, 1]}
                colors={['#BB9A65', '#775D3400']}
                useAngle={true}
                angle={-160.24}
                style={styles.profileCompletionContainer}
            >
                <View style={styles.profileCompletionContent}>
                    <LinearGradient
                        locations={[0, 0.3, 1]}
                        colors={['#6F5D3F', '#394148F5', '#1C252D']}
                        useAngle={true}
                        angle={20.24}
                        style={styles.innerGradient}
                    >
                        <CircularProgress size={72} progress={progress} />
                        <View style={styles.profileCompletionTextContainer}>
                            <Text style={styles.profileCompletionTitle}>
                                Complete your profile
                            </Text>
                            <Text style={styles.profileCompletionSubtitle}>
                                Complete to verify your profile and experience the best dating experience and better matches!
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image
                                style={styles.closeIcon}
                                resizeMode="contain"
                                source={require('../../assets/images/close.png')}
                            />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </LinearGradient>

            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.actionButton}>
                    <Image
                        style={styles.actionIcon}
                        resizeMode="contain"
                        source={require('../../assets/images/star-like.png')}
                    />
                    <View style={styles.actionTextContainer}>
                        <Text style={styles.superLikesText}>
                            0 <Text style={styles.whiteText}>Super Likes</Text>
                        </Text>
                        <Text style={styles.getMoreText}>Get more</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Image
                        style={styles.actionIcon}
                        resizeMode="contain"
                        source={require('../../assets/images/boost.png')}
                    />
                    <View style={styles.actionTextContainer}>
                        <Text style={styles.boostText}>
                            0 <Text style={styles.whiteText}>Boost</Text>
                        </Text>
                        <Text style={styles.getMoreText}>Get more</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.actionButton, styles.shadow]}>
                    <Text style={styles.basicText}>Basic</Text>
                    <Image
                        style={styles.basicIcon}
                        resizeMode="contain"
                        source={require('../../assets/images/basic.png')}
                    />
                    <View style={styles.actionTextContainer}>
                        <Text style={styles.subscriptionText}>
                            <Text style={styles.whiteText}>Subscriptions</Text>
                        </Text>
                        <Text style={styles.upgradeText}>Upgrade</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.profileDetailsContainer}>
                <Text style={styles.profileName}>Andrew (27)</Text>
                <View style={styles.verifiedContainer}>
                    <LinearGradient
                        locations={[0, 1]}
                        colors={['#40505F', '#40505F']}
                        useAngle={true}
                        angle={101.24}
                        style={styles.verifiedBadge}
                    >
                        <Image
                            style={styles.verifyIcon}
                            source={require('../../assets/images/verify_ic.png')}
                        />
                        <Text style={styles.verifiedText}>Profile Verified</Text>
                    </LinearGradient>
                </View>
                <View>
                    {infoitem.map((item) => (
                        <ProfileInfoItem
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                        />
                    ))}
                </View>
            </View>

            <View style={styles.separator}></View>
        </View>
    );
};

export default ProfileInfo;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    profileCompletionContainer: {
        borderRadius: 10,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileCompletionContent: {
        flexDirection: 'row',
        gap: 15,
    },
    innerGradient: {
        borderRadius: 10,
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 15,
        flex:1
    },
    profileCompletionTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    profileCompletionTitle: {
        color: '#BB9A65',
        fontSize: 16,
        fontFamily: 'font-heading',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    profileCompletionSubtitle: {
        color: '#F8F1E6',
        fontSize: 12,
        fontFamily: 'font-body',
    },
    closeIcon: {
        width: 24,
        height: 24,
    },
    actionsContainer: {
        flexDirection: 'row',
        gap: 16,
        marginTop: 16,
    },
    actionButton: {
        flex: 1,
        backgroundColor: '#1C252D',
        borderColor: '#2D3843',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    actionIcon: {
        width: 40,
        height: 40,
    },
    actionTextContainer: {
        alignItems: 'center',
    },
    superLikesText: {
        color: '#3DA2FF',
        fontSize: 12,
        marginTop: 20,
    },
    boostText: {
        color: '#B85DFF',
        fontSize: 12,
        marginTop: 20,
    },
    whiteText: {
        color: '#FFFFFF',
    },
    getMoreText: {
        color: '#3DA2FF',
        fontSize: 12,
        fontWeight: '500',
        marginTop: 5,
    },
    basicText: {
        color: '#BB9A65',
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 10,
    },
    basicIcon: {
        width: 32,
        height: 30,
    },
    shadow: {
        shadowColor: '#5E728472',
    },
    profileDetailsContainer: {
        marginTop: 30,
    },
    profileName: {
        color: '#BB9A65',
        fontSize: 24,
        fontWeight: 'bold',
    },
    verifiedContainer: {
        marginTop: 12,
    },
    verifiedBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 30,
    },
    verifyIcon: {
        width: 16,
        height: 16,
        marginRight: 10,
    },
    verifiedText: {
        color: '#F8F1E6',
        fontSize: 12,
    },
    separator: {
        marginTop: 28,
        marginBottom: 28,
        height: 1,
        backgroundColor: '#6B7176',
        marginLeft: -20,
        marginRight: -20,
    },
});
