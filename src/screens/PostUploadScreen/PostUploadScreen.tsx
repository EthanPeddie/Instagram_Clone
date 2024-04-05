/* eslint-disable react-native/no-inline-styles */
import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Camera, CameraType, FlashMode} from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';

const PostUploadScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isReadyCamera, setIsReadyCamera] = useState(false);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const micPermission = await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(
        cameraPermission.status === 'granted' &&
          micPermission.status === 'granted',
      );
    };

    getPermission();
  }, []);

  if (hasPermission === null) {
    return <Text>....Loading</Text>;
  } else if (hasPermission === false) {
    return <Text>No camera access</Text>;
  }

  const toggleCameraType = () => {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const flashMode = [
    FlashMode.off,
    FlashMode.on,
    FlashMode.auto,
    FlashMode.torch,
  ];

  const flashIcon = {
    [FlashMode.auto]: 'flash-auto',
    [FlashMode.off]: 'flash-off',
    [FlashMode.on]: 'flash-on',
    [FlashMode.torch]: 'highlight',
  };

  const toggleFlashMode = () => {
    const current = flashMode.indexOf(flash);
    const next = current === 3 ? 0 : current + 1;
    setFlash(flashMode[next]);
  };

  const takePicture = async () => {
    if (!cameraRef || !isReadyCamera) {
      return;
    }
    const result = await cameraRef.takePictureAsync({
      quality: 0.5,
      base64: true,
      skipProcessing: true,
    });
    console.log(result.uri);
    console.log('isReadyCamera:', isReadyCamera);
  };

  const stopRecording = async () => {
    if (isRecording) {
      await cameraRef?.stopRecording();
      setIsRecording(false);
      console.warn('stop');
    }
  };

  const startRecording = async () => {
    if (!isReadyCamera || !cameraRef || isRecording) {
      return;
    }
    const results = await cameraRef.recordAsync({
      quality: '480',
      maxFileSize: 10 * 1024 * 1024,
      maxDuration: 60,
      mute: false,
    });
    try {
      console.log(results.uri);
      setIsRecording(true);
      console.warn('start');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.black,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          bottom: 30,
        }}>
        <MaterialIcons name="close" size={30} color={colors.white} />
        <Pressable onPress={toggleFlashMode}>
          <MaterialIcons
            name={flashIcon[flash]}
            size={30}
            color={colors.white}
          />
        </Pressable>
        <MaterialIcons name="settings" size={30} color={colors.white} />
      </View>
      <Camera
        onCameraReady={() => setIsReadyCamera(true)}
        style={{width: '100%', aspectRatio: 3 / 4}}
        type={type}
        ref={ref => setCameraRef(ref)}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          top: 30,
        }}>
        <MaterialIcons name="photo-library" size={30} color={colors.white} />

        {isReadyCamera && (
          <Pressable
            onPress={takePicture}
            onLongPress={startRecording}
            onPressOut={stopRecording}
            style={{
              width: 75,
              aspectRatio: 1,
              borderRadius: 75,
              backgroundColor: isRecording ? colors.accent : colors.white,
            }}
          />
        )}

        <Pressable onPress={toggleCameraType}>
          <MaterialIcons
            name="flip-camera-ios"
            size={30}
            color={colors.white}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default PostUploadScreen;
