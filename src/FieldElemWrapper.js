import React from 'react';
import PropTypes from 'prop-types';

export default class FieldElemWrapper extends React.Component {
  componentDidMount() {
    const { name, form } = this.props;
    form.domFields[name] = true;
    form.recoverClearedField(name);
  }

  componentWillUnmount() {
    const { name, form } = this.props;
    const fieldMeta = form.fieldsStore.getFieldMeta(name);
    if (!fieldMeta.preserve) {
      // after destroy, delete data
      form.clearedFieldMetaCache[name] = {
        field: form.fieldsStore.getField(name),
        meta: fieldMeta,
      };
      form.clearField(name);
    }
    delete form.domFields[name];
  }

  render() {
    return this.props.children;
  }
}

FieldElemWrapper.propTypes = {
  name: PropTypes.string,
  form: PropTypes.shape({
    domFields: PropTypes.objectOf(PropTypes.bool),
    recoverClearedField: PropTypes.func,
    fieldsStore: PropTypes.shape({
      getFieldMeta: PropTypes.func,
      getField: PropTypes.func,
    }),
    clearedFieldMetaCache: PropTypes.objectOf(
      PropTypes.shape({
        field: PropTypes.object,
        meta: PropTypes.object,
      }),
    ),
    clearField: PropTypes.func,
  }),
  children: PropTypes.node,
};
