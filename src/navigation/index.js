import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contact from '../components/Contact';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator  >
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            headerShown: false,
            headerBackVisible: true,
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;