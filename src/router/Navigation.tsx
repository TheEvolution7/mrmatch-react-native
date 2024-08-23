import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SafeDateScreen from '../screens/SafeDate/SafeDateScreen';
import SafeDateTutorial from '../screens/SafeDate/SafeDateTutorial';
import SafeDateTutorial1 from '../screens/SafeDate/SafeDateTutorial-1';
import SafeDateTutorial2 from '../screens/SafeDate/SafeDateTutorial-2';
import SafeDateTutorial3 from '../screens/SafeDate/SafeDateTutorial-3';
import SafeDateTutorial5 from '../screens/SafeDate/SafeDateTutorial-5';
import SafeDateTutorial4 from '../screens/SafeDate/SafeDateTutorial-4';
import SafeDateTutorial6 from '../screens/SafeDate/SafeDateTutorial-6';


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
        <Stack.Screen name="SafeDateTutorial1" component={SafeDateTutorial1} options={{ animation: 'fade' }}/>
        <Stack.Screen name="SafeDateTutorial2" component={SafeDateTutorial2} options={{ animation: 'fade' }}/>
        <Stack.Screen name="SafeDateTutorial3" component={SafeDateTutorial3} options={{ animation: 'fade' }}/>
        <Stack.Screen name="SafeDateTutorial4" component={SafeDateTutorial4} options={{ animation: 'fade' }}/>
        <Stack.Screen name="SafeDateTutorial5" component={SafeDateTutorial5} options={{ animation: 'fade' }}/>
        <Stack.Screen name="SafeDateTutorial6" component={SafeDateTutorial6} options={{ animation: 'fade' }}/>
        <Stack.Screen name="SafeDateScreen" component={SafeDateScreen} options={{ animation: 'fade' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
