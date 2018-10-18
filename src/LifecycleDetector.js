/* eslint-disable react/prefer-es6-class, react/prop-types */
import createReactClass from 'create-react-class';

const LifecycleDetector = createReactClass({
  componentDidMount () {
    const { formCtx, name } = this.props;
    formCtx.renderFields[name] = true;
  },
  componentDidUpdate(prevProps) {
    const { formCtx, name } = this.props;
    if (prevProps.name !== name) {
      delete formCtx.fieldsToRemove[prevProps.name];
      formCtx.fieldsToAdd[name] = true;
    }
  },
  componentWillUnmount () {
    const { formCtx, name } = this.props;
    delete formCtx.fieldsToRemove[name];
  },
  getProps() {
    const { formCtx, name, fieldOption } = this.props;
    return formCtx.getFieldProps(name, fieldOption);
  },
  render () {
    return this.props.children(this.getProps());
  }
});

export default LifecycleDetector;