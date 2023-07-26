import React from 'react';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import Page1Design from '@smartface-generated/pages/page1';
import headerBar from '@app/pages/page1/page1HeaderBar';

export const Page1Options = headerBar;

export type IPage1Props = {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<any>;
};

export default (props: IPage1Props) => {
    return <Page1Design
        pressable1={{
            onPress: () => props.navigation.navigate('page2', { param1: 1, param2: '2' })
        }}
    />;
};
