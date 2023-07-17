import React from 'react';

import AppNavigatorUI from './app/routers';

import { ThemeProvider } from './app/context';
import { Provider } from 'react-redux'
import store from './app/store'

// import translation
import './app/translation';

export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <AppNavigatorUI />
            </ThemeProvider>
        </Provider>
    );
}
