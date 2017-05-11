import Head from 'next/head';
import React from 'react'
import {
  Audio,
  Background,
  Header,
  LoadXML,
  TypedButton,
  TypedLine,
  TypedLink,
  TypedNav,
  NavItem
} from '../components';

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
  }

  render() {
    return (
      <div>
        <Header />
        <h1>
          <TypedLine onComplete={this.onRenderHeadComplete}>Thomas Newbolt</TypedLine>
        </h1>
        <LoadXML>{
          (xml) => {
            (xml && this.state.headComplete) ? (
              <div>
                <TypedNav>
                  <NavItem>
                    <TypedButton>Number One</TypedButton>
                    <TypedNav>
                      <NavItem><TypedLink href="/bat1">One-One</TypedLink></NavItem>
                      <NavItem><TypedLink href="/bat2">One-Two</TypedLink></NavItem>
                      <NavItem><TypedLink href="/bat3">One-Three</TypedLink></NavItem>
                    </TypedNav>
                  </NavItem>
                  <NavItem><TypedLink href="/foo">Two</TypedLink></NavItem>
                  <NavItem><TypedLink href="/foo">Three</TypedLink></NavItem>
                  <NavItem><TypedLink href="/foo">Four</TypedLink></NavItem>
                  <NavItem><TypedLink href="/foo">five</TypedLink></NavItem>
                </TypedNav>
                {this.state.audioEnabled && <Audio src="/static/music/hi/bartok.mp3" />}
                <Background curr="/static/backdrop_imgs/IMG_8124.jpg" />
              </div>
            ) : (
              <TypedLine>Loading...</TypedLine>
            );
          }
        }</LoadXML>
      </div>
    );
  }
}

/*
<TypedNav>
          <Link href="/"><a>Home</a></Link>
          <Link href="/work">
            <a>Work</a>
            <TypedNav>
              <a href="/work/1993">1993</a>
              <a href="/work/1999">1999</a>
            </TypedNav>
          </Link>
          <Link href="/about"><a>About</a></Link>
        </TypedNav>
        */