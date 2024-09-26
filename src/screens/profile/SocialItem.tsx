import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface SocialItemProps {
  icon: any; // You might want to specify the type, e.g., `ImageSourcePropType`
  isActive: boolean;
}

const SocialItem: React.FC<SocialItemProps> = ({ icon, isActive }) => {
  return (
    <View style={[styles.container, isActive ? styles.active : styles.inactive]}>
      <Image style={styles.icon} resizeMode="contain" source={icon} />
    </View>
  );
};

export default SocialItem;

const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 1000,
    
  },
  icon: {
    width: 28,
    height: 28,
  },
  active: {
    borderColor: '#FFD700', // Change to the active color (e.g., gold/yellow)
  },
  inactive: {
    borderColor: '#2D3843', // Inactive color (default)
  },
});
