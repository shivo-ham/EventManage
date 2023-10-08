import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './navigationHelper';
import {Event, EventGallery} from './route';
import FlashMessage from 'react-native-flash-message';
import '../utils/ignoreWarnings';

type RootStackParamList = {
  Event: undefined;
  EventGallery: undefined;
  DatePickerScreen: {title: string; currentDate: Date; callback: any};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
export default function NavigatorStack(): JSX.Element {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'simple_push',
        }}>
        <RootStack.Screen name="Event" component={Event} />
        <RootStack.Screen name="EventGallery" component={EventGallery} />
      </RootStack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
