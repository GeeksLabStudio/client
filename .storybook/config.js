import {configure} from '@kadira/storybook';
import * as config from '../config';

// Globals config
global.app = config;

global.config = app.config;

function loadStories() {
  require('../src/assets/app.less');
	// >>>INCLUDE<<<
	require('../src/components/UI/Notification/story.js');
	require('../src/components/UI/Popup/story.js');
	require('../src/components/SignIn/story.js');
  require('../src/components/NavBar/story.js');
  require('../src/components/SideBar/story.js');
}

configure(loadStories, module);