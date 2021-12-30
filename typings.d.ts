declare function extend(constructor: () => void): () => FunctionConstructor;

declare function require(param: string): any;
declare const lang: { [key: string]: any };
declare const SMF: any;
declare const __SF_NSURL: any;
declare const __SF_Dispatch: {
  mainAsync: (func: (...args: any[]) => any) => void;
};
declare const Device: any;
declare const global: { [key: string]: any } & {
  lang: { [key: string]: any };
  requireClass: (...args: any[]) => any;
};
declare const alert: (...args: any[]) => any;
type StyleContextDispatch = {
  dispatch: (action: { [key: string]: any }) => void;
};
type StyleContextAddChild = {
  addChild(child: View, name?: string, classNames?: string, userProps?: { [key: string]: any }, defaultClassNames?: string): void;
};
type StyleContextComponent = StyleContextAddChild & StyleContextDispatch;
type StyleContextComponentType<T> = T & StyleContextAddChild & StyleContextDispatch;
type StyleContextComponentWithDispatch<T> = T & StyleContextDispatch;
type componentContextPatch = <T = any>(component: T, name: string) => StyleContextComponentType<T>;
