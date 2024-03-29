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
  RouteScreen: undefined;
  HomeNavigation: undefined;
  ExploreNavigation: undefined;
  BookmarksNavigation: undefined;
  PlaceScreen: {placeId: number};
};

//tabs nav types
type HomeNavigationType = {
  Home: undefined;
};

type ProfileNavigationType = {
  Profile: undefined;
  EditProfile: undefined;
};
