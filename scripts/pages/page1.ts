import Page1Design from 'generated/pages/page1';
import PageTitleLayout from 'components/PageTitleLayout';
import System from '@smartface/native/device/system';
import Label from '@smartface/native/ui/label';
import { Route, Router } from '@smartface/router';
import { styleableComponentMixin } from '@smartface/styling-context';
import { themeService } from 'theme';
import { i18n } from '@smartface/i18n';
import Screen from '@smartface/native/device/screen';
import Image from '@smartface/native/ui/image';

class StyleableLabel extends styleableComponentMixin(Label) {}

export default class Page1 extends Page1Design {
  private disposeables: (() => void)[] = [];
  lbl: StyleableLabel;
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

    this.imageView1.image = Image.createFromFile('assets://logo.png')
  }

  onHide(): void {
    this.dispose();
  }

  dispose(): void {
    this.disposeables.forEach((item) => item());
  }
}
