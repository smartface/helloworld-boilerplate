import React, { useContext, useEffect } from 'react';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import Page2Design, { headerBar } from '@smartface-generated/pages/page2';
import { ThemeContext } from '@app/context';

// HeaderBar View
const Page2HeaderView = (props: NativeStackHeaderProps) => {
    return <headerBar.View />;
};

export const Page2Options = {
    title: headerBar.title,
    classList: headerBar.classList,
    View: Page2HeaderView,
    hasCustomView: headerBar.hasCustomView
};

export type IPage2Props = {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<any>;
};

// Page Screen
export default (props: IPage2Props) => {
    const { styles, variables } = useContext(ThemeContext);
    console.log('Variables:mainColor ', variables.mainColor);
    useEffect(() => {
        props.navigation.setOptions({ header: headerBar.hasCustomView ? (props: NativeStackHeaderProps) => <Page2HeaderView {...props} /> : undefined });
    }, [props.navigation]);

    return <Page2Design pressable1={{
        onPress: () => props.navigation.navigate('modalRouter')
    }} />;
};
