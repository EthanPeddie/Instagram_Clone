import React from 'react';
import users from '../../assets/data/users.json';
import FieldGridView from '../../components/FieldGridView';
import ProfileHeader from './ProfileHeader';

const ProfileScreen = () => {
  return (
    <FieldGridView data={users.posts} ListHeaderComponent={ProfileHeader} />
  );
};

export default ProfileScreen;
