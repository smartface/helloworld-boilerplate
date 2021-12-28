import {
  NativeRouter as Router,
  NativeStackRouter as StackRouter,
  Route,
} from '@smartface/router';
import * as Pages from 'pages';
import Application from '@smartface/native/application';

Application.on(Application.Events.BackButtonPressed, () => {
	Router.getActiveRouter()?.goBack();
});

const router = Router.of({
  path: '/',
  isRoot: true,
  routes: [
    StackRouter.of({
      path: '/pages',
      routes: [
        Route.of<Pages.Page1>({
          path: '/pages/page1',
          build(router, route) {
            return new Pages.Page1(router, route);
          },
        }),
        Route.of<Pages.Page2>({
          path: '/pages/page2',
          build(router, route) {
            return new Pages.Page2(router, route)
          },
        }),
      ],
    }),
  ]
});

export default router;
