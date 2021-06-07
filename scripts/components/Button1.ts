import Button1Design from 'generated/my-components/Button1';

export default class Button1 extends Button1Design {
	pageName?: string | undefined;
	constructor(props?: any, pageName?: string) {
		// Initalizes super class for this scope
		super(props);
		this.pageName = pageName;
	}
}
