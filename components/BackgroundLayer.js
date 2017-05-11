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
          }
        `}</style>
      </div>
    );
  }
};

export default BackgroundLayer;
