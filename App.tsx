import React from 'react';

import AppNavigatorUI from './app/routers';

import { ThemeProvider } from './app/context';

// import translation
import './app/translation';

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigatorUI />
    </ThemeProvider>
  );
}
