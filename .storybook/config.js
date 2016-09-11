import {configure} from '@kadira/storybook';

function loadStories() {
  require('../src/assets/app.global.less');
	// >>>INCLUDE<<<
	require('../src/components/SignIn/story.js');
  require('../src/components/NavBar/story.js');
  require('../src/components/SideBar/story.js');
}

configure(loadStories, module);