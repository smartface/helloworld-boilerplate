import Page3Design from 'generated/pages/page3';
import { Route, Router } from '@smartface/router';
import { withDismissAndBackButton } from '@smartface/mixins';

export default class Page3 extends withDismissAndBackButton(Page3Design) {
  routeData: Record<string, any> = this.route.getState().routeData;
  parentController: any;

  constructor(private router?: Router, private route?: Route) {
    super({});
    this.btnDismiss.on('press', () => this.router.goBack());
  }

  /**
   * @event onShow
   * This event is called when a page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    this.initDismissButton(this.router);
  }

  /**
   * @event onLoad
   * This event is called once when page is created.
   */
  onLoad() {
    super.onLoad();
  }
}
