import Page1Design from 'generated/pages/page1';
import PageTitleLayout from 'components/PageTitleLayout';
import System from '@smartface/native/device/system';
import Label from '@smartface/native/ui/label';
import { Route, Router } from '@smartface/router';
import { withDismissAndBackButton } from '@smartface/mixins';
import Button from '@smartface/native/ui/button';
import { styleableComponentMixin } from '@smartface/styling-context';
import { themeService } from 'theme';

class StyleableLabel extends styleableComponentMixin(Label) {}

export default class Page1 extends withDismissAndBackButton(Page1Design) {
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
    const lbl = new StyleableLabel();
    this.addChild(lbl, 'page1lbl1unique', 'sf-label', (userProps: Record<string, any>) => {
      return { ...userProps };
    });
    lbl.text = "It's a runtime label added from code";
    this.headerBar.titleLayout.applyLayout();
    this.disposeables.push(
      this.btnNext.on(Button.Events.Press, () => {
        this.router.push('page2', { message: 'Hello World!' });
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
    themeService.addGlobalComponent(this.headerBar.titleLayout, "page1TitleLayout")
    if (System.OS === System.OSType.ANDROID) {
      this.headerBar.title = '';
    }
  }

  onHide(): void {
    this.dispose();
  }

  dispose(): void {
    this.disposeables.forEach((item) => item());
  }

}
