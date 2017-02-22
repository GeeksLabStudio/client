var EN = require('./EN');
var RU = require('./RU');

var defaultLang = 'RU';

var packs = {
	EN, RU
}

function getPack(lang){
	if (!lang)
		lang = localStorage.getItem('locale');
	return packs[lang] ? packs[lang] : packs[defaultLang];
}

module.exports = getPack();
module.exports.packs = Object.keys(packs);
module.exports.getPack = getPack;