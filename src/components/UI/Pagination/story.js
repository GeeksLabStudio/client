import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Pagination from './index.js';

let children = [];

for (let i = 0; i < 111; i++) {
	children.push(<div key={i}>item {i + 1}</div>)
}

storiesOf('UI', module)
  .add('Pagination', () => {
  	return (
	    <Pagination perPage={20}>
	    	{children}
	    </Pagination>
	  )
  })