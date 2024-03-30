import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../theme/colors';
import font from '../../theme/font';
import {IComment} from '../../types/types';

interface Props {
  comment: IComment;
}

const Comment = ({comment}: Props) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign name="hearto" size={16} />
    </View>
  );
};
const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: 18,
  },
  commentText: {
    color: colors.black,
    flex: 1,
  },
  bold: {
    fontWeight: font.weight.bold,
  },
});

export default Comment;
