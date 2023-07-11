import React from 'react';
import $$StackLibrary from '@smartface-generated/routers/components/StackLibrary';

interface IStackLibrary {
  StackLibrary?: Parameters<typeof $$StackLibrary>['0'];
}

const StackLibrary = (props: IStackLibrary) => {
  return <$$StackLibrary {...props.StackLibrary} />;
};

export default StackLibrary;
