import { NativeRouter, NativeStackRouter, Route } from '@smartface/router';
import * as Pages from 'pages';
import Application from '@smartface/native/application';

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
        Route.of<Pages.Page1>({
          path: '/pages/page1',
          build(router, route) {
            return new Pages.Page1(router, route);
          }
        }),
        Route.of<Pages.Page2>({
          path: '/pages/page2',
          build(router, route) {
            return new Pages.Page2(router, route);
          },
        }),
        NativeStackRouter.of({
          path: '/pages/page3',
          to: '/pages/page3/main',
          modal: true,
          routes: [
            Route.of<Pages.Page3>({
              path: '/pages/page3/main',
              build(router, route) {
                return new Pages.Page3(router, route);
              }
            })
          ]
        })
      ]
    })
  ]
});

export default router;
