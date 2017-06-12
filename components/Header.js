import React from 'react';
import Head from 'next/head';

class Header extends React.Component {

  render() {
    return (
      <Head>
        <title>Thomas Newbolt</title>
        <style>{`
          body {
            background: #000;
            color: #fff;
            margin: 1em;
            text-transform: lowercase;
            font: normal .9em/1.2 Courier New, Courier, monospace;
          }
          h1,
          h2,
          h3 {
            margin: 0 0 1em;
            padding-left: .3em;
            font-weight: normal;
            font-size: 1em;
          }
          a:focus,
          button:focus {
            outline: none;
          }
          button {
            appearance: none;
            text-transform: lowercase;
            padding: 0;
            border: 0;
            background: transparent;
            cursor: pointer;
            font: normal 1em/1.2 Courier New, Courier, monospace;
          }

          a .content, button .content {
            display: inline-block;
            padding:.2em .3em;
            text-decoration: none;
          }

          a .content,
          button .content {
            color: #fff;
          }
          a:hover .content,
          button:hover .content,
          .selected > a .content,
          .selected > button .content {
            color: #000;
            background: #fff;
          }

          nav {
            position: absolute;
            white-space: nowrap;
          }
          nav a,
          nav button {
            display: inline-block;
          }

          .component button .content {
            color: #000;
            background: #fff;
          }
          .component button:hover .content {
            color: #fff;
            background: #000;
          }

          .cursor {
            width: .8em;
            height: 1.6em;
            display: inline-block;
            vertical-align: bottom;
            background: white;
            position: relative;
            top: 0;
            left: .2em;
          }
        `}</style>
      </Head>
    );
  }
}

export default Header;