import setIn from 'lodash/fp/set';
import get from 'lodash/get';
import { InternalNamePath, NamePath } from '../StateFormField';

export function getNamePath(path: NamePath | null) {
  if (!path) {
    return [];
  }
  return Array.isArray(path) ? path : [path];
}

export function getValue(store: any, namePath: InternalNamePath) {
  return get(store, namePath);
}

export function setValue(store: any, namePath: InternalNamePath, value: any) {
  const newStore = setIn(namePath, value, store);
  return newStore;
}

export function matchNamePath(namePath: InternalNamePath, changedNamePath: InternalNamePath | null) {
  if (!changedNamePath) {
    return true;
  }
  return namePath.every((nameUnit, i) => changedNamePath[i] === nameUnit);
}

// Like `shallowEqual`, but we not check the data which may cause re-render
export function isSimilar(source: any, target: any) {
  if (source === target) {
    return true;
  }

  if ((!source && target) || (source && !target)) {
    return false;
  }

  if (!source || !target || typeof source !== 'object' || typeof target !== 'object') {
    return false;
  }

  const sourceKeys = Object.keys(source);
  const targetKeys = Object.keys(target);
  const keys = new Set([...sourceKeys, ...targetKeys]);

  return [...keys].every((key) => {
    const sourceValue = source[key];
    const targetValue = target[key];

    if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
      return true;
    }
    return sourceValue === targetValue;
  });
}

export function defaultGetValueFromEvent(...args: any[]) {
  const arg = args[0];

  if (arg && arg.target && 'value' in arg.target) {
    return arg.target.value;
  }

  return arg;
}
