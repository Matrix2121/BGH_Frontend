import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  GameDetailsModal: { gameId: string };
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type MainTabParamList = {
  Library: undefined;
  Events: undefined;
  Home: undefined;
  Groups: undefined;
  Profile: undefined;
  /** Hidden route used for expanded-menu shortcuts. */
  Placeholder: undefined;
};

export type LibraryStackParamList = {
  LibraryHome: undefined;
  MyCollection: undefined;
  GroupCollections: undefined;
  Wishlist: undefined;
};

export type GroupsStackParamList = {
  GroupsHome: undefined;
  InsideGroup: undefined;
  VoteOnGames: undefined;
};

export type EventsStackParamList = {
  EventsHome: undefined;
  EventPlanner: undefined;
};

export const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

