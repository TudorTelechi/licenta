import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Header} from '../../components';

export default function RouteScreen() {
  return (
    <ScrollView>
      <Container>
        <Header title="Trasee alese" canGoBack screen="Home" />
      </Container>
    </ScrollView>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;
