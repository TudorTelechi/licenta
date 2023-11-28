import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';
import {RootStackParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackScreen() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="home"
        options={{
          headerTitle: 'Home Screen',
        }}
        component={HomeScreen}
      />
      <RootStack.Screen
        name="second"
        options={{
          headerTitle: 'Second Screen',
        }}
        component={SecondScreen}
      />
    </RootStack.Navigator>
  );
}
