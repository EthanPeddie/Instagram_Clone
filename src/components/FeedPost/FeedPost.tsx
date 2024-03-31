/* eslint-disable react-native/no-inline-styles */
import {Image, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/types';
import colors from '../../theme/colors';
import DoublePressable from '../DoublePressable';

export interface Props {
  post: IPost;
}
const FeedPost = ({post}: Props) => {
  const [isDescriptionExpaneded, setIsDescriptionExpaneded] = useState(false);
  const [isLikes, setIsLikes] = useState(false);

  const handleExpand = () => {
    setIsDescriptionExpaneded(v => !v);
  };
  const handleLiked = () => {
    setIsLikes(v => !v);
  };
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerImage}
          source={{
            uri: post.user.image,
          }}
        />
        <Text style={styles.headerText}>{post.user.username}</Text>
        <View style={styles.headerIcon}>
          <Entypo name="dots-three-horizontal" size={20} />
        </View>
      </View>
      <DoublePressable onDoublePress={handleLiked}>
        <Image
          style={styles.contentImage}
          source={{
            uri: post.image,
          }}
        />
      </DoublePressable>
      <View style={styles.footerContainer}>
        <View style={styles.footerIcons}>
          <Pressable onPress={handleLiked}>
            <AntDesign
              name={isLikes ? 'heart' : 'hearto'}
              size={25}
              style={styles.footerIcon}
              color={isLikes ? colors.accent : colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={25}
            style={styles.footerIcon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={25}
            style={styles.footerIcon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={25}
            style={[styles.footerIcon, {marginLeft: 'auto'}]}
            color={colors.black}
          />
        </View>
        <View>
          <Text style={styles.text}>
            Likes by <Text style={styles.bold}>Senit Seint</Text> and{' '}
            <Text style={styles.bold}>{post.nofLikes} others</Text>
          </Text>
        </View>
        <Text
          style={[styles.text, {marginTop: 5}]}
          numberOfLines={isDescriptionExpaneded ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>
        <Text onPress={handleExpand}>
          {isDescriptionExpaneded ? 'less' : 'more'}
        </Text>

        <View style={{marginTop: 5}}>
          <Text>View All {post.nofComments} comments</Text>
          {post.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </View>
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
