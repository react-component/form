import hoistStatics from 'hoist-non-react-statics';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
}

export function argumentContainer(Container, WrappedComponent) {
  /* eslint no-param-reassign:0 */
  Container.displayName = `Form(${getDisplayName(WrappedComponent)})`;
  Container.WrappedComponent = WrappedComponent;
  return hoistStatics(Container, WrappedComponent);
}

export function getValueFromEvent(e) {
  // support custom element
  if (!e || !e.target) {
    return e;
  }
  const { target } = e;
  return target.type === 'checkbox' ? target.checked : target.value;
}

export function getErrorStrs(errors) {
  if (errors) {
    return errors.map((e) => {
      if (e && e.message) {
        return e.message;
      }
      return e;
    });
  }
  return errors;
}

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

export function flattenArray(arr) {
  return Array.prototype.concat.apply([], arr);
}

export function mirror(obj) {
  return obj;
}

export function hasRules(validate) {
  if (validate) {
    return validate.some((item) => {
      return !!item.rules && item.rules.length;
    });
  }
  return false;
}

export function startsWith(str, prefix) {
  return str.lastIndexOf(prefix, 0) === 0;
}

export function getParams(ns, opt, cb) {
  let names = ns;
  let callback = cb;
  let options = opt;
  if (cb === undefined) {
    if (typeof names === 'function') {
      callback = names;
      options = {};
      names = undefined;
    } else if (Array.isArray(ns)) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      } else {
        options = options || {};
      }
    } else {
      callback = options;
      options = names || {};
      names = undefined;
    }
  }
  return {
    names,
    callback,
    options,
  };
}

const NAME_KEY_SEP = '.';
const NAME_INDEX_OPEN_SEP = '[';
const NAME_INDEX_CLOSE_SEP = ']';

function getNameKey(str) {
  const index = str.indexOf(NAME_KEY_SEP);
  return {
    name: str.slice(0, index),
    key: str.slice(index + NAME_KEY_SEP.length),
  };
}

function getNameIndex(str) {
  const start = str.indexOf(NAME_INDEX_OPEN_SEP);
  const end = str.indexOf(NAME_INDEX_CLOSE_SEP);
  return {
    name: str.slice(0, start),
    index: str.slice(start + NAME_INDEX_OPEN_SEP.length, end),
  };
}

export function getNameKeyObj(str) {
  const keyIndex = str.indexOf(NAME_KEY_SEP);
  const arrayIndex = str.indexOf(NAME_INDEX_OPEN_SEP);
  if (keyIndex === -1 && arrayIndex === -1) {
    return {
      name: str,
    };
  } else if (keyIndex !== -1 && arrayIndex !== -1) {
    if (keyIndex < arrayIndex) {
      return getNameKey(str);
    } else if (keyIndex >= arrayIndex) {
      return getNameIndex(str);
    }
  } else if (arrayIndex === -1) {
    return getNameKey(str);
  } else if (keyIndex === -1) {
    return getNameIndex(str);
  }
}

export function flatFieldNames(names) {
  const ret = {};
  names.forEach((n) => {
    ret[getNameKeyObj(n).name] = 1;
  });
  return Object.keys(ret);
}

export function clearVirtualField(name, fields, fieldsMeta) {
  if (fieldsMeta[name] && fieldsMeta[name].virtual) {
    /* eslint no-loop-func:0 */
    Object.keys(fields).forEach((ok) => {
      if (getNameKeyObj(ok).name === name) {
        delete fields[ok];
      }
    });
  }
}

export function getVirtualPaths(fieldsMeta) {
  const virtualPaths = {};
  for (const name in fieldsMeta) {
    if (fieldsMeta.hasOwnProperty(name)) {
      const leadingName = fieldsMeta[name].leadingName;
      if (leadingName && fieldsMeta[leadingName].virtual) {
        if (leadingName in virtualPaths) {
          virtualPaths[leadingName].push(name);
        } else {
          virtualPaths[leadingName] = [name];
        }
      }
    }
  }
  return virtualPaths;
}
