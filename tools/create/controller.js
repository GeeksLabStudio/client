var fs = require('fs');
var colors = require('colors');

var componentPath = 'src/components/';
var pagePath = 'src/pages/';
var storybookConfig = '.storybook/config.js';
var templatesPath = 'tools/create/templates/';
var appPath = 'src/app.js';
var configPath = 'src/configs/';

module.exports = {
	component: (result) => {
		// variables
		var name = capitalize(result.name);
		var fsPath = componentPath + name + '/';
		// file templates
		// style
		var less = readFile(templatesPath + 'style.less') + '\r\n\r\n.' + result.css + ' {\r\n\r\n}';
		// index
		var index = readFile(templatesPath + 'component.js')
								.replace(/>>>CLASS<<</g, capitalize(result.class))
								.replace('>>>CSS<<<', result.css);
		// story
		var story = readFile(templatesPath + 'story.js')
								.replace(/>>>CLASS<<</g, capitalize(result.class));
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
		registerIndex(componentPath + 'index.js', capitalize(result.class), name);
		// register in storybook.config
		registerStory(capitalize(result.class), name)
	},
	page: (result) => {
		// variables
		var name = capitalize(result.name);
		var fsPath = pagePath + name + '/';
		var lowerName = result.name.toLowerCase().replace(/ /g,"");
		// file templates
		// style
		var less = readFile(templatesPath + 'style.less') + '\r\n\r\n.' + lowerName + '-page {\r\n\r\n}';
		// index
		var index = readFile(templatesPath + 'page.js')
								.replace(/>>>CLASS<<</g, capitalize(result.class) + 'Page')
								.replace('>>>CSS<<<', 'config.pages.' + lowerName + '.class');
		// config
		var config = readFile(templatesPath + 'config-page.js')
								 .replace(/>>>NAME<<</g, lowerName)
								 .replace(/>>>CSS<<</g, lowerName + '-page')
								 .replace(/>>>PATH<<</g, result.path)
								 .replace(/>>>HEADER<<</g, result.header)
								 .replace(/>>>SIDEBAR<<</g, result.sidebar);
		// Actions
		// create folder
		folder(fsPath);
		// create less file
		file(fsPath, 'style.less', less);
		// create index.js
		file(fsPath, 'index.js', index);
		// register in index.js
		registerIndex(pagePath + 'index.js', name, name);
		// register route
		registerRoute(appPath, name, lowerName);
		// create config file
		folder(configPath + 'pages/' + name + '/');
		file(configPath + 'pages/' + name + '/', 'index.js', config);
		// register config
		registerConfig(lowerName, name)
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
function registerIndex(path, className, folder) {
	fs.appendFileSync(path, '\r\nexport ' + className + ' from \'./' + folder + '\';');
	console.log('registered class: ' + colors.green(className) + ' -> ' + colors.green(path));
}
// register story
function registerStory(className, folder) {
	var text = />>>INCLUDE<<</g;
	var newStory = 'require(\'../' + componentPath + folder + '/story.js\');';
	var replace = '>>>INCLUDE<<<\r\n\t' + newStory;
	var storybook = readFile(storybookConfig).replace(text, replace);
	fs.writeFileSync(storybookConfig, storybook);
	console.log('registered story: ' + colors.green(className) + ' -> ' + colors.green(storybookConfig));
}

function registerRoute(path, className, lowerName) {
	var newClass = '>>>CLASS<<<\r\n\t' + className + ',';
	var route = '>>>ROUTES<<<\r\n\t<Route path={pages.'+ lowerName +'.path} component={'+ className +'}/>,';
	var app = readFile(path)
						.replace(/>>>CLASS<<</g, newClass)
						.replace(/>>>ROUTES<<</g, route);
	fs.writeFileSync(path, app);
	console.log('registered route: -> ' + colors.green(path));
}

function registerConfig(lowerName, folderName) {
	var newImport = '>>>IMPORT<<<\r\nimport '+ lowerName +' from \'./'+ folderName +'\';';
	var newInclude = '>>>IMPORT<<<\r\n\t' + lowerName + ',';
	var configfile = readFile(configPath + 'pages/index.js')
									 .replace(/>>>IMPORT<<</g, newImport)
									 .replace(/>>>INCLUDE<<</g, newInclude);
	fs.writeFileSync(configPath + 'pages/index.js', configfile);
	console.log('registered config: -> ' + colors.green(configPath + 'pages/index.js'));
}