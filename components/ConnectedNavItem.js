import React from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../actions/nav';
import NavItem from './NavItem';

const mapStateToProps = (state) => {
  return {
    selections: state.nav.selections
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNavItemClick: (x, y) => {
      dispatch(selectItem(x, y));
    }
  }
};

const ConnectedNavItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavItem);

export default ConnectedNavItem;
