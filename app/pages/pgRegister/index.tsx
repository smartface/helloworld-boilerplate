import React, { useState } from 'react';
import PgRegisterDesign from '@smartface-generated/pages/pgRegister';
import { Text, View } from 'react-native';

export default (props: any) => {
    const [gender, setGender] = useState('male');

    return (
        <PgRegisterDesign
            genderComp1={
                {
                    isActive: false,
                } as any
            }
            genderCompMale={
                {
                    isActive: true,
                }
            }
        />
    );
};
