/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from './src/utils/Navigation';
import { Provider } from 'react-redux';
import Store from './src/redux/store';

function App() {
    return (
        <Provider store={Store}>
            <Navigation />
        </Provider>
    );
}

export default App;
