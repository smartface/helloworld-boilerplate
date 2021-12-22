import Page2Design from 'generated/pages/page2';
import HeaderBarItem from '@smartface/native/ui/headerbaritem';
import touch from '@smartface/extension-utils/lib/touch';
import Image from '@smartface/native/ui/image';
import PageTitleLayout from 'components/PageTitleLayout';
import Color from '@smartface/native/ui/color';
import System from '@smartface/native/device/system';
import HeaderBar from '@smartface/native/ui/headerbar';
import View from '@smartface/native/ui/view';

export default class Page2 extends Page2Design {
    routeData: any;
    parentController: any;

    constructor(private router: any) {
        super();
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
        if (System.OS === 'Android') {
            headerBar = this.headerBar;
            headerBar.setLeftItem(
                new HeaderBarItem({
                    onPress: () => {
                        this.router.goBack();
                    },
                    image: Image.createFromFile('images://arrow_back.png'),
                }),
            );
        } else {
            headerBar = this.parentController.headerBar;
        }
        headerBar.itemColor = Color.WHITE;
    }
}
