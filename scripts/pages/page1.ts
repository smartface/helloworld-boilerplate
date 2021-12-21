import Page1Design from 'generated/pages/page1';
import componentContextPatch from '@smartface/contx/lib/smartface/componentContextPatch';
import PageTitleLayout from 'components/PageTitleLayout';
import System from '@smartface/native/device/system';

export default class Page1 extends Page1Design {
    constructor(private router: any) {
        super();
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
        this.btnNext.onPress = () => {
            this.router.push('/pages/page2', { message: 'Hello World!' });
        };
    }


    /**
     * @event onShow
     * This event is called when a page appears on the screen (everytime).
     */
     onShow() {
		super.onShow();
        console.log("onShow Page1");
        // this.headerBar.titleLayout.applyLayout();
        const lbl = new Label();
        this.addChild(lbl, 'page1lbl1unique');
        this.addStyleableChild(lbl, "page1lbl1unique", 'sf-label',  (userProps) => {
            userProps.height = 50;
            return userProps;
        });

        lbl.text = "It's a runtime label";

        this.headerBar.titleLayout.applyLayout();
	}

	/**
	 * @event onLoad
	 * This event is called once when page is created.
	 */
	onLoad() {
		super.onLoad?.();
        // console.log("Onload Page1 : ", super.onLoad);
        this.headerBar.leftItemEnabled = false;
        this.headerBar.titleLayout = new PageTitleLayout();
        this.addStyleableChild(this.headerBar.titleLayout, "titleLayout");
        if (System.OS === 'Android') {
            this.headerBar.title = '';
        }
	}

}
