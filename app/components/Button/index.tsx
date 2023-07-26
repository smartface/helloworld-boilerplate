import React from 'react';
import ButtonDesign, { IButton } from '@smartface-generated/components/Button';

export type ButtonProps = IButton & {
  //User define types
};

export default (props: ButtonProps) => {
  return <ButtonDesign {...props} />;
};
