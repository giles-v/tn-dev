import React from 'react';
import PropTypes from 'prop-types';
import {
  TypedButton,
  TypedNav
} from '../components';

const MENU_SPACING = 10;
const LINE_HEIGHT = 23;

class NavItem extends React.Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    parentNav: PropTypes.element,
    selections: PropTypes.array
  };

  static defaultProps = {
    x: 0,
    y: 0,
    selections: []
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const selected = this.checkSelected(nextProps.selections);
    if (selected !== this.state.selected) {
      this.setState({ selected });
    }
  }

  checkSelected(selections = []) {
    const isSelected = selections.reduce((acc, item) => {
      return (acc || (this.props.x === item.x && this.props.y === item.y));
    }, false);
    console.log("isSelected", isSelected);
    return isSelected;
  }

  getNavPosition = (childNav, topOffset = 0) => {
    const pos = { top: 10, left: 200 };

    // if (this.props.parentNav && this.props.parentNav.style) {
    //   pos.top = -this.props.parentNav.style.top;
    // }

    if (false) {
      const requiredSpace = LINE_HEIGHT * (childNav.props.children.length + 3);
      const availableHeight = window.innerHeight - requiredSpace;
      pos.top += Math.round(availableHeight * Math.random());
    }

    if (this.props.parentNav && this.props.parentNav.el) {
      const parentRect = this.props.parentNav.el.getBoundingClientRect();
      pos.left = Math.round(parentRect.width + MENU_SPACING);
    }

    return pos;
  }

  render() {
    const { x, y, onNavItemClick, delayBeforeStart, onComplete } = this.props;
    const classNames = ['nav-item'];
    if (this.state.selected) classNames.push('selected');
    const children = [];
    React.Children.forEach(this.props.children, (child, key) => {
      const props = { key, delayBeforeStart, onComplete };
      let include = true;
      const childName = child.displayName || child.type.displayName;
      if (childName.includes('TypedNav')) {
        if (this.state.selected) {
          console.log(child.props.style);
          props.style = this.getNavPosition(child, 0);
          console.log(props.style);
        }
        else {
          include = false;
        }
      }
      if (childName.includes('TypedButton') || childName.includes('TypedLink')) {
        if (!child.props.onClick) {
          props.onClick = () => onNavItemClick(x, y);
        }
      }
      if (include) {
        children.push(React.cloneElement(child, props));
      }
    });

    return (
      <div className={classNames.join(' ')}>
        {children}
      </div>
    );
  }
}

export default NavItem;
