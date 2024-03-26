import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import PlaceScreen from '../../screens/tabs/Place';
import HomeNavigation from './HomeNavigation';
import ProfileNavigation from './ProfileNavigation';

const Stack = createStackNavigator<TabNavigationType>();

export default function TabNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
        animationEnabled: true,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
      <Stack.Screen name="ProfileNavigation" component={ProfileNavigation} />
      <Stack.Screen name="PlaceScreen" component={PlaceScreen} />
    </Stack.Navigator>
  );
}
