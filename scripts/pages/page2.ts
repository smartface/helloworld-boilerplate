import Page2Design from 'generated/pages/page2';
import HeaderBarItem from '@smartface/native/ui/headerbaritem';
import PageTitleLayout from 'components/PageTitleLayout';
import HeaderBar from '@smartface/native/ui/headerbar';
import { Router, Route } from '@smartface/router';

import { withDismissAndBackButton } from '@smartface/mixins';
import Color from '@smartface/native/ui/color';
import Button from '@smartface/native/ui/button';
import Image from '@smartface/native/ui/image';

export default class Page2 extends withDismissAndBackButton(Page2Design) {
  routeData: Record<string, any> = this.route.getState().routeData;
  parentController: any;
  private disposeables: (() => void)[] = [];
  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  /**
   * @event onShow
   * This event is called when a page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    this.headerBar.leftItemEnabled = false;
    this.initDismissButton(this.router);
    this.initBackButton(this.router);
    this.routeData && console.info(this.routeData.message);

    this.disposeables.push(this.btnSayHello.on('press', () => alert('Hello World!')));
    this.disposeables.push(this.btnOpenModal.on('press', () => this.router.push('page3')));
  }

  /**
   * @event onLoad
   * This event is called once when page is created.
   */
  onLoad() {
    super.onLoad();
    let headerBar: HeaderBar;
    this.headerBar.setItems([
      new HeaderBarItem({
        title: 'Option',
        color: Color.WHITE,
        onPress: () => {
          console.log('You pressed Option item!');
        }
      })
    ]);
  }

  onHide(): void {
    this.dispose();
  }

  dispose(): void {
    this.disposeables.forEach((item) => item());
  }
}
