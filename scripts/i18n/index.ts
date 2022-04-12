import de from './de';
import en from './en';
import fi from './fi';
import tr from './tr';
import { isEmulator } from '@smartface/native/device/system';
import { i18n } from '@smartface/i18n';

new i18n({lng: Device.language, 
    debug: !!isEmulator,
    resources: {
        en: {
            translation: en
        },
        tr: {
            translation: tr
        },
        de: {
            translation: de
        },
        fi: {
            translation: fi
        }
    },
    fallbackLng: 'en'
});
