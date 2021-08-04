/* globals lang */
import 'i18n/i18n'; // Generates global lang object
import Application from '@smartface/native/application';
import { errorStackBySourceMap } from 'error-by-sourcemap';
import System from '@smartface/native/device/system';
import '@smartface/extension-utils';
import 'theme';
import router from 'routes';

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function (e: UnhandledError) {
    const error = errorStackBySourceMap(e);
    console.error(error);
    alert({
        title: e.type || lang.applicationError,
        message:
            System.OS === 'Android' ? error.stack : e.message + '\n\n*' + error.stack,
    });
};

router.push('/pages/page1');
