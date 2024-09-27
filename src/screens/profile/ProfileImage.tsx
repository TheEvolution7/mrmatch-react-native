import React, { useRef, useState } from 'react';
import { View, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Carousel from "react-native-reanimated-carousel";
import CustomPagination from '../../components/CustomPagination';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get("window").width;

const images = [
    require('../../assets/images/av-1.jpg'),
    require('../../assets/images/av-2.jpg'),
];

const ProfileImage: React.FC = () => {
    const [loop, setLoop] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<Carousel<number>>(null); 

    const handleDotPress = (index: number) => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({ index, animated: true });
        }
    };
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Carousel
                width={width}
                height={width * 1.4}
                data={images}
                ref={carouselRef}
                loop={loop}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <Image source={item} style={styles.image} />
                    </View>
                )}
                onSnapToItem={(index) => setCurrentIndex(index)}
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                }}
            />
            <CustomPagination index={currentIndex} total={images.length} onDotPress={handleDotPress} />

            <TouchableOpacity onPress={() => navigation.navigate('ProfileEditScreen')} style={styles.editButton}>
                <Image
                    style={styles.editImage}
                    resizeMode="contain"
                    source={require('../../assets/images/edit-img.png')}
                />
            </TouchableOpacity>
        </View>
    );
};

export default ProfileImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        position: 'relative',
    },
    imageContainer: {
        width: width - 40,
        height: width * 1.4,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 15,
    },
    editButton: {
        position: 'absolute',
        bottom: 20,
        right: 40,
    },
    editImage: {
        width: 56,
        height: 56,
        borderRadius: 800,
    },
});
