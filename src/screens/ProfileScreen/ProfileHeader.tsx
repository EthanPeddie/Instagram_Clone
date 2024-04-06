import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

import users from '../../assets/data/users.json';
import colors from '../../theme/colors';
import font from '../../theme/font';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const ProfileHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.profileInfoContainer}>
        <View style={styles.profileImageContainer}>
          <Image source={{uri: users.image}} style={styles.profileImage} />
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>100</Text>
            <Text>Posts</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statValue}>1M</Text>
            <Text>Followers</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statValue}>245</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>

      <View style={styles.bioContainer}>
        <Text style={styles.name}>{users.name}</Text>
        <Text style={styles.bio}>{users.bio}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          text="Edit Profile"
          onPress={() => navigation.navigate('Edit Profile')}
        />
        <Button
          text="Another Profile"
          onPress={() => console.warn('On Another Profile')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  profileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImageContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  statValue: {
    fontWeight: font.weight.bold,
    color: colors.black,
  },
  bioContainer: {
    marginVertical: 5,
  },
  name: {
    fontSize: font.size.md,
    fontWeight: font.weight.bold,
    color: colors.black,
  },
  bio: {
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
});

export default ProfileHeader;
