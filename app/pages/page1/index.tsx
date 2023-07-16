import React from 'react';
import Page1Design, { page1Title, page1HeaderBarClassList } from '@smartface-generated/pages/page1';
import { useTranslation } from 'react-i18next';
import i18n from '@app/translation';
import { Text } from 'react-native';

export const Page1Options = { title: page1Title, headerConfiguration: page1HeaderBarClassList };

export default (props: any) => {
    const { t } = useTranslation();
    return <Page1Design
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
    />;
};
