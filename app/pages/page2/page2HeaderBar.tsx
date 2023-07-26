import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getStyle } from '@smartface-generated/utils';

import { headerBar } from '@smartface-generated/pages/page2';

export const Page2HeaderView = (props: any) => {
  const insets = useSafeAreaInsets();

  return <headerBar.View />;
};

export default {
  title: headerBar.title,
  classList: headerBar.classList,
  View: Page2HeaderView,
  hasCustomView: headerBar.hasCustomView
};
