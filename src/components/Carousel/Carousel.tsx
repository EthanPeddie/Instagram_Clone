/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  View,
  ViewToken,
  useWindowDimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {IPost} from '../../types/types';
import colors from '../../theme/colors';
interface Props {
  images: IPost['images'];
}
const Carousel = ({images}: Props) => {
  const [activeImage, setActiveImage] = useState(0);
  const {width} = useWindowDimensions();
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };
  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setActiveImage(viewableItems[0].index ?? 0);
      }
    },
  );
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={{width, aspectRatio: 1}}
            source={{
              uri: item,
            }}
          />
        )}
        horizontal={true}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        {images?.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              aspectRatio: 1,
              borderRadius: 5,
              backgroundColor:
                activeImage === index ? colors.primary : colors.white,
              margin: 10,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
