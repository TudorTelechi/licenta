import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import * as React from 'react';
import {View} from 'react-native';
import RootStackScreen from './navigation';
import {RootStackParamList} from './navigation/types';

function App() {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();

  return (
    <View style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <RootStackScreen></RootStackScreen>
      </NavigationContainer>
    </View>
  );
}

export default App;
