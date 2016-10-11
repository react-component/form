// export this package's api
import createForm from '../src/createForm';
import createDOMForm from '../src/createDOMForm';
if (typeof window !== 'undefined') {
  window.RCForm = { createDOMForm, createForm };
}
export { createDOMForm, createForm };
