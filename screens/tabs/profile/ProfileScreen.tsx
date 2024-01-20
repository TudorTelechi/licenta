import {Ionicons} from '@expo/vector-icons';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {useCallback, useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Header} from '../../../components';
import {Button, Input} from '../../../components/ui';
import {useFirebaseAuth} from '../../../hooks';
import {useUserStore} from '../../../store/useUserStore';

export default function ProfileScreen() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const {getUserProfile, signOut} = useFirebaseAuth();
  const {navigate}: NavigationProp<ProfileNavigationType> = useNavigation();
  const {session} = useUserStore();

  async function handleGetProfile() {
    setLoading(true);

    try {
      const {data, error} = await getUserProfile();

      if (error) {
        setLoading(false);
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setFullName(data.full_name);
        setAvatarUrl(data.avatar_url);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function handleSignOut() {
    await signOut();
  }

  useFocusEffect(
    useCallback(() => {
      if (session) {
        handleGetProfile();
      }
    }, [session]),
  );

  return (
    <Container>
      <StatusBar style="dark" />
      <Header
        title="Profile"
        description="View your profile below"
        canGoBack
        screen="Home"
      />

      <InputContainer>
        <Input
          value={username}
          onChangeText={() => {}}
          label="Username"
          disabled
        />
        <Input
          value={fullName}
          onChangeText={() => {}}
          label="Full name"
          disabled
        />
        <Button
          title="Edit profile"
          onPress={() => navigate('EditProfile')}
          isLoading={loading}
        />
        <Button
          variant="destructive"
          title="Sign out"
          icon={<Ionicons name="log-out-outline" size={20} color={'#fff'} />}
          onPress={() => handleSignOut()}
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
