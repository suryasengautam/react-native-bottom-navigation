import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from '../screens/HomeScreen'
import ChatScreen from '../screens/ChatScreen'
import FindScreen from '../screens/FindScreen';
import PostScreen from '../screens/PostScreen';
import SettingScreen from '../screens/SettingScreen';

const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => getTabBarIcon(focused, route.name),
            // tabBarLabel: null,
            // headerShown: false,
            tabBarShowLabel : false,
            tabBarStyle: { backgroundColor: '#F8F8F8' },
            tabBarInactiveTintColor: '#8E8E93',
            tabBarActiveTintColor: '#007AFF',
          })}
    
        
        >
            <Tab.Screen name="Home" component={HomeScreen}  />
            <Tab.Screen name="Settings" component={SettingScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Find" component={FindScreen} />
            <Tab.Screen name="Post" component={PostScreen} />

        </Tab.Navigator>
    )
}
const getTabBarIcon = (focused, routeName) => {
    let iconName;
  
    if (routeName === 'Home') {
      iconName = 'home';
    } else if (routeName === 'Settings') {
      iconName = 'account';
    }
  
    return (
      <Icon
        name={iconName}
        size={24}
        color={focused ? '#007AFF' : '#8E8E93'}
      />
    );
  };
  

export default Tabs