import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Loader from './index.js';

storiesOf('UI', module)
  .add('Loader', () => (
    <Loader/>
  ))