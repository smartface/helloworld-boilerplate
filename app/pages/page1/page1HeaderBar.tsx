import React from 'react';

import { headerBar } from '@smartface-generated/pages/page1';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export const Page1HeaderView = (props: NativeStackHeaderProps) => {

    return <headerBar.View />;
};

export default {
    title: headerBar.title,
    classList: headerBar.classList,
    View: Page1HeaderView,
    hasCustomView: headerBar.hasCustomView
};
