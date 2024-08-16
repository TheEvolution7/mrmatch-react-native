import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/OnboardScreens/Welcome';
import Onboarding from '../screens/OnboardScreens/Onboarding';
import Registration from '../screens/Registration/Registration';
import LoginPage from '../screens/account/Login';
import PasswordCreate from '../screens/Registration/PasswordCreate';
import YearSelected from '../screens/Registration/YearSelected';
import PhoneRegister from '../screens/Registration/PhoneRegister';

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="PasswordCreate" component={PasswordCreate} />
        <Stack.Screen name="YearSelected" component={YearSelected} />
        <Stack.Screen name="PhoneRegister" component={PhoneRegister} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
