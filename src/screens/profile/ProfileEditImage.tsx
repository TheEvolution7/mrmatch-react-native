import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import DocumentPicker, { types } from 'react-native-document-picker';
import { styled } from 'nativewind';
import SwitchS from '../../components/Switch';




const ProfileInfo: React.FC = () => {
    const [linkImage1, setLinkImage1] = React.useState(null);
    const [linkImage2, setLinkImage2] = React.useState(null);
    const [linkImage3, setLinkImage3] = React.useState(null);
    const [linkImage4, setLinkImage4] = React.useState(null);
    const [linkImage5, setLinkImage5] = React.useState(null);
    const [linkImage6, setLinkImage6] = React.useState(null);

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
    const StyledTouchableOpacity = styled(TouchableOpacity, 'flex basis-1/3 pl-[8px] pr-[8px] pb-[16px]');
    const StyleImgBox = styled(View, 'flex justify-center items-center rounded-[10px] aspect-[102/178] bg-[#2c384333] border-[2px] border-[#2c3843]');
    

    return (
        <View className="flex mt-[20px] mx-[20px]">
            <View className="flex flex-row flex-wrap items-center mb-[30px]">
                <StyledTouchableOpacity onPress={() => pickImage()}>
                    <StyleImgBox>
                        {linkImage1 ?
                            <Image source={{ uri: linkImage1 }} resizeMode='cover' className='aspect-[100/180]' />
                            :
                            <Image source={require('../../assets/images/plusIcon.png')} />
                        }
                    </StyleImgBox>

                </StyledTouchableOpacity>
                <StyledTouchableOpacity>
                    <StyleImgBox>
                        {linkImage2 ?
                            <Image source={{ uri: linkImage2 }} resizeMode='cover' className='aspect-[100/180]' />
                            :
                            <Image source={require('../../assets/images/plusIcon.png')} />
                        }
                    </StyleImgBox>
                </StyledTouchableOpacity>
                <StyledTouchableOpacity>
                    <StyleImgBox>
                        {linkImage3 ?
                            <Image source={{ uri: linkImage3 }} resizeMode='cover' className='aspect-[100/180]' />
                            :
                            <Image source={require('../../assets/images/plusIcon.png')} />
                        }
                    </StyleImgBox>
                </StyledTouchableOpacity>
                <StyledTouchableOpacity onPress={() => pickImage()}>
                    <StyleImgBox>
                        {linkImage4 ?
                            <Image source={{ uri: linkImage4 }} resizeMode='cover' className='aspect-[100/180]' />
                            :
                            <Image source={require('../../assets/images/plusIcon.png')} />
                        }
                    </StyleImgBox>
                </StyledTouchableOpacity>
                <StyledTouchableOpacity>
                    <StyleImgBox>
                        {linkImage5 ?
                            <Image source={{ uri: linkImage5 }} resizeMode='cover' className='aspect-[100/180]' />
                            :
                            <Image source={require('../../assets/images/plusIcon.png')} />
                        }
                    </StyleImgBox>
                </StyledTouchableOpacity>
                <StyledTouchableOpacity>
                    <StyleImgBox>
                        {linkImage6 ?
                            <Image source={{ uri: linkImage6 }} resizeMode='cover' className='aspect-[100/180]' />
                            :
                            <Image source={require('../../assets/images/plusIcon.png')} />
                        }
                    </StyleImgBox>
                </StyledTouchableOpacity>
            </View>
            
            <View>
                <View className="flex flex-row justify-between items-center mb-[17px]">
                    <Text className="text-[#BB9A65] text-[18px] font-semibold font-heading">
                        Smart Photos
                    </Text>

                    <SwitchS/>
                </View>
                

                <Text className="text-[#F8F1E680] text-[14px] font-regular font-body">
                    Smart Photos continuosly tests all your profile photos to find the best one.
                </Text>

            </View>

            <View className="mt-[28px] mb-[28px] ml-[-20px] mr-[-20px] h-[1px] bg-[#6B7176]"></View>
        </View>
    );
};

export default ProfileInfo;




