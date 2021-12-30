import Page3Design from 'generated/pages/page3';
import Router from '@smartface/router/lib/router/Router';
import { Route } from '@smartface/router';
import { withDismissButton } from '@smartface/mixins';

export default class Page3 extends withDismissButton(Page3Design) {
  routeData: any;
  parentController: any;

  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  /**
   * @event onShow
   * This event is called when a page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
  }

  /**
   * @event onLoad
   * This event is called once when page is created.
   */
  onLoad() {
    super.onLoad();
  }
}
