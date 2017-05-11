import React from 'react';
import PropTypes from 'prop-types';

import createTypedComponent from '../hoc/createTypedComponent';

class TypedButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func
  };

  render() {
    return <button onClick={this.props.onClick}>{ this.props.children }</button>;
  }
};

export default createTypedComponent(TypedButton);
