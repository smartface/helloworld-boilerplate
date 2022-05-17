import Page1Design from 'generated/pages/page1';
import PageTitleLayout from 'components/PageTitleLayout';
import System from '@smartface/native/device/system';
import Label from '@smartface/native/ui/label';
import { Route, Router } from '@smartface/router';
import { styleableComponentMixin } from '@smartface/styling-context';
import { themeService } from 'theme';
import { i18n } from '@smartface/i18n';
import Screen from '@smartface/native/device/screen';

class StyleableLabel extends styleableComponentMixin(Label) {}

export default class Page1 extends Page1Design {
  private disposeables: (() => void)[] = [];
  constructor(private router?: Router, private route?: Route) {
    super({});
    this.btnNext.text = i18n.instance.t('nextPage');
    console.log('[page1] constructor');
  }

  /**
   * @event onShow
   * This event is called when a page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    console.log('[page1] onShow');
    const lbl = new StyleableLabel();
    this.addChild(lbl, 'page1lbl1unique', 'sf-label');
    lbl.text = i18n.instance.t('runtimeLabel');
    themeService.addGlobalComponent(this.headerBar.titleLayout, 'page1TitleLayout');
    this.headerBar.titleLayout.width = Screen.width;
    this.headerBar.titleLayout.applyLayout();
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
    console.log('[page1] onLoad');
    this.headerBar.leftItemEnabled = false;
    this.headerBar.titleLayout = new PageTitleLayout();
    if (System.OS === System.OSType.ANDROID) {
      this.headerBar.title = '';
    }

    const lbl = new StyleableLabel();
    this.addChild(lbl, 'page1lbl1unique', 'sf-label', (userProps: Record<string, any>) => {
      return { ...userProps };
    });
    lbl.text = "It's a runtime label added from code";
  }

  onHide(): void {
    this.dispose();
  }

  dispose(): void {
    this.disposeables.forEach((item) => item());
  }
}
