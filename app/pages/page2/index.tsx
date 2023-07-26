import React from 'react';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import Page2Design from '@smartface-generated/pages/page2';
import headerBar from '@app/pages/page2/page2HeaderBar';

export const Page2Options = headerBar;

export type IPage2Props = {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<any>;
};

export default (props: IPage2Props) => {
  return <Page2Design />;
};
