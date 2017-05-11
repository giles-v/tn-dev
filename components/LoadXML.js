import React from 'react';

const XML_FILE = '/static/site.xml';

class LoadXML extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch(XML_FILE).then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.xml();
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }).then(data => {
      actionContext.dispatch('SEARCH_RESULTS', {id, data});
      return done();
    }).catch(error => {
      done(error);
    });
  }

  render() {
    const children = this.props.children(true);
    return <div children={children}/>;
  }
};

export default LoadXML;
