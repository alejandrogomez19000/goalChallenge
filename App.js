/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import NavigationStack from "./navigation";
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationStack />
    </Provider>
  );
};

export default App;
