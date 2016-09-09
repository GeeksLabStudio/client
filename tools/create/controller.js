var fs = require('fs');
var colors = require('colors');

var componentPath = 'src/components/';
var storybookConfig = '.storybook/config.js';
var templatesPath = 'tools/create/templates/';

module.exports = {
	component: (result) => {
		// variables
		var name = capitalize(result.name);
		var fsPath = componentPath + name + '/';
		// file templates
		var less = readFile(templatesPath + 'style.less');
		var index = readFile(templatesPath + 'component.js').replace(/>>>CLASS<<</g, capitalize(result.class)).replace('>>>CSS<<<', result.css);
		var story = readFile(templatesPath + 'story.js').replace(/>>>CLASS<<</g, capitalize(result.class));

		// Actions
		// create folder
		folder(fsPath);
		// create less file
		file(fsPath, 'style.less', less);
		// create index.js
		file(fsPath, 'index.js', index);
		// create story.js
		file(fsPath, 'story.js', story);
		// register in index.js
		registerIndex(componentPath + 'index.js', capitalize(result.class));
		// register in storybook.config
		registerStory(capitalize(result.class))
	}
}

// first letter
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// read file
function readFile(path) {
	return fs.readFileSync(path, 'utf8')
}
// create folder
function folder(path) {
	if (!fs.existsSync(path)) {
		fs.mkdirSync(path);
		console.log('Created folder: ' + colors.green(path));
	} else {
		console.log(colors.red('the folder already exists'));
	}
}
// create file
function file(fsPath, fileName, text) {
	fs.writeFileSync(fsPath + fileName, text);
	console.log('created file: ' + colors.green(fsPath + fileName));
}
// register class
function registerIndex(path, className) {
	fs.appendFileSync(path, '\r\nexport ' + className + ' from \'./' + className + '\';');
	console.log('registered class: ' + colors.green(className) + ' -> ' + colors.green(path));
}
// register story
function registerStory(className) {
	var text = />>>INCLUDE<<</g;
	var newStory = 'require(\'../' + componentPath + className + '/story.js\');';
	var replace = '>>>INCLUDE<<<\r\n\t' + newStory;
	var storybook = readFile(storybookConfig).replace(text, replace);
	fs.writeFileSync(storybookConfig, storybook);
	console.log('registered story: ' + colors.green(className) + ' -> ' + colors.green(storybookConfig));
}