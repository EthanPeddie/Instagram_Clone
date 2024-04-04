import {Image, Text, TextInput, View, StyleSheet} from 'react-native';
import {Control, Controller, SubmitHandler, useForm} from 'react-hook-form';
import {Asset, launchImageLibrary} from 'react-native-image-picker';

import React, {useState} from 'react';
import users from '../../assets/data/users.json';
import font from '../../theme/font';
import colors from '../../theme/colors';

type FormValues = {
  name: string;
  username: string;
  website: string;
  bio: string;
};

interface Props {
  label: string;
  multiline?: boolean | undefined;
  control: Control<FormValues>;
  name: string;
  rules?: object;
}

const ERROR_COLOR = colors.error;

const CustomInput = ({label, multiline, control, name, rules}: Props) => {
  return (
    <Controller
      control={control}
      name={name as keyof FormValues}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => {
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
            <View style={styles.inputFieldContainer}>
              <TextInput
                placeholder={label}
                style={[
                  styles.inputField,
                  {borderBottomColor: error ? ERROR_COLOR : colors.border},
                ]}
                multiline={multiline}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {error && (
                <Text style={{color: ERROR_COLOR}}>{error.message}</Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

const EditProfileScreen = () => {
  const {control, handleSubmit} = useForm<FormValues>({
    defaultValues: {
      name: users.name,
      username: users.username,
      // website: users.website,
      bio: users.bio,
    },
  });
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
  const Regex_URL =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

  const [selectedImage, setSelectedImage] = useState<null | Asset>(null);

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedImage(assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={{uri: selectedImage?.uri || users.image}}
          style={styles.profileImage}
        />
        <Text style={styles.profileText} onPress={onChangePhoto}>
          Change Profile Image
        </Text>
      </View>
      <View>
        <CustomInput
          name="name"
          label="Name"
          control={control}
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be more than 3 characters',
            },
          }}
        />
        <CustomInput
          name="username"
          label="Username"
          control={control}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be more than 3 characters',
            },
          }}
        />
        <CustomInput
          name="website"
          label="Website"
          control={control}
          rules={{
            required: 'Website URL is required',
            pattern: {value: Regex_URL, message: 'Invalid URL'},
          }}
        />
        <CustomInput
          name="bio"
          label="Bio"
          multiline
          control={control}
          rules={{
            required: 'Bio is required',
            maxLength: {
              value: 200,
              message: 'Bio should be less than 200 characters',
            },
          }}
        />
        <View style={styles.submitButtonContainer}>
          <Text onPress={handleSubmit(onSubmit)} style={styles.profileText}>
            Submit
          </Text>
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
  inputFieldContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  submitButtonContainer: {
    alignItems: 'center',
  },
});

export default EditProfileScreen;
