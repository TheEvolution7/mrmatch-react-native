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
import FindNearBy from '../screens/Registration/FindNearBy';
import Relationship from '../screens/Registration/Relationship';
import Favorite from '../screens/Registration/Favorite';
import CollectionImage from '../screens/Registration/ColectionImage';
import Notification from '../screens/Registration/Notification';
import AllSet from '../screens/Registration/AllSet';
import FindFriends from '../screens/Registration/FindFriends';
import PickFriend from '../screens/Registration/PickFriend';
import LoginScreen from '../screens/login/LoginScreen';
import ForgotPassword from '../screens/login/ForgotPassword';
import InputOtp from '../screens/login/InputOtp';
import CreatePassword from '../screens/login/CreatePassword';
import HomePage from '../screens/explore/HomePage';
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
        <Stack.Screen name="FindNearBy" component={FindNearBy} />
        <Stack.Screen name="Relationship" component={Relationship} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="CollectionImage" component={CollectionImage} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="AllSet" component={AllSet} />
        <Stack.Screen name="FindFriends" component={FindFriends} />
        <Stack.Screen name="PickFriend" component={PickFriend} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="InputOtp" component={InputOtp} />
        <Stack.Screen name="CreatePassword" component={CreatePassword} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
