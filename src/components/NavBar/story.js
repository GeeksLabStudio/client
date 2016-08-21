import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import NavBar from './index.js';

let _links = {
  home: {
    name: 'home',
    path: '/home',
    icon: 'fa-home',
    isActive: true
  },
  about: {
    name: 'about',
    path: '/about',
    icon: 'fa-info-circle',
    isActive: true
  },
  users: {
    name: 'users',
    path: '/users',
    icon: 'fa-user',
    isActive: false
  }
}

storiesOf('NavBar', module)
  .add('default', () => (
    <NavBar links={_links} sideBar={true}/>
  ))
  .add('without navigation bar', () => (
    <NavBar links={_links} sideBar={false}/>
  ))