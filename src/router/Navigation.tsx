import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SafeDateScreen from '../screens/SafeDate/SafeDateScreen';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#131B22',
    primary: '#fff',
  },
};
const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SafeDateScreen" component={SafeDateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
