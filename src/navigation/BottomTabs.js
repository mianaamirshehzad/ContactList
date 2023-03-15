import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';



import Contact from '../components/Contact';
import Profile from '../components/Profile';
import Settings from '../components/Settings';
import Search from '../components/Search';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Contact' screenOptions={{
                // tabBarShowLabel: false,
                tabBarActiveBackgroundColor: 'red'
                
            }} >
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Contact" component={Contact} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default BottomTabs;