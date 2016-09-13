import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Notification from './index.js';

storiesOf('Notification', module)
  .add('default', () => (
    <Notification />
  ))