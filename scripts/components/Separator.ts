import SeparatorDesign from 'generated/my-components/Separator';

export default class Separator extends SeparatorDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
