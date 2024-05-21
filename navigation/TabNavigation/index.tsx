import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AdminPanel from '../../screens/tabs/home/AdminPanel';
import NewLocation from '../../screens/tabs/home/NewLocation';
import PlaceScreen from '../../screens/tabs/Place';
import RouteScreen from '../../screens/tabs/RouteScreen';
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
      <Stack.Screen name="RouteScreen" component={RouteScreen} />
      <Stack.Screen name="AdminPanel" component={AdminPanel} />
      <Stack.Screen name="NewLocation" component={NewLocation} />
    </Stack.Navigator>
  );
}
