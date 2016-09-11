import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SignIn from './index.js';

storiesOf('SignIn', module)
  .add('default', () => (
    <SignIn />
  ))