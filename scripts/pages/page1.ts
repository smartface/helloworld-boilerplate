import Page1Design from 'generated/pages/page1';
import Label from '@smartface/native/ui/label';
import { Route, Router } from '@smartface/router';
import { styleableComponentMixin } from '@smartface/styling-context';
import  i18n  from '@smartface/i18n';

class StyleableLabel extends styleableComponentMixin(Label) {}

export default class Page1 extends Page1Design {
  private disposeables: (() => void)[] = [];
  lbl: StyleableLabel;
  constructor(private router?: Router, private route?: Route) {
    super({});
    this.lbl = new StyleableLabel();
    console.log('[page1] constructor');
  }

  setTexts() {
    this.btnNext.text = i18n.instance.t('nextPage');
    this.lbl.text = i18n.instance.t('runtimeLabel');
  }

  /**
   * @event onShow
   * This event is called when a page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    console.log('[page1] onShow');
    this.disposeables.push(
      this.btnNext.on('press', () => {
        this.router.push('page2', { message: i18n.instance.t('helloWorld') });
      })
    );
  }
  /**
   * @event onLoad
   * This event is called once when page is created.
   */
  onLoad() {
    super.onLoad();
    this.setTexts();
    console.log('[page1] onLoad');
    this.headerBar.leftItemEnabled = false;
    this.addChild(this.lbl, 'page1lbl1unique', 'sf-label', (userProps: Record<string, any>) => {
      return { ...userProps };
    });
  }

  onHide(): void {
    this.dispose();
  }

  dispose(): void {
    this.disposeables.forEach((item) => item());
  }
}
