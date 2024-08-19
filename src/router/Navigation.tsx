import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from '../screens/account/Login';
import ForgotPage from '../screens/account/Forgot';
import CreatepassPage from '../screens/account/Createpass';
import OTPPage from '../screens/account/otp';

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Forgot" component={ForgotPage} />
        <Stack.Screen name="Otp" component={OTPPage} />
        <Stack.Screen name="Createpass" component={CreatepassPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
