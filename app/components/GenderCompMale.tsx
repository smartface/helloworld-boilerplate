import React from 'react';
import GenderCompMaleDesign from '@smartface-generated/components/GenderCompMale';

export default (props: any) => {
    return <GenderCompMaleDesign genderCompMale={props}
        vimage={{
            classList: props.isActive ? ['.genderCompMale-vimage.active'] : []
        }}
        text1={{
            classList: props.isActive ? ['.genderCompMale-text1.active'] : []
        }}
        iconGender={{
            stroke: props.isActive ? 'white' : 'black'
        }}
    />;
};
