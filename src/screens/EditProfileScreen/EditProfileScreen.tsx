import {Image, Text, TextInput, View, StyleSheet} from 'react-native';
import React from 'react';
import users from '../../assets/data/users.json';
import font from '../../theme/font';
import colors from '../../theme/colors';

interface Props {
  label: string;
  multiline?: boolean | undefined;
}

const CustomInput = ({label, multiline}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        placeholder={label}
        style={styles.inputField}
        multiline={multiline}
      />
    </View>
  );
};

const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image source={{uri: users.image}} style={styles.profileImage} />
        <Text style={styles.profileText}>Change Profile Image</Text>
      </View>
      <View>
        <CustomInput label="Name" />
        <CustomInput label="Username" />
        <CustomInput label="Website" />
        <CustomInput label="Bio" multiline />
        <View style={styles.submitButtonContainer}>
          <Text style={styles.profileText}>Submit</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  profileImageContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  profileText: {
    fontWeight: font.weight.bold,
    color: colors.primary,
    fontSize: font.size.md,
    marginVertical: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    width: 75,
  },
  inputField: {
    borderBottomWidth: 1,
    borderColor: colors.border,
    flex: 1,
  },
  submitButtonContainer: {
    alignItems: 'center',
  },
});

export default EditProfileScreen;
