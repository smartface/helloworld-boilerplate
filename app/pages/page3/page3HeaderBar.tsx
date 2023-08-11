import React from 'react';
import { getStyle } from '@smartface-generated/utils';

import { headerBar } from '@smartface-generated/pages/page3';

export const Page3HeaderView = (props: any) => {
  return <headerBar.View />;
};

export default {
  title: headerBar.title,
  classList: headerBar.classList,
  View: Page3HeaderView,
  hasCustomView: headerBar.hasCustomView
};
