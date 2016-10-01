import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Dropdown from './index.js';

storiesOf('UI', module)
  .add('Dropdown', () => (
    <Dropdown />
  ))