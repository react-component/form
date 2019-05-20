import setIn from 'lodash/fp/set';
import get from 'lodash/get';
export function getNameList(path) {
  return Array.isArray(path) ? path : [path];
}
export function getValue(store, pathList) {
  return get(store, pathList);
}
export function setValue(store, pathList, value) {
  var newStore = setIn(pathList, value, store);
  return newStore;
}
export function matchUpdateNamePath(namePath, changedNamePath) {
  if (!changedNamePath) {
    return true;
  }

  return namePath.every(function (nameUnit, i) {
    return changedNamePath[i] === nameUnit;
  });
}
export function defaultGetValueFromEvent() {
  var arg = arguments.length <= 0 ? undefined : arguments[0];

  if (arg && arg.target && 'value' in arg.target) {
    return arg.target.value;
  }

  return arg;
}