/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import PostUploadScreen from '../screens/PostUploadScreen';
import CommentsScreen from '../screens/CommentsScreen';
import HomeStackNavigator from './HomeStackNavigator';
import colors from '../theme/colors';
import ProfileStackNavigator from './ProfileStackNavigator';
import {BottomNavigatorParamList} from './types';

const Tab = createBottomTabNavigator<BottomNavigatorParamList>();

const ButtomTabNavigtor = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={PostUploadScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={CommentsScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name="account-circle" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtomTabNavigtor;
