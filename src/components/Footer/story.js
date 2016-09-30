import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Footer from './index.js';

storiesOf('Footer', module)
  .add('default', () => (
    <Footer links={_links} />
  ))