import React from 'react';

import AppNavigatorUI from './app/routers';

import { ThemeProvider } from './app/context';
export default function App() {
  return (
    <ThemeProvider>
      <AppNavigatorUI />
    </ThemeProvider>
  );
}
