import React from 'react';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import Page3Design from '@smartface-generated/pages/page3';
import headerBar from '@app/pages/page3/page3HeaderBar';

export const Page3Options = headerBar;

export type IPage3Props = {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<any>;
};

export default (props: IPage3Props) => {
    return <Page3Design pressable1={{
        onPress: () => props.navigation.canGoBack() && props.navigation.goBack()
    }} />;
};
