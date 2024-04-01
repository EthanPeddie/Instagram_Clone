import {StyleSheet, View} from 'react-native';
import React from 'react';
import CommentsScreen from './src/screens/CommentsScreen';

// import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <CommentsScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
