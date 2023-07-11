import React from 'react';
import $$AppRouter from '@smartface-generated/routers';

import { NavigationContainer } from '@react-navigation/native';

const MainRouter = () => {
  return (
    <NavigationContainer>
      <$$AppRouter />
    </NavigationContainer>
  );
};

export default MainRouter;
