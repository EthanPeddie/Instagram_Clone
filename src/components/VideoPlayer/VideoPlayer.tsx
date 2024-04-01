import {Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';
interface Props {
  uri: string;
  paused: boolean;
}
const VideoPlayer = ({uri, paused}: Props) => {
  const [muted, setMuted] = useState(false);
  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        muted={muted}
        repeat
        paused={paused}
      />
      <Pressable onPress={() => setMuted(v => !v)}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium-sharp'}
          size={20}
          color="white"
          style={styles.muteIcon}
        />
      </Pressable>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteIcon: {
    backgroundColor: colors.black,
    padding: 5,
    position: 'absolute',
    right: 10,
    bottom: 10,
    borderRadius: 25,
  },
});
