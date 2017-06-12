import React from 'react';
import PropTypes from 'prop-types';

import TypedLink from './TypedLink';

class TypedNav extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    style: PropTypes.object
  };

  static defaultProps = {
    open: false
  };

  constructor(props) {
    super(props);
    this.state = {
      line: 0
    }
  }

  onItemComplete = () => {
    this.setState({
      line: this.state.line + 1
    });
  }

  render() {
    const children = [];
    React.Children.forEach(this.props.children, (item, index) => {
      if (index <= this.state.line) {
        const props = {
          key: index,
          delayBeforeStart: 50,
          onComplete: this.onItemComplete,
          parentNav: this
        };
        children.push(React.cloneElement(item, props));
      }
    });

    return (
      <nav ref={(el) => this.el = el} style={this.props.style}>
        { children }
      </nav>
    );
  }
};

export default TypedNav;
