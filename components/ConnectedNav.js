import React from 'react';
import { connect } from 'react-redux';
import { toggleAudio } from '../actions/audio';
import Nav from './Nav';

const mapDispatchToProps = (dispatch) => {
  return {
    handleAudioToggle: () => {
      dispatch(toggleAudio());
    }
  }
};

const ConnectedNav = connect(null, mapDispatchToProps)(Nav);

export default ConnectedNav;
