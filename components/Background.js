import React from 'react';
import PropTypes from 'prop-types';
import BackgroundLayer from './BackgroundLayer';

class Background extends React.Component {
  static propTypes = {
    curr: PropTypes.string.isRequired,
    next: PropTypes.string,
    prev: PropTypes.string
  };

  render() {
    return (
      <div>
        {this.props.prev && <BackgroundLayer src={this.props.prev} />}
        <BackgroundLayer src={this.props.curr} />
        {this.props.next && <BackgroundLayer src={this.props.next} />}

        <style jsx>{`
          div {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1;
          }
        `}</style>
      </div>
    );
  }
};

export default Background;
