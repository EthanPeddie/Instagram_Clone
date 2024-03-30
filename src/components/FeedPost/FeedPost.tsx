/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/types';

export interface Props {
  post: IPost;
}
const FeedPost = ({post}: Props) => {
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
      <View>
        <Image
          style={styles.contentImage}
          source={{
            uri: post.image,
          }}
        />
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footerIcons}>
          <AntDesign name="hearto" size={25} style={styles.footerIcon} />
          <Ionicons
            name="chatbubble-outline"
            size={25}
            style={styles.footerIcon}
          />
          <Feather name="send" size={25} style={styles.footerIcon} />
          <Feather
            name="bookmark"
            size={25}
            style={[styles.footerIcon, {marginLeft: 'auto'}]}
          />
        </View>
        <View>
          <Text style={styles.text}>
            Likes by <Text style={styles.bold}>Senit Seint</Text> and{' '}
            <Text style={styles.bold}>{post.nofLikes} others</Text>
          </Text>
        </View>
        <Text style={styles.text}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>
        <View>
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
