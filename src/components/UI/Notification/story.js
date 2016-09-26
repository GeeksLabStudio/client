import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Notification from './index.js';

storiesOf('UI', module)
  .add('Notification', () => {
    var _ref;
    var i = 0;

    var elem = <Notification
      ref={ref => _ref = ref}
    />

    setInterval(()=>{
      if (_ref){
        _ref._push('test message #'+i++)
      }
    },500)

    return elem
  })