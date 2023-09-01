import React, { useCallback, useEffect } from 'react';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import Page3Design, { headerBar } from '@smartface-generated/pages/page3';

// HeaderBar View
const Page3HeaderView = (props: NativeStackHeaderProps & { onClosePressed: () => void }) => {
    return <headerBar.View closePressable={{
        onPress: props.onClosePressed
    }} />;
};

export const Page3Options = {
    title: headerBar.title,
    classList: headerBar.classList,
    View: Page3HeaderView,
    hasCustomView: headerBar.hasCustomView
};

export type IPage3Props = {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<any>;
};

// Page Screen
export default (props: IPage3Props) => {
    const onClosePressed = useCallback(() => {
        props.navigation.canGoBack() && props.navigation.goBack();
    }, [props.navigation]);
    useEffect(() => {
        props.navigation.setOptions({
            header: headerBar.hasCustomView ? (props: NativeStackHeaderProps) => (<Page3HeaderView {...props} onClosePressed={onClosePressed} />) : undefined
        });
    }, [props.navigation, onClosePressed]);

    return <Page3Design />;
};
