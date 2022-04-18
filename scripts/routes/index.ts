import { NativeRouter, NativeStackRouter, Route } from '@smartface/router';
import Application from '@smartface/native/application';

import Page1 from 'pages/page1';
import Page2 from 'pages/page2';
import Page3 from 'pages/page3';

Application.on(Application.Events.BackButtonPressed, () => {
    NativeRouter.getActiveRouter()?.goBack();
});

const router = NativeRouter.of({
  path: '/',
  isRoot: true,
  routes: [
    NativeStackRouter.of({
      path: '/pages',
      routes: [
        Route.of<Page1>({
          path: '/pages/page1',
          build(router, route) {
            return new Page1(router,route);
          }
        }),
        Route.of<Page2>({
          path: '/pages/page2',
          build(router, route) {
            return new Page2(router,route);
          }
        }),
        NativeStackRouter.of({
          path: '/pages/page3',
          to: '/pages/page3/main',
          modal: true,
          routes: [
            Route.of<Page3>({
              path: '/pages/page3/main',
              build(router, route) {
                return new Page3(router, route);
              }
            })
          ]
        })
      ]
    })
  ]
});


export default router;
