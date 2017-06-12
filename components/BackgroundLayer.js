import React from 'react';
import PropTypes from 'prop-types';

class BackgroundLayer extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired
  };

  render() {
    return (
      <div style={{
        backgroundImage: `url("${this.props.src}")`
      }}>
        <style jsx>{`
          div {
            background: transparent none scroll center center no-repeat;
            background-size: cover;
            width: 100vw;
            height: 100vh;
            position: relative;
          }
          div::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.4);
          }
        `}</style>
      </div>
    );
  }
};

export default BackgroundLayer;
