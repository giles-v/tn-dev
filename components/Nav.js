import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { toggleAudio } from '../actions/audio';
import {
  TypedButton,
  TypedLine,
  TypedLink,
  TypedNav,
  ConnectedNavItem
} from '../components';
import { slugify } from '../helpers/string';

class Nav extends React.Component {

  static propTypes = {
    data: PropTypes.object
  };

  itemSlug = (item) => {
    return item.slug ||
          (item.name && slugify(item.name)) ||
          (item.date && slugify(item.date));
  }

  renderWith = (depth, slug = '') => {
    return (item, index) => this.renderItem(item, index, depth + 1, slug);
  }

  renderItem = (item, index, depth, slug) => {
    slug = slug + '/' + this.itemSlug(item);

    if (item.items) {
      return (
        <ConnectedNavItem key={index} x={depth} y={index}>
          <TypedButton>
            {item.name}
          </TypedButton>
          <TypedNav>
            {item.items.map(this.renderWith(depth, slug))}
          </TypedNav>
        </ConnectedNavItem>
      );
    }

    if (item.action) {
      return (
        <ConnectedNavItem key={index} x={depth} y={index}>
          <TypedButton onClick={item.action}>
            {item.name}
          </TypedButton>
        </ConnectedNavItem>
      )
    }

    return (
      <ConnectedNavItem key={index} x={depth} y={index}>
        <TypedLink href={slug}>
          {item.name || item.date}
        </TypedLink>
      </ConnectedNavItem>
    );
  }

  render() {
    const { articles, cv, news, films, work } = this.props.data;
    const controlPanel = {
      name: 'control panel',
      slug: 'control-panel',
      items: [
        {
          name: 'toggle audio',
          action: this.props.handleAudioToggle
        }
      ]
    }
    const navItems = [controlPanel, articles, cv, news, films, work];

    return (
      <TypedNav>
        {
          navItems.map(this.renderWith(0))
        }
      </TypedNav>
    );
  }
}

export default Nav;
