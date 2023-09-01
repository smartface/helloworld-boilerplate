import React, { useEffect } from 'react';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import Page1Design, { headerBar } from '@smartface-generated/pages/page1';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';
import { useGetPetByIdQuery } from '@app/store/deals';
import i18n from '@app/translation';

// HeaderBar View
const Page1HeaderView = (props: NativeStackHeaderProps) => {
    return <headerBar.View />;
};

export const Page1Options = {
    title: headerBar.title,
    classList: headerBar.classList,
    View: Page1HeaderView,
    hasCustomView: headerBar.hasCustomView
};

export type IPage1Props = {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<any>;
};

// Page Screen
export default (props: IPage1Props) => {

    useEffect(() => {
        props.navigation.setOptions({ header: headerBar.hasCustomView ? (props: NativeStackHeaderProps) => (<Page1HeaderView {...props} />) : undefined });
    }, [props.navigation]);

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
                    props.navigation.navigate('page2')
                }
            }}
        />
    )
};
