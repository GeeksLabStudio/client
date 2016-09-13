import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Popup from './index.js';

let props = {
	title: "Title",
	show: true,
	submit: action('submit')
}

storiesOf('Popup', module)
  .add('default', () => (
    <Popup {...props}>
    	<div>Storybook test data</div>
    </Popup>
  ))