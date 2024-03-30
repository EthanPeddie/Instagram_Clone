/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
const FeedPost = () => {
  return (
    <View>
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
      <View>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/09/instagram-image-size.jpg',
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
            Likes by <Text style={styles.bold}>Ethan Peddie</Text> and{' '}
            <Text style={styles.bold}>123 others</Text>
          </Text>
        </View>
        <Text style={styles.text}>
          <Text style={styles.bold}>Kaung Myat Thu</Text> Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Totam eum temporibus, accusamus
          ipsa ducimus adipisci numquam id voluptatibus et veniam cupiditate
          quasi aliquam quidem ex dolorum animi porro ipsam fugiat.
        </Text>
        <View>
          <Text>View All 18 comments</Text>
          <View style={styles.comment}>
            <Text style={styles.commentText}>
              <Text style={styles.bold}>Shwe War</Text> Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </Text>
            <AntDesign name="hearto" size={16} />
          </View>
        </View>
        <Text>20 January 2024</Text>
      </View>
    </View>
  );
};

export default FeedPost;
