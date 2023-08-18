import React from 'react';

import { headerBar } from '@smartface-generated/pages/page3';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export const Page3HeaderView = (props: NativeStackHeaderProps) => {
    return <headerBar.View closePressable={{
        onPress: () => {
            console.log('pressed HeaderBar', props);
            //@ts-ignore
            props.route.params?.onCloseButtonPressed();
        }
    }} />;
};

export default {
    title: headerBar.title,
    classList: headerBar.classList,
    View: Page3HeaderView,
    hasCustomView: headerBar.hasCustomView
};
