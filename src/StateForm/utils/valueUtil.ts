import setIn from 'lodash/fp/set';
import get from 'lodash/get';
import { InternalNamePath, NamePath } from '../StateFormField';

export function getNamePath(path: NamePath | null) {
  if (!path) {
    return [];
  }
  return Array.isArray(path) ? path : [ path ];
}

export function getValue(store: any, namePath: InternalNamePath) {
  return get(store, namePath);
}

export function setValue(store: any, namePath: InternalNamePath, value: any) {
  const newStore = setIn(namePath, value, store);
  return newStore;
}

function isObject(obj: any) {
  return typeof obj === 'object' && obj !== null;
}

/**
 * Copy values into store and return a new values object
 * ({ a: 1, b: { c: 2 } }, { a: 4, b: { d: 5 } }) => { a: 4, b: { c: 2, d: 5 } }
 */
export function setValues(store: any, values: any) {
  const newStore = { ...store };
  Object.keys(values).forEach((key) => {
    const prevValue = newStore[key];
    const value = values[key];

    // If both are object, we use recursion to set deep value
    newStore[key] = isObject(prevValue) && isObject(value) ? setValues(prevValue, value) : value;
  });

  return newStore;
}

export function matchNamePath(
  namePath: InternalNamePath,
  changedNamePath: InternalNamePath | null,
) {
  if (!changedNamePath) {
    return false;
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
  const keys = new Set([ ...sourceKeys, ...targetKeys ]);

  return [ ...keys ].every((key) => {
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
