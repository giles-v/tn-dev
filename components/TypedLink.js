import React from 'react';
import PropTypes from 'prop-types';

import createTypedComponent from '../hoc/createTypedComponent';

class TypedLink extends React.Component {
  static propTypes = {
    href: PropTypes.string
  };

  render() {
    return (this.props.href)
      ? <a href={this.props.href}>{ this.props.children }</a>
      : <span className="menu-handle">{ this.props.children }</span>;
  }
};

export default createTypedComponent(TypedLink);
