import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

interface PaginationProps {
  index: number;
  total: number;
  onDotPress: (dotIndex: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({ index, total, onDotPress }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, i) => (
        <TouchableOpacity key={i} onPress={() => onDotPress(i)}>
          <Animated.View
            style={[
                i === index ? styles.activeDot : styles.inactiveDot, // Apply active or inactive style
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    columnGap: 10,
    position: 'absolute',
    top: 15,
  },
  activeDot: {
    backgroundColor: '#131B22',
    width: 58, 
    height: 5,
    borderRadius: 10
  },
  inactiveDot: {
    backgroundColor: 'white',
    width: 5, 
    height: 5,
    borderRadius: 10
  },
});

export default CustomPagination;
