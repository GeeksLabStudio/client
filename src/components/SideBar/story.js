import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SideBar from './index.js';

let _links = {
  dashboard: {
    name: 'dashboard',
    path: '/dashboard',
    icon: 'fa-tachometer',
    isActive: true
  },
  search: {
    name: 'search',
    path: '/search',
    icon: 'fa-search',
    isActive: true
  }
}

storiesOf('SideBar', module)
  .add('default', () => (
    <SideBar links={_links} show={true} />
  ))