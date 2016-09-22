import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Breadcrumbs from './index.js';

let routes = [
	{path: '/home'},
	{path: '/product'},
	{path: '/test'}
]

storiesOf('UI', module)
  .add('Breadcrumbs', () => (
    <Breadcrumbs routes={routes}/>
  ))