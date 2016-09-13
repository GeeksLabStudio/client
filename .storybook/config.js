import {configure} from '@kadira/storybook';
import {debug, layout, pages, components} from '../src/configs';

// Globals config
global.config = {
  debug,
  layout,
  pages,
  components
};

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