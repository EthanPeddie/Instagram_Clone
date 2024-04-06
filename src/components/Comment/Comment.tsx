import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../theme/colors';
import font from '../../theme/font';
import {IComment} from '../../types/types';

interface Props {
  comment: IComment;
  includeDetails: boolean;
}

const Comment = ({comment, includeDetails}: Props) => {
  const [isLikes, setIsLikes] = useState(false);
  const handleLiked = () => {
    setIsLikes(v => !v);
  };
  return (
    <View style={styles.comment}>
      {includeDetails && (
        <View>
          <Image
            source={{uri: comment.user.image}}
            style={styles.commentAvatar}
          />
        </View>
      )}
      <View style={styles.commentContent}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username}</Text>{' '}
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.commentMeta}>
            <Text style={styles.metaText}>2d</Text>
            <Text style={styles.metaText}>5 likes</Text>
            <Text style={styles.metaText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable
        onPress={handleLiked}
        style={styles.likeIconContainer}
        hitSlop={5}>
        <AntDesign
          name={isLikes ? 'heart' : 'hearto'}
          size={16}
          color={isLikes ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  commentAvatar: {
    width: 40,
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 25,
  },
  commentContent: {
    width: '75%',
  },
  commentText: {
    color: colors.black,
  },
  bold: {
    fontWeight: font.weight.bold,
  },
  commentMeta: {
    flexDirection: 'row',
  },
  metaText: {
    marginRight: 10,
  },
  likeIconContainer: {
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default Comment;
