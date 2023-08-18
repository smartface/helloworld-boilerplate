import React from 'react';

import { headerBar } from '@smartface-generated/pages/page2';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export const Page2HeaderView = (props: NativeStackHeaderProps) => {

    return <headerBar.View />;
};

export default {
    title: headerBar.title,
    classList: headerBar.classList,
    View: Page2HeaderView,
    hasCustomView: headerBar.hasCustomView
};
