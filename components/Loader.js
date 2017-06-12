import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.Component {

  static propTypes = {
    src: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      src: this.props.src,
      data: null,
      err: null
    };
  }

  componentDidMount() {
    fetch(this.props.src).then(response => {
      if (response.status >= 200 && response.status < 400) {
        return response.json();
      } else {
        const error = new Error();
        error.message = response.statusText;
        throw error;
      }
    }).then(data => {
      this.setState({ data });
    }).catch(error => {
      this.setState({ err: error.message });
    });
  }

  render() {
    const children = this.props.children(this.state);
    return <div children={children}/>;
  }
};

export default Loader;
