import React from 'react';

import {useRoute} from '@react-navigation/native';

import users from '../../assets/data/users.json';
import FieldGridView from '../../components/FieldGridView';
import ProfileHeader from './ProfileHeader';

const ProfileScreen = () => {
  const route = useRoute();
  // const userId = route.params?userId;

  return (
    <FieldGridView data={users.posts} ListHeaderComponent={ProfileHeader} />
  );
};

export default ProfileScreen;
