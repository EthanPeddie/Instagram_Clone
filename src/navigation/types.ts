import {NavigationProp} from '@react-navigation/native';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

export type RootNavigatorParamList = {
  Home: undefined;
  Comments: {postId: string};
};

export type HomeStackNavigatorParamList = {
  Feed: undefined;
  UserProfile: {userId: string};
};

export type BottomNavigatorParamList = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  MyProfile: undefined;
};

export type SearchUserNavigatorParamList = {
  Users: undefined;
  Posts: undefined;
};
export type ProfileStackNavigatorParamList = {
  MyProfile: undefined;
  'Edit Profile': undefined;
};

// Props

export type UserProfileNavigationProps = NavigationProp<
  RootNavigatorParamList & HomeStackNavigatorParamList
>;

export type ProfileNavigationProps = NavigationProp<
  ProfileStackNavigatorParamList,
  'Edit Profile'
>;

export type SearchUserNavigationProps = NavigationProp<
  SearchUserNavigatorParamList & HomeStackNavigatorParamList
>;

// Tab

export type ProfileNavigationBottomProps = BottomTabNavigationProp<
  BottomNavigatorParamList,
  'MyProfile'
>;

// Route
export type ProfileNavigationRouteProps = RouteProp<
  ProfileStackNavigatorParamList,
  'MyProfile'
>;
export type UserProfileNavigationRouteProps = RouteProp<
  HomeStackNavigatorParamList,
  'UserProfile'
>;
