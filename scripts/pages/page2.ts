import Page2Design from 'generated/pages/page2';
import HeaderBarItem from '@smartface/native/ui/headerbaritem';
import touch from '@smartface/extension-utils/lib/touch';
import PageTitleLayout from 'components/PageTitleLayout';
import HeaderBar from '@smartface/native/ui/headerbar';
import View from '@smartface/native/ui/view';
import Router from '@smartface/router/lib/router/Router';
import { Route } from '@smartface/router';
import { withDismissButton } from '@smartface/mixins';

export default class Page2 extends withDismissButton(Page2Design) {
    routeData: any;
    parentController: any;

    constructor(private router?: Router, private route?: Route) {
        super({});
        touch.addPressEvent(this.btnSayHello as View<any>, () => {
            alert('Hello World!');
        });
    }

    /**
     * @event onShow
     * This event is called when a page appears on the screen (everytime).
     */
    onShow() {
        super.onShow();
        this.headerBar.titleLayout.applyLayout();
        this.routeData && console.info(this.routeData.message);
    }

    /**
     * @event onLoad
     * This event is called once when page is created.
     */
    onLoad() {
        super.onLoad();
        let headerBar: HeaderBar;
        this.headerBar.titleLayout = new PageTitleLayout();
        this.headerBar.setItems([
            new HeaderBarItem({
                title: 'Option',
                onPress: () => {
                    console.warn('You pressed Option item!');
                },
            }),
        ]);
    }
}
