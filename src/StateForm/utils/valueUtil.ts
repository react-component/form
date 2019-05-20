import setIn from 'lodash/fp/set';
import get from 'lodash/get';

export function getNameList(path: string | number | Array<string | number> | null) {
  if (!path) {
    return [];
  }
  return Array.isArray(path) ? path : [path];
}

export function getValue(store: any, pathList: Array<string | number>) {
  return get(store, pathList);
}

export function setValue(store: any, pathList: Array<string | number>, value: any) {
  const newStore = setIn(pathList, value, store);
  return newStore;
}

export function matchUpdateNamePath(namePath: Array<string | number>, changedNamePath: Array<string | number> | null) {
  if (!changedNamePath) {
    return true;
  }
  return namePath.every((nameUnit, i) => changedNamePath[i] === nameUnit);
}

export function defaultGetValueFromEvent(...args: any[]) {
  const arg = args[0];

  if (arg && arg.target && 'value' in arg.target) {
    return arg.target.value;
  }

  return arg;
}
