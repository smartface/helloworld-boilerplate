import '@smartface/native';
import 'i18n'; // Initialize i18n
import Application from '@smartface/native/application';
import { errorStackBySourceMap } from '@smartface/source-map';
import System from '@smartface/native/device/system';
// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.on('unhandledError', (e: UnhandledError) => {
  const error = errorStackBySourceMap(e);
  const message = {
    message: System.OS === System.OSType.ANDROID ? error.message : e.message,
    stack: error.stack
  };
  console.error('Unhandled Error: ', message);
  alert(JSON.stringify(message, null, 2), e.type || 'Application Error');
});
import 'start';
