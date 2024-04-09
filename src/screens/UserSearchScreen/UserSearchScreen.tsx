import React from 'react';
import {FlatList} from 'react-native';
import searchUsers from '../../assets/data/searchUsers.json';
import UserListItem from '../../components/UserListItem';

const UserSearchScreen = () => {
  return (
    <FlatList
      data={searchUsers}
      renderItem={({item}) => <UserListItem user={item} />}
    />
  );
};

export default UserSearchScreen;
