import React from 'react';
import GenderCompDesign from '@smartface-generated/components/GenderComp';

export default (props: any) => {

    console.log('Props: ', props.isActive);

    return <GenderCompDesign
        genderComp={props}
        vimage={{
            classList: props.isActive ? ['.genderCompMale-vimage.active'] : []
        }}
        text1={{
            classList: props.isActive ? ['.genderCompMale-text1.active'] : []
        }}
    />;
};
