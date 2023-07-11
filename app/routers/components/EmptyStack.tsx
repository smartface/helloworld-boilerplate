import React from 'react';
import $$EmptyStack from '@smartface-generated/routers/components/EmptyStack';

interface IEmptyStack {
  EmptyStack?: Parameters<typeof $$EmptyStack>['0'];
}

const EmptyStack = (props: IEmptyStack) => {
  return <$$EmptyStack {...props.EmptyStack} />;
};

export default EmptyStack;
