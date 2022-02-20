import React, {useState, useRef, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {View, StyleSheet, Text, TouchableOpacity, Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {Feed} from '../components/Feed';
import GestureRecognizer from 'react-native-swipe-gestures';

export const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeOutAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);
  useEffect(() => {
    Animated.timing(fadeOutAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [fadeOutAnim]);
  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};
export const CameraScreen = () => {
  const [showCamera, setShowCamera] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  if (device == null) {
    return (
      <SafeAreaView>
        <Text>Error getting camera, try restarting</Text>
      </SafeAreaView>
    );
  }
  const handleSwipe = () => {
    setShowCamera(true);
  };
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true}>
      <View style={styles.colorBackground}>
        <SafeAreaView>
          {!showCamera ? null : (
            <TouchableOpacity
              style={styles.hideCameraTouchArea}
              onPress={() => setShowCamera(false)}>
              <FontAwesomeIcon
                size={32}
                style={styles.backIcon}
                icon={faArrowLeft}
              />
            </TouchableOpacity>
          )}
          {showCamera ? null : (
            <FadeInView style={styles.appBody}>
              <Feed />
            </FadeInView>
          )}
        </SafeAreaView>
      </View>
    </Camera>
  );
};

const styles = StyleSheet.create({
  appBody: {
    dispaly: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  backIcon: {
    color: 'white',
  },
  colorBackground: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  appContent: {
    width: '100%',
  },
  showCameraTouchArea: {
    position: 'absolute',
    width: '15%',
    height: '100%',
  },
  showCameraTouchAreaRight: {
    position: 'absolute',
    width: '15%',
    height: '100%',
    right: 0,
  },
  hideCameraTouchArea: {
    width: 50,
    height: 50,
  },
});
