import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FeedPost from './src/components/FeedPost';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <FeedPost />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
