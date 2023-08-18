import React, { useCallback, useEffect } from 'react';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import Page3Design from '@smartface-generated/pages/page3';
import headerBar from '@app/pages/page3/page3HeaderBar';
import page3HeaderBar from '@app/pages/page3/page3HeaderBar';

export const Page3Options = headerBar;

export type IPage3Props = {
    navigation: NavigationProp<Record<string, any>>;
    route: RouteProp<any>;
};

export default (props: IPage3Props) => {

    const onCloseButtonPressed = useCallback(() => {
        props.navigation.canGoBack() && props.navigation.goBack();
    }, [props.navigation]);

    useEffect(() => {
        props.navigation.setParams({ onCloseButtonPressed });
    }, [props.navigation]);

    return <Page3Design pressable1={{
        onPress: onCloseButtonPressed
    }} />;
};
