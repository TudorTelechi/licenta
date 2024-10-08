type RootNavigationType = {
  AuthNavigation: undefined;
  TabNavigation: undefined;
};

type AuthNavigationType = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
};

type TabNavigationType = {
  ProfileNavigation: undefined;
  RouteScreen: {selectedLocations: Array<number>};
  HomeNavigation: undefined;
  ExploreNavigation: undefined;
  BookmarksNavigation: undefined;
  PlaceScreen: {placeId: number};
  AdminPanel: undefined;
  NewLocation: undefined;
};

//tabs nav types
type HomeNavigationType = {
  Home: undefined;
};

type ProfileNavigationType = {
  Profile: undefined;
  EditProfile: undefined;
};
