import React from 'react';
import PropTypes from 'prop-types';

class Audio extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    enabled: PropTypes.bool
  };

  static defaultProps = {
    enabled: true
  };

  componentWillReceiveProps(nextProps) {
    if (this.audioElement) {
      (nextProps.enabled)
        ? this.audioElement.play()
        : this.audioElement.pause();
    }
  }

  render() {
    const { src, enabled } = this.props;

    return (
      <audio src={src} ref={(el) => this.audioElement = el} autoPlay={enabled} />
    );
  }
};

export default Audio;
