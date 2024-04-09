import {View, Image, StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

import {IUser} from '../../types/types';
import font from '../../theme/font';
import colors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {SearchUserNavigationProps} from '../../navigation/types';

interface Props {
  user: IUser;
}

const UserListItem = ({user}: Props) => {
  const navigation = useNavigation<SearchUserNavigationProps>();
  const navigateToUser = () => {
    navigation.navigate('UserProfile', {userId: user.id});
  };
  return (
    <Pressable onPress={navigateToUser} style={styles.container}>
      <Image source={{uri: user.image}} style={styles.image} />
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: font.weight.bold,
    color: colors.black,
    marginBottom: 5,
  },
  username: {
    color: colors.grey,
  },
});

export default UserListItem;
