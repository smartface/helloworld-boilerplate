import Page3Design from 'generated/pages/page3';
import { Route, Router } from '@smartface/router';
import { withDismissAndBackButton } from '@smartface/mixins';

export default class Page3 extends withDismissAndBackButton(Page3Design) {
  private disposeables: (() => void)[] = [];

  routeData: Record<string, any> = this.route.getState().routeData;
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
    this.initBackButton(this.router);
    this.initDismissButton(this.router);
    this.disposeables.push(this.btnDismiss.on('press', () => this.router.goBack()));

  }

  /**
   * @event onLoad
   * This event is called once when page is created.
   */
  onLoad() {
    super.onLoad();
  }

  onHide(): void {
    this.dispose();
  }
  dispose(): void {
    this.disposeables.forEach((item) => item());
  }
}
