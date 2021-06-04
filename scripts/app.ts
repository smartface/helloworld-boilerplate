/* globals lang */
import 'i18n/i18n'; // Generates global lang object
import Application from 'sf-core/application';
import { errorStackBySourceMap } from 'error-by-sourcemap';
import System from 'sf-core/device/system';
import 'theme';
import 'sf-extension-utils';
import router from 'routes';

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function (e: UnhandledError) {
  const error = errorStackBySourceMap(e);
  alert({
    title: e.type || lang.applicationError,
    message:
      System.OS === 'Android' ? error.stack : e.message + '\n\n*' + error.stack,
  });
};

router.push('/pages/page1');
