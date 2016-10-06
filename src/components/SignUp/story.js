import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SignUp from './index.js';

storiesOf('SignUp', module)
  .add('default', () => (
    <SignUp />
  ))