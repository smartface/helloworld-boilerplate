import Page2Design from 'generated/pages/page2';
import HeaderBarItem from '@smartface/native/ui/headerbaritem';
import PageTitleLayout from 'components/PageTitleLayout';
import HeaderBar from '@smartface/native/ui/headerbar';
import { Router, Route } from '@smartface/router';

import { withDismissAndBackButton } from '@smartface/mixins';
import Color from '@smartface/native/ui/color';
import Button from '@smartface/native/ui/button';
import { i18n } from '@smartface/i18n';

export default class Page2 extends withDismissAndBackButton(Page2Design) {
  routeData: Record<string, any> = this.route.getState().routeData;
  parentController: any;
  private disposeables: (() => void)[] = [];
  constructor(private router?: Router, private route?: Route) {
    super({});
    this.btnSayHello.text = i18n.instance.t('sayHello');
    this.btnOpenModal.text = i18n.instance.t('openModal');
    this.btnLanguage.text = i18n.instance.t('printLanguageExample');
    this.disposeables.push(this.btnSayHello.on(Button.Events.Press, () => alert(i18n.instance.t('helloWorld'))));
    this.disposeables.push(this.btnOpenModal.on(Button.Events.Press, () => this.router.push('page3')));
    this.disposeables.push(this.btnLanguage.on(Button.Events.Press, () => this.languageDemo()));
  }

  languageDemo() {
      console.log({
        helloWorld: i18n.instance.t('helloWorld'),
        welcomeUser: i18n.instance.t('welcomeUser', { user: 'Smartface' }),
        keyWithCount0: i18n.instance.t('keyWithCount', {count: 0}),
        keyWithCount1: i18n.instance.t('keyWithCount', {count: 1}),
        keyWithCount5: i18n.instance.t('keyWithCount', {count: 5}),
      })
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
        title: i18n.instance.t('option'),
        color: Color.WHITE,
        onPress: () => {
          console.log(i18n.instance.t('optionPressed'));
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
