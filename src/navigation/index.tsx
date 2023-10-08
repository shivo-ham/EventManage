import React from 'react';
import NavigatorStack from './navigatorStack';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from '../redux/configureStore';

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigatorStack />
      </Provider>
    </SafeAreaProvider>
  );
}
