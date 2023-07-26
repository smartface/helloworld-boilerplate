import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getStyle } from '@smartface-generated/utils';

import { headerBar } from '@smartface-generated/pages/page1';

export const Page1HeaderView = (props: any) => {
  const insets = useSafeAreaInsets();

  return <headerBar.View headerView={{ style: { height: undefined, width: undefined, paddingTop: insets.top } }} />;
};

export default {
  title: headerBar.title,
  classList: headerBar.classList,
  View: Page1HeaderView,
  hasCustomView: headerBar.hasCustomView
};
