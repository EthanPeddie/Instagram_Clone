import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';

import FeedPost from './src/components/FeedPost';
import posts from './src/assets/data/posts.json';

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
