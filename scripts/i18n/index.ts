import de from './de';
import en from './en';
import fi from './fi';
import tr from './tr';
import  i18n  from '@smartface/i18n';
import System from '@smartface/native/device/system';

new i18n({
  lng: Device.language,
  debug: !!System.isEmulator,
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
