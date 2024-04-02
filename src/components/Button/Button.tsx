import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import colors from '../../theme/colors';

interface Props {
  text?: string;
  onPress?: () => void;
}

const Button = ({text = '', onPress = () => {}}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: colors.black,
  },
});

export default Button;
