import hoistStatics from 'hoist-non-react-statics';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
}

export function argumentContainer(Container, WrappedComponent) {
  Container.displayName = `Form(${getDisplayName(WrappedComponent)})`;
  Container.WrappedComponent = WrappedComponent;
  return hoistStatics(Container, WrappedComponent);
}

export function getValueFromEvent(e) {
  // support custom element
  if (!e || !e.target) {
    return e;
  }
  const {target} = e;
  return target.type === 'checkbox' ? target.checked : target.value;
}

export function getErrorStrs(errors) {
  if (errors) {
    return errors.map((e) => {
      if ('message' in e) {
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
