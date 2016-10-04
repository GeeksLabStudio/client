import {configure} from '@kadira/storybook';
import * as config from '../config';

// Globals config
global.app = config;

global.config = app.config;

function loadStories() {
  require('../src/assets/app.less');
	require('../src/components/UI/Notification/story.js');
	require('../src/components/UI/Popup/story.js');
	require('../src/components/UI/Breadcrumb/story.js');
	require('../src/components/UI/Pagination/story.js');
	require('../src/components/UI/Tabs/story.js');
	require('../src/components/SignIn/story.js');
  require('../src/components/NavBar/story.js');
  require('../src/components/SideBar/story.js');
  require('../src/components/ContactForm/story.js');
}

configure(loadStories, module);