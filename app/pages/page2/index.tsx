import React, { useState } from 'react';
import Page2Design, { page2Title, page2HeaderBarClassList } from '@smartface-generated/pages/page2';
import SimpleViewItem from '@app/components/SimpleViewItem';
import { View, _Text } from 'react-native';

export const Page2Options = { title: page2Title, headerConfiguration: page2HeaderBarClassList };

export default (props: any) => {
    const [switcState, setSwitchState] = useState(true);
    console.log('switch', switcState);
    const [text, setText] = useState('');

    console.log('switch', switcState);

    return (
        <Page2Design
            switch1={{
                value: switcState,
                onValueChange: setSwitchState,
            }}
            textInput1={{
                onChangeText: _text => {
                    console.log('TEXT: ', _text);
                    setText(_text);
                },
                value: text,
            }}
            flatList1={{
                classList: [],
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                renderItem: ({ item, index }: any) => (
                    <SimpleViewItem data={item} index={index} />
                ),
                ListFooterComponent: (
                    <View
                        style={{
                            height: 200,
                            width: 100,
                            backgroundColor: 'black',
                        }}
                    />
                ),
            }}
        />
    );
};
