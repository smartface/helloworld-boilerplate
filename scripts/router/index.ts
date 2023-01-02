import System from '@smartface/native/device/system';
import $$AppRouter from 'generated/router';

class MainRouter extends $$AppRouter {
  constructor() {
    super();
  }
}

const router = new MainRouter();

let listenerCounter = 0;
router.listen((location, action) => {
  if (System.isEmulator) {
    console.log(`[ROUTER] Counter: ${listenerCounter++} | location url: ${location.url}`);
  }
});
export default router;
