import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Popup from './index.js';

let props = {
	title: "Title",
	show: true,
	submit: action('submit')
}

storiesOf('UI', module)
  .add('Popup', () => (
    <Popup {...props}>
    	<div>Storybook test data</div>
    </Popup>
  ))