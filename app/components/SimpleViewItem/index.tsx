import React from 'react';
import SimpleViewItemDesign, { ISimpleViewItem } from '@smartface-generated/components/SimpleViewItem';

export type SimpleViewItemProps = ISimpleViewItem & {
  //User define types
};

export default (props: SimpleViewItemProps) => {
  return <SimpleViewItemDesign {...props} />;
};
