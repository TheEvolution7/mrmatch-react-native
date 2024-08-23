import React, {} from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SafeDateTutorial1 from './SafeDateTutorial-1';
const Stack = createNativeStackNavigator();
const SafeDateTutorial: React.FC = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome SafeDate" component={SafeDateTutorial1} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default SafeDateTutorial;
