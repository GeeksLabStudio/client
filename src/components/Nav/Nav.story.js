import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Nav from './index.js';

storiesOf('Button', module)
  .add('default', () => (
    <Nav />
  ))