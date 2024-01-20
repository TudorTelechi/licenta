import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../navigation/types';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Items',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'home'>;
  id: string;
  title: string;
};

const Item = ({navigation, id, title}: ItemProps) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('second', {id, title});
    }}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export interface HomeScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'home'> {}

export default function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item navigation={navigation} id={item.id} title={item.title} />
        )}
        keyExtractor={item => item.id}
      />
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
