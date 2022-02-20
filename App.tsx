import React, {useState, useEffect} from 'react';
import {CameraScreen} from './src/screens/CameraScreen';
import {PermissionsScreen} from './src/screens/PermissionsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

import {Camera, CameraPermissionStatus} from 'react-native-vision-camera';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [cameraPermission, setCameraPermission] =
    useState<CameraPermissionStatus>();
  const [micPermission, setMicPermission] = useState<CameraPermissionStatus>();
  useEffect(() => {
    Camera.getCameraPermissionStatus().then(setCameraPermission);
    Camera.getMicrophonePermissionStatus().then(setMicPermission);
  }, []);
  if (cameraPermission == null || micPermission == null) {
    return null;
  }
  const showPermissionsPage =
    cameraPermission !== 'authorized' || micPermission === 'not-determined';
  console.log(showPermissionsPage);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarStyle: 'dark',
          animationTypeForReplace: 'push',
        }}
        initialRouteName={
          showPermissionsPage ? 'PermissionsScreen' : 'CameraScreen'
        }>
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
