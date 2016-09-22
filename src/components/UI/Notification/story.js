import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Notification from './index.js';

storiesOf('UI', module)
  .add('Notification', () => (
    <Notification />
  ))