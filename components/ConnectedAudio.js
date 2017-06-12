import React from 'react';
import { connect } from 'react-redux';
import { toggleAudio } from '../actions/audio';
import Audio from './Audio';

const mapStateToProps = (state) => {
  return {
    enabled: state.audio.enabled
  }
};

const ConnectedAudio = connect(mapStateToProps, null)(Audio);

export default ConnectedAudio;
