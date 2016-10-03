import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ContactForm from './index.js';

storiesOf('ContactForm', module)
  .add('default', () => (
    <ContactForm />
  ))