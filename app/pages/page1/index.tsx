import React from 'react';
import Page1Design, { page1Title, page1HeaderBarClassList } from '@smartface-generated/pages/page1';

export const Page1Options = { title: page1Title, headerConfiguration: page1HeaderBarClassList };

export default (props: any) => {
  return <Page1Design />;
};
