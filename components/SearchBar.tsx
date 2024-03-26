import {Ionicons} from '@expo/vector-icons';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        padding: 5,
        borderRadius: 5,
      }}>
      <TextInput
        style={{flex: 1, paddingHorizontal: 10}}
        placeholder="Caută un loc..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity
        onPress={() => {
          setSearchQuery('');
          onSearch('');
        }}>
        <Ionicons name="close-circle" size={20} color="#888" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSearch}>
        <Ionicons name="search" size={20} color="#888" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
