import {zodResolver} from '@hookform/resolvers/zod';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {z} from 'zod';
import {Header} from '../../components';
import {ErrorText, RegularText} from '../../components/StyledText';
import {Button, Input} from '../../components/ui';
import {auth} from '../../config/firebaseConfig';
import {useFirebaseAuth} from '../../hooks';
import {RegisterSchema} from '../../schemas';
import {useUserStore} from '../../store/useUserStore';

type RegisterInputType = z.infer<typeof RegisterSchema>;

export default function SignupScreen() {
  const [loading, setLoading] = useState(false);
  const {navigate}: NavigationProp<AuthNavigationType> = useNavigation();
  const {signUpWithEmail} = useFirebaseAuth();
  const {setUser, setSession} = useUserStore();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterInputType>({
    resolver: zodResolver(RegisterSchema),
  });

  async function onSubmit({email, password}: RegisterInputType) {
    setLoading(true);
    try {
      const data = await signUpWithEmail(email, password);

      if (!data) {
        setLoading(false);
      }

      if (data?.user === null) {
        setLoading(false);
      }

      const tokenResult = await auth.currentUser?.getIdTokenResult();
      if (tokenResult && data?.user) {
        setSession(tokenResult);
        setUser(data.user);
      }

      navigate('Login');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container>
      <View>
        <StatusBar style="dark" />
        <Header
          title="Inregistreaza-te"
          description="Completeaza campurile de mai jos pentru a creea un cont"
          canGoBack
          screen="Login"
        />

        <InputContainer>
          <Controller
            name="email"
            control={control}
            render={({field}) => (
              <InputView>
                <Input
                  value={field.value}
                  onChangeText={e => field.onChange(e)}
                  placeholder="Introdu adresa de Email"
                  label="Email"
                />
                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
              </InputView>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({field}) => (
              <InputView>
                <Input
                  value={field.value}
                  onChangeText={e => field.onChange(e)}
                  placeholder="Introdu parola"
                  label="Parola"
                  isPassword
                />
                {errors.password && (
                  <ErrorText>{errors.password.message}</ErrorText>
                )}
              </InputView>
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({field}) => (
              <InputView>
                <Input
                  value={field.value}
                  onChangeText={e => field.onChange(e)}
                  placeholder="Re-introduceti parola"
                  label="Confirmare Parola"
                  isPassword
                />
                {errors.confirmPassword && (
                  <ErrorText>{errors.confirmPassword.message}</ErrorText>
                )}
              </InputView>
            )}
          />
        </InputContainer>
      </View>

      <BottomView>
        <Button
          title="Continuare"
          onPress={handleSubmit(onSubmit)}
          isLoading={loading}
        />
        <TouchableOpacity onPress={() => navigate('Login')}>
          <RegularText>Ai deja un cont? Logeaza-te</RegularText>
        </TouchableOpacity>
      </BottomView>
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 20px;
  justify-content: space-between;
`;

const InputContainer = styled(View)`
  margin-top: 40px;
  gap: 20px;
`;

const InputView = styled(View)`
  gap: 4px;
`;

const BottomView = styled(View)`
  align-items: center;
  gap: 8px;
`;
