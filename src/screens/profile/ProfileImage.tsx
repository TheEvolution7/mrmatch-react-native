import React, { useRef, useState } from 'react';
import { View, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Carousel from "react-native-reanimated-carousel";
import CustomPagination from '../../components/CustomPagination';



const width = Dimensions.get("window").width;

const images = [
    require('../../assets/images/av-1.jpg'),
    require('../../assets/images/av-2.jpg'),
];

  

const ProfileImage: React.FC = () => {

    const [loop, setLoop] = React.useState<boolean>(false);

    
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<Carousel<number>>(null); 
    const handleDotPress = (index: number) => {
        if (carouselRef.current) {
          carouselRef.current.scrollTo({ index, animated: true });
        }
    };
    return (
        <View className="flex items-center justify-center mt-[20px] relative">
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

            <TouchableOpacity
                className="absolute bottom-[20px] right-[20px]"
            >
                <Image
                    className="w-[56px] h-[56px] mr-[15px] rounded-[800px]"
                    resizeMode="contain"
                    source={require('../../assets/images/edit-img.png')}></Image>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileImage;

const styles = StyleSheet.create({
   
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
});


