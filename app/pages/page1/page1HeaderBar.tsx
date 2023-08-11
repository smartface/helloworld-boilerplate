import React from 'react';

import { headerBar } from '@smartface-generated/pages/page1';

export const Page1HeaderView = (props: any) => {

    return <headerBar.View />;
};

export default {
    title: headerBar.title,
    classList: headerBar.classList,
    View: Page1HeaderView,
    hasCustomView: headerBar.hasCustomView
};
