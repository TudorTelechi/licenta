import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Header} from '../../../components';
import {Button, Input} from '../../../components/ui';
import {useFirebaseAuth} from '../../../hooks';

export default function EditProfileScreen() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const {updateUserProfile} = useFirebaseAuth();
  const {navigate}: NavigationProp<ProfileNavigationType> = useNavigation();

  async function handleUpdateProfile() {
    setLoading(true);

    try {
      const {error} = await updateUserProfile(username, fullName, avatarUrl);

      if (error) {
        setLoading(false);
        throw error;
      }

      navigate('Profile');
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <StatusBar style="dark" />
      <Header
        title="Editeaza Profilul"
        description="Editeaza profilul aici si salveaza modificarile pentru a le actualiza"
        canGoBack
        screen="Profile"
      />

      <InputContainer>
        <Input
          value={username}
          onChangeText={e => setUsername(e)}
          placeholder="Editeaza numele de utilizator"
          label="Editeaza numele de utilizator"
        />
        <Input
          value={fullName}
          onChangeText={e => setFullName(e)}
          placeholder="Editeaza numele complet"
          label="Editeaza numele complet"
        />
        <Button
          title="Salveaza modificarile"
          onPress={() => handleUpdateProfile()}
          isLoading={loading}
        />
      </InputContainer>
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const InputContainer = styled(View)`
  margin-top: 40px;
  gap: 20px;
`;
