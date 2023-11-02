
import React from 'react';
import { useContext } from 'react';

import { StatusBar, View } from 'react-native';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';


import { ThemeContext } from '@app/context';
import { mergeStyle } from '@smartface-generated/utils';

export type IPageProps = {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<any>;
};

export const HeaderView = (props: any) => {
    const { styles } = useContext(ThemeContext);
    return <View />
};

export const headerBar = {
    title: '__page__',
    classList: ['.headerBar'],
    View: HeaderView,
    hasCustomView: false
};

export default (props: IPageProps) => {
    const { styles } = useContext(ThemeContext);
    const mergedPageStyle = mergeStyle([styles['.page']]);
    const pageViewStyle = mergedPageStyle;
    return (
        <View style={pageViewStyle}>
            <StatusBar />
        </View>
    );
};