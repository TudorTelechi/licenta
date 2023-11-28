import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {RootStackParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackScreen() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="home" component={HomeScreen} />
    </RootStack.Navigator>
  );
}
