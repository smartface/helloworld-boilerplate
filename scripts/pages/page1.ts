import Page1Design from 'generated/pages/page1';
import PageTitleLayout from 'components/PageTitleLayout';
import System from '@smartface/native/device/system';
import Label from '@smartface/native/ui/label';
import Router from '@smartface/router/lib/router/Router';
import { Route } from '@smartface/router';
import { withDismissButton } from '@smartface/mixins';
import Button from '@smartface/native/ui/button';

export default class Page1 extends withDismissButton(Page1Design) {
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
    console.log('onShow Page1');
    const lbl = new Label();
    this.addChild(lbl, 'page1lbl1unique', 'sf-label', (userProps: Record<string, any>) => {
      return { ...userProps, height: 50 };
    });

    lbl.text = "It's a runtime label";

    this.headerBar.titleLayout.applyLayout();
    this.disposeables.push(
      this.btnNext.on(Button.Events.Press, () => {
        this.router.push('/pages/page2', { message: 'Hello World!' });
      })
    );
  }

  /**
   * @event onLoad
   * This event is called once when page is created.
   */
  onLoad() {
    super.onLoad();
    console.log('Onload Page1');
    this.headerBar.leftItemEnabled = false;
    this.headerBar.titleLayout = new PageTitleLayout();
    this.addStyleableChild(this.headerBar.titleLayout, 'titleLayout');
    if (System.OS === 'Android') {
      this.headerBar.title = '';
    }
  }

  public onHide(): void {
    this.dispose();
  }

  public dispose(): void {
    this.disposeables.forEach((item) => item());
  }
}
