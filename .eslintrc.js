module.exports = {
    "extends": "eslint:recommended",
    "rules": {
		// View possible rules: https://eslint.org/docs/rules/
	},
	"globals": {
		'document': true,
		'jQuery': true,
		'$': true
	},
	"env": {
		"browser": true,
		"node": true,
		"es6": true
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"sourceType": "module",
		"allowImportExportEverywhere": true
	}
}