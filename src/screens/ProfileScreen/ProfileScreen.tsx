import React from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';

import users from '../../assets/data/users.json';
import FieldGridView from '../../components/FieldGridView';
import ProfileHeader from './ProfileHeader';
import {
  ProfileNavigationBottomProps,
  ProfileNavigationProps,
  ProfileNavigationRouteProps,
  UserProfileNavigationRouteProps,
} from '../../navigation/types';

const ProfileScreen = () => {
  const navigation = useNavigation<
    ProfileNavigationProps | ProfileNavigationBottomProps
  >();
  const route = useRoute<
    UserProfileNavigationRouteProps | ProfileNavigationRouteProps
  >();

  const userId = route.params?.userId;
  console.log(userId);

  return (
    <FieldGridView data={users.posts} ListHeaderComponent={ProfileHeader} />
  );
};

export default ProfileScreen;
