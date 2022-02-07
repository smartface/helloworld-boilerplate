/* globals lang */
import 'i18n/i18n'; // Generates global lang object
import Application from '@smartface/native/application';
import { errorStackBySourceMap } from '@smartface/source-map';
import System from '@smartface/native/device/system';
// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.on(Application.Events.UnhandledError, (e: UnhandledError) => {
  const error = errorStackBySourceMap(e);
  const message = {
    message: System.OS === System.OSType.ANDROID ? error.stack : e.message,
    stack: System.OS === System.OSType.IOS ? error.stack : undefined
  };
  console.error("Unhandled Error: ", message);
  alert(JSON.stringify(message, null, 2), e.type || lang.applicationError);
});

import 'start';
