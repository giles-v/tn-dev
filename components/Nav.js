import React from 'react';
import Link from 'next/link';

export default class extends React.Component {

  render() {
    return (
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
      </nav>
    );
  }
}
