import React from 'react';
import PropTypes from 'prop-types';

import createTypedComponent from '../hoc/createTypedComponent';

class TypedLine extends React.Component {
  render() {
    return (
      <span>
        { this.props.children }
      </span>
    );
  }
};

export default createTypedComponent(TypedLine);
