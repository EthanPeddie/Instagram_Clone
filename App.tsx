/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import font from './src/theme/font';
import colors from './src/theme/colors';

const App = () => {
  return (
    <View>
      <Header />
      <Content />
      <Footer />
    </View>
  );
};

const Header = () => (
  <View style={styles.headerContainer}>
    <Image
      style={styles.headerImage}
      source={{
        uri: 'https://metricool.com/wp-content/uploads/Screen-Shot-2023-06-28-at-2.21.12-PM.png',
      }}
    />
    <Text style={styles.headerText}>Kaung Myat Thu</Text>
    <View style={styles.headerIcon}>
      <Entypo name="dots-three-horizontal" size={20} />
    </View>
  </View>
);

const Content = () => (
  <View>
    <Image
      style={styles.contentImage}
      source={{
        uri: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/09/instagram-image-size.jpg',
      }}
    />
  </View>
);

const Footer = () => (
  <View style={styles.footerContainer}>
    <View style={styles.footerIcons}>
      <AntDesign name="hearto" size={25} style={styles.footerIcon} />
      <Ionicons name="chatbubble-outline" size={25} style={styles.footerIcon} />
      <Feather name="send" size={25} style={styles.footerIcon} />
      <Feather
        name="bookmark"
        size={25}
        style={[styles.footerIcon, {marginLeft: 'auto'}]}
      />
    </View>
    <Likes />
    <PostDescription />
    <Comment />
    <PostedDate />
  </View>
);

const Likes = () => (
  <View>
    <Text style={styles.text}>
      Likes by <Text style={styles.bold}>Ethan Peddie</Text> and{' '}
      <Text style={styles.bold}>123 others</Text>
    </Text>
  </View>
);

const PostDescription = () => (
  <Text style={styles.text}>
    <Text style={styles.bold}>Kaung Myat Thu</Text> Lorem ipsum dolor, sit amet
    consectetur adipisicing elit. Totam eum temporibus, accusamus ipsa ducimus
    adipisci numquam id voluptatibus et veniam cupiditate quasi aliquam quidem
    ex dolorum animi porro ipsam fugiat.
  </Text>
);

const Comment = () => (
  <View>
    <Text>View All 18 comments</Text>
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>Shwe War</Text> Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
      </Text>
      <AntDesign name="hearto" size={16} />
    </View>
  </View>
);

const PostedDate = () => <Text>20 January 2024</Text>;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    fontWeight: font.weight.bold,
    color: colors.black,
  },
  headerIcon: {
    marginLeft: 'auto',
  },
  contentImage: {
    width: '100%',
    aspectRatio: 1,
  },
  footerContainer: {
    padding: 10,
  },
  footerIcons: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  footerIcon: {
    marginHorizontal: 5,
    color: colors.black,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: font.weight.bold,
  },

  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: 18,
  },
  commentText: {
    color: colors.black,
    flex: 1,
  },
});

export default App;
