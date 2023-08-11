import React from 'react';

import { headerBar } from '@smartface-generated/pages/page2';

export const Page2HeaderView = (props: any) => {

    return <headerBar.View />;
};

export default {
    title: headerBar.title,
    classList: headerBar.classList,
    View: Page2HeaderView,
    hasCustomView: headerBar.hasCustomView
};
