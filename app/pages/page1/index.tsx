import React from 'react';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import Page1Design from '@smartface-generated/pages/page1';
import headerBar from '@app/pages/page1/page1HeaderBar';
import { useTranslation } from 'react-i18next';
import i18n from '@app/translation';
import { useGetPetByIdQuery } from '@app/store/deals';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';

export const Page1Options = headerBar;

export type IPage1Props = {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<any>;
};

export default (props: any) => {
    const { t } = useTranslation();
    const { data, isLoading, isSuccess, isError, } = useGetPetByIdQuery({ petId: 10 })
    const user = useSelector((state: RootState) => state.user)
    console.log("user:", user.token)

    return (
        <Page1Design
            text1_1={{ label: t('welcome') }}
            btnLanguage={{
                onPress: () => {
                    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')

                }
            }}
            pressable1={{
                onPress: () => {
                    props.navigation.navigate('modalRouter')
                }
            }}
        />
    )
};
