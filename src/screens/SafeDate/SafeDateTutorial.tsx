import React, {} from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SafeDateTutorial1 from './SafeDateTutorial-1';
import SafeDateTutorial2 from './SafeDateTutorial-2';
import SafeDateTutorial3 from './SafeDateTutorial-3';
import SafeDateTutorial4 from './SafeDateTutorial-4';
import SafeDateTutorial5 from './SafeDateTutorial-5';
import SafeDateTutorial6 from './SafeDateTutorial-6';
import SafeDateScreen from './SafeDateScreen';
const Stack = createNativeStackNavigator();

const SafeDateTutorial: React.FC = () => {
    
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="SafeDateTutorial1" component={SafeDateTutorial1} options={{ animation: 'fade' }}/>
            <Stack.Screen name="SafeDateTutorial2" component={SafeDateTutorial2} options={{ animation: 'fade' }}/>
            <Stack.Screen name="SafeDateTutorial3" component={SafeDateTutorial3} options={{ animation: 'fade' }}/>
            <Stack.Screen name="SafeDateTutorial4" component={SafeDateTutorial4} options={{ animation: 'fade' }}/>
            <Stack.Screen name="SafeDateTutorial5" component={SafeDateTutorial5} options={{ animation: 'fade' }}/>
            <Stack.Screen name="SafeDateTutorial6" component={SafeDateTutorial6} options={{ animation: 'fade' }}/>
            <Stack.Screen name="SafeDateScreen" component={SafeDateScreen} options={{ animation: 'fade' }}/>
        </Stack.Navigator>
    );
};

export default SafeDateTutorial;
