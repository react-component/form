/* eslint react/no-multi-comp:0, no-console:0, react/no-multi-comp:0 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Button,
  Dimensions,
  TextInput,
  Text,
  View,
  Alert,
} from 'react-native';

import { createForm } from 'rc-form';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 50,
    justifyContent: 'center',
  },
  inputView: {
    width: width - 100,
    paddingLeft: 10,
  },
  input: {
    height: 42,
    fontSize: 16,
  },
  errorinfo: {
    marginTop: 10,
  },
  errorinfoText: {
    color: 'red',
  },
});

class FromItem extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    error: PropTypes.array,
  };
  getError = error => {
    if (error) {
      return error.map(info => {
        return (
          <Text style={styles.errorinfoText} key={info}>
            {info}
          </Text>
        );
      });
    }
    return null;
  };
  render() {
    const { label, onChange, value, error } = this.props;
    return (
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          value={value || ''}
          label={`${label}：`}
          duration={150}
          onChangeText={onChange}
          highlightColor="#40a9ff"
          underlineColorAndroid="#40a9ff"
        />
        <View style={styles.errorinfo}>{this.getError(error)}</View>
      </View>
    );
  }
}

class App extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  };

  checkUserNameOne = (value, callback) => {
    setTimeout(() => {
      if (value === '15188888888') {
        callback('手机号已经被注册');
      } else {
        callback();
      }
    }, 2000);
  };
  submit = () => {
    this.props.form.validateFields((error) => {
      if (error) return;
      Alert('通过了所有验证'); // eslint-disable-line new-cap
    });
  };
  render() {
    const { getFieldDecorator, getFieldError } = this.props.form;
    return (
      <View style={styles.container}>
        <Text>简单的手机号验证</Text>
        {getFieldDecorator('username', {
          validateFirst: true,
          rules: [
            { required: true, message: '请输入手机号!' },
            {
              pattern: /^1\d{10}$/,
              message: '请输入正确的手机号!',
            },
            {
              validator: (rule, value, callback) => {
                this.checkUserNameOne(value, callback);
              },
              message: '手机号已经被注册!',
            },
          ],
        })(
          <FromItem
            autoFocus
            placeholder="手机号"
            error={getFieldError('username')}
          />
        )}
        <Button color="#40a9ff" onPress={this.submit} title="登陆" />
      </View>
    );
  }
}

export default createForm()(App);
