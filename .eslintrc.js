module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: ["plugin:prettier/recommended"],
	plugins: ["@typescript-eslint"],
	env: {
		browser: true,
		node: true,
	},
	rules: {},
};
