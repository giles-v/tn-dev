import Head from 'next/head';
import React from 'react'
import Nav from '../components/Nav';

export default class extends React.Component {

  render() {
    return (
      <div>
        <Head>
          <title>About Me</title>
        </Head>
        <Nav />
        <p>About It All</p>
        <style jsx>{`
          p {
            color: blue;
          }
        `}</style>
      </div>
    );
  }
}
