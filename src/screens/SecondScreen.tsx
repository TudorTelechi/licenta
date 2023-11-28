import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {RootStackParamList} from '../navigation/types';

export interface SecondScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'second'> {}

export default function SecondScreen({route}: SecondScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Title: {route.params.title}</Text>
      <Text>Hello From Second Screen with ID: {route.params.id}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
