import {configure} from '@kadira/storybook';

function loadStories() {
    require('../src/assets/app.global.less')
    require('../src/components/Nav/story.js')
}

configure(loadStories, module);