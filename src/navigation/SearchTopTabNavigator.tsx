import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CommentsScreen from '../screens/CommentsScreen';
import UserSearchScreen from '../screens/UserSearchScreen';
import {SearchUserNavigatorParamList} from './types';

const Tab = createMaterialTopTabNavigator<SearchUserNavigatorParamList>();

const SearchTopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Users" component={UserSearchScreen} />
      <Tab.Screen name="Posts" component={CommentsScreen} />
    </Tab.Navigator>
  );
};

export default SearchTopTabNavigator;
