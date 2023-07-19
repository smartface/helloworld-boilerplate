import React, { useState } from 'react';
import Page1Design, { page1Title, page1HeaderBarClassList } from '@smartface-generated/pages/page1';
import { useTranslation } from 'react-i18next';
import i18n from '@app/translation';
import { useGetPetByIdQuery } from '@app/store/deals';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Page1Options = { title: page1Title, headerConfiguration: page1HeaderBarClassList };

export default (props: any) => {
    const { t } = useTranslation();
    const { data, isLoading, isSuccess, isError, } = useGetPetByIdQuery({ petId: 10 })
    const user = useSelector((state: RootState) => state.user)
    console.log("user:", user.token)

    return (
        <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: '#fff' }} contentContainerStyle={{ paddingHorizontal: 20, backgroundColor: '#fff' }}>
            <Page1Design
                textInput1={{ placeholderTextColor: 'gray', padding: 20 }}
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
        </KeyboardAwareScrollView>
    )
};
