import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Tabs from './index.js';

storiesOf('UI', module)
.add('Tabs', () => (
  <div style={{width: 800, margin: '0 auto'}}>
    <Tabs>
      <div label="test tab 1" iconClass="fa fa-gear">
        <div>111111</div>
        <div>111111</div>
        <div>111111</div>
      </div>
      <div label="test tab 2" iconClass="fa fa-user">
        <div>222222</div>
        <div>222222</div>
      </div>
    </Tabs>
  </div>
))