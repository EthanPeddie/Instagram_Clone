import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../theme/colors';

const Input = () => {
  const [newComment, setNewComment] = useState('');
  const onPost = () => {
    console.warn('On going', newComment);
    setNewComment('');
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://wallpapers.com/images/featured/john-wick-pictures-fkurzl5x5t5vakvg.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        value={newComment}
        style={styles.input}
        multiline
        onChangeText={setNewComment}
      />
      <Text onPress={onPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: colors.border,
    padding: 10,
    alignItems: 'flex-end',
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  input: {
    borderRadius: 25,
    borderColor: colors.border,
    width: '75%',
    borderWidth: 1,
    height: 45,
    padding: 10,
  },
  button: {
    marginLeft: 'auto',
    color: colors.primary,
    bottom: 10,
  },
});
