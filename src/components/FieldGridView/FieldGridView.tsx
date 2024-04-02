import React from 'react';
import {FlatList, View} from 'react-native';
import {IPost} from '../../types/types';
import FieldGridItem from './FieldGridItem';

interface Props {
  data: IPost[];
  ListHeaderComponent:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const FieldGridView = ({data, ListHeaderComponent}: Props) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <FieldGridItem item={item} />}
        numColumns={3}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};

export default FieldGridView;
