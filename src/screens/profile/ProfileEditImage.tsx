import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import SwitchS from '../../components/Switch';

const ProfileInfo: React.FC = () => {
  const [linkImage1, setLinkImage1] = useState(null);
  const [linkImage2, setLinkImage2] = useState(null);
  const [linkImage3, setLinkImage3] = useState(null);
  const [linkImage4, setLinkImage4] = useState(null);
  const [linkImage5, setLinkImage5] = useState(null);
  const [linkImage6, setLinkImage6] = useState(null);

  const pickImage = async (value) => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images], // Allows picking image files
      });

      // If the user selects an image, update the state
      switch (value) {
        case 1:
          setLinkImage1(result[0].uri);
          break;
        case 2:
          setLinkImage2(result[0].uri);
          break;
        case 3:
          setLinkImage3(result[0].uri);
          break;
        case 4:
          setLinkImage4(result[0].uri);
          break;
        case 5:
          setLinkImage5(result[0].uri);
          break;
        case 6:
          setLinkImage6(result[0].uri);
          break;
        default:
          break;
      }
      if (result && result[0]) {
        setLinkImage1(result[0].uri);
        console.log(result[0].uri);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled the picker');
      } else {
        console.log('Unknown error: ', err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => pickImage(1)}>
          <View style={styles.imageBox}>
            {linkImage1 ? (
              <Image source={{ uri: linkImage1 }} resizeMode="cover" style={styles.selectedImage} />
            ) : (
              <Image source={require('../../assets/images/plusIcon.png')} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <View style={styles.imageBox}>
            {linkImage2 ? (
              <Image source={{ uri: linkImage2 }} resizeMode="cover" style={styles.selectedImage} />
            ) : (
              <Image source={require('../../assets/images/plusIcon.png')} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <View style={styles.imageBox}>
            {linkImage3 ? (
              <Image source={{ uri: linkImage3 }} resizeMode="cover" style={styles.selectedImage} />
            ) : (
              <Image source={require('../../assets/images/plusIcon.png')} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => pickImage(4)}>
          <View style={styles.imageBox}>
            {linkImage4 ? (
              <Image source={{ uri: linkImage4 }} resizeMode="cover" style={styles.selectedImage} />
            ) : (
              <Image source={require('../../assets/images/plusIcon.png')} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <View style={styles.imageBox}>
            {linkImage5 ? (
              <Image source={{ uri: linkImage5 }} resizeMode="cover" style={styles.selectedImage} />
            ) : (
              <Image source={require('../../assets/images/plusIcon.png')} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <View style={styles.imageBox}>
            {linkImage6 ? (
              <Image source={{ uri: linkImage6 }} resizeMode="cover" style={styles.selectedImage} />
            ) : (
              <Image source={require('../../assets/images/plusIcon.png')} />
            )}
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.smartPhotoHeader}>
          <Text style={styles.smartPhotoTitle}>Smart Photos</Text>
          <SwitchS />
        </View>

        <Text style={styles.smartPhotoDescription}>
          Smart Photos continuously tests all your profile photos to find the best one.
        </Text>
      </View>

      <View style={styles.divider}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 30,
  },
  touchableOpacity: {
    flexBasis: '33.33%',
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  imageBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#2c384333',
    borderWidth: 2,
    borderColor: '#2c3843',
    aspectRatio: 102 / 178, // Matches aspect-[102/178]
  },
  selectedImage: {
    aspectRatio: 100 / 180, // Matches aspect-[100/180]
  },
  smartPhotoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 17,
  },
  smartPhotoTitle: {
    color: '#BB9A65',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'font-heading', // Assuming this font is loaded
  },
  smartPhotoDescription: {
    color: '#F8F1E680',
    fontSize: 14,
    fontFamily: 'font-body', // Assuming this font is loaded
  },
  divider: {
    marginTop: 28,
    marginBottom: 28,
    marginLeft: -20,
    marginRight: -20,
    height: 1,
    backgroundColor: '#6B7176',
  },
});

export default ProfileInfo;
