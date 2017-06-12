import Head from 'next/head';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  Background,
  Audio,
  ConnectedAudio,
  ConnectedNav,
  Header,
  Loader,
  TypedButton,
  TypedLine,
  TypedLink,
  TypedNav,
  NavItem
} from '../components';
import logger from 'redux-logger';
import { reducers } from '../reducers';

const store = createStore(
  reducers,
  applyMiddleware(logger)
);

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      headComplete: false,
      audioEnabled: false
    }
  }

  onRenderHeadComplete = () => {
    this.setState({
      headComplete: true
    });
    console.log(" -- head complete");
  }

  getRandomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  staticUrl = (path) => {
    return '/static/' + path;
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <h1>
            <TypedLine onComplete={this.onRenderHeadComplete}>Thomas Newbolt</TypedLine>
          </h1>
          <Loader src="/static/site.json">{
            ({data, err, src}) => {
              if (this.state.headComplete) {
                if (err) {
                  return <TypedLine>Failed to load {src}: {err}</TypedLine>;
                }
                if (data) {
                  return (
                    <div>
                      <ConnectedNav data={data} />
                      <ConnectedAudio src={this.staticUrl(this.getRandomItem(data.music))} />
                      <Background curr={this.staticUrl(this.getRandomItem(data.backdrops))} />
                    </div>
                  );
                }
                return <TypedLine>Loading...</TypedLine>;
              }
            }
          }</Loader>
        </div>
      </Provider>
    );
  }
}
