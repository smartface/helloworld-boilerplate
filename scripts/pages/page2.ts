import Page2Design from 'generated/pages/page2';
import HeaderBarItem from '@smartface/native/ui/headerbaritem';
import { Router, Route } from '@smartface/router';

import { withDismissAndBackButton } from '@smartface/mixins';
import Color from '@smartface/native/ui/color';
import  i18n  from '@smartface/i18n';

export default class Page2 extends withDismissAndBackButton(Page2Design) {
  routeData: Record<string, any>;
  parentController: any;
  constructor(private router?: Router, private route?: Route) {
    super({});
    this.btnSayHello.text = i18n.instance.t('sayHello');
    this.btnOpenModal.text = i18n.instance.t('openModal');
    this.btnLanguage.text = i18n.instance.t('printLanguageExample');
    this.btnSayHello.on('press', () => alert(i18n.instance.t('helloWorld')));
    this.btnOpenModal.on('press', () => this.router.push('page3'));
    this.btnLanguage.on('press', () => this.languageTest());
  }

  languageTest() {
    console.log({
      helloWorld: i18n.instance.t('helloWorld'),
      welcomeUser: i18n.instance.t('welcomeUser', { user: 'Smartface' }),
      keyWithCount0: i18n.instance.t('keyWithCount', { count: 0 }),
      keyWithCount1: i18n.instance.t('keyWithCount', { count: 1 }),
      keyWithCount5: i18n.instance.t('keyWithCount', { count: 5 })
    });
  }

  /**
   * @event onShow
   * This event is called when a page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    this.headerBar.leftItemEnabled = false;
    this.initBackButton(this.router);
    this.routeData && console.info(this.routeData.message);
  }

  /**
   * @event onLoad
   * This event is called once when page is created.
   */
  onLoad() {
    super.onLoad();
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
}
