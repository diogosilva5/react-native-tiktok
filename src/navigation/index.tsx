import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import Search from '../screens/search';
const New = () => <View />;
import Inbox from '../screens/inbox';
import Profile from '../screens/profile';

const Dashboard = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Dashboard.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#000' },
                tabBarActiveTintColor: '#fff',
            }}>
            <Dashboard.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={24}
                            color="white"
                        />
                    ),
                }}
            />
            <Dashboard.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'search' : 'search-outline'}
                            size={24}
                            color="white"
                        />
                    ),
                }}
            />
            <Dashboard.Screen
                name="New"
                component={New}
                options={{
                    tabBarButton: () => (
                        <TouchableOpacity
                            style={{
                                width: 50,
                                height: 30,
                                marginVertical: 10,
                                backgroundColor: 'white',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 8,
                                borderLeftWidth: 3,
                                borderLeftColor: 'red',
                                borderRightWidth: 3,
                                borderRightColor: 'blue',
                            }}
                            onPress={() => console.log('newwww')}>
                            <Ionicons name="md-pulse" size={20} color="black" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Dashboard.Screen
                name="Inbox"
                component={Inbox}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'md-star' : 'md-star-outline'}
                            size={24}
                            color="black"
                        />
                    ),
                }}
            />
            <Dashboard.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={24}
                            color="white"
                        />
                    ),
                }}
            />
        </Dashboard.Navigator>
    );
};

export default Navigation;
