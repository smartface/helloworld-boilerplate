import {
  NativeRouter as Router,
  NativeStackRouter as StackRouter,
  Route,
} from '@smartface/router';
import * as Pages from 'pages';
import '@smartface/extension-utils/lib/router/goBack'; // Implements onBackButtonPressed

const router = Router.of({
  path: '/',
  isRoot: true,
  routes: [
    StackRouter.of({
      path: '/pages',
      routes: [
        Route.of({
          path: '/pages/page1',
          build(router, route) {
            return new Pages.Page1(router);
          },
        }),
        Route.of({
          path: '/pages/page2',
          build(router, route) {
            return new Pages.Page2(router)
          },
        }),
      ],
    }),
  ],
});

export default router;
