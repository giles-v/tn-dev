import React from 'react';
import PropTypes from 'prop-types';

class Audio extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired
  };

  render() {
    return (
      <audio src={this.props.src} xautoPlay />
    );
  }
};

export default Audio;
