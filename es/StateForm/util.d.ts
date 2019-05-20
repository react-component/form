export declare function getNameList(path: string | number | Array<string | number>): (string | number)[];
export declare function getValue(store: any, pathList: Array<string | number>): any;
export declare function setValue(store: any, pathList: Array<string | number>, value: any): any;
export declare function matchUpdateNamePath(namePath: Array<string | number>, changedNamePath: Array<string | number> | null): boolean;
export declare function defaultGetValueFromEvent(...args: any[]): any;
