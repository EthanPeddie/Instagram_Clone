import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IPost} from '../../types/types';
import colors from '../../theme/colors';

interface Props {
  item: IPost;
}

const FieldGridItem = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.image ? item.image : item.images?.[0]}}
        style={styles.image}
      />
      {item.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color={colors.white}
          style={styles.icon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 1,
    padding: 1,
    maxWidth: '33%',
  },
  image: {
    flex: 1,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default FieldGridItem;
