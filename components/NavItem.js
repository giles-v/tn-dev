import React from 'react';
import PropTypes from 'prop-types';
import {
  TypedButton,
  TypedNav
} from '../components';

const MENU_SPACING = 20;
const LINE_HEIGHT = 23;

export default class extends React.Component {
  static propTypes = {
    selected: PropTypes.bool,
    parentNav: PropTypes.element
  }

  constructor(props) {
    super(props);
    this.state = {
      subnavOpen: false
    }
  }

  onMenuHandleClick = (e) => {
    this.setState({
      subnavOpen: !this.state.subnavOpen
    });
  }

  getNextNavPosition = () => {
    const pos = {};
    const parentRect = this.props.parentNav.el.getBoundingClientRect();

    // find the top level nav, because we'll set vertical position based on
    // the vertical offset of that.
    let parent = this.props.parentNav;
    while (parent.parentNav) parent = parent.parentNav;
    const topParentRect = parent.el.getBoundingClientRect();

    var availableHeight = window.innerHeight - topParentRect.top - MENU_SPACING - (LINE_HEIGHT * this.props.children.length);

    pos.left = Math.round(parentRect.right + MENU_SPACING);
    pos.top = Math.round(availableHeight * Math.random());

    return pos;
  }

  render() {
    // filter out 'TypedNav' children
    const children = [];
    React.Children.forEach(this.props.children, (child, index) => {
      const props = { key: index, delayBeforeStart: this.props.delayBeforeStart, onComplete: this.props.onComplete };
      let include = true;
      const childName = child.displayName || child.type.displayName;
      if (childName.includes('TypedNav')) {
        if (this.state.subnavOpen) {
          props.style = this.getNextNavPosition();
        }
        else {
          include = false;
        }
      }
      if (childName.includes('TypedButton')) {
        props.onClick = this.onMenuHandleClick;
      }
      if (include) {
        children.push(React.cloneElement(child, props));
      }
    });

    return (
      <div className="nav-item">
        {children}
      </div>
    );
  }
}
