module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ["plugin:vue/essential", "eslint:recommended"],
	rules: {
		"no-console": "off",
		"no-debugger": "off",
		"no-tabs": "off",
		"brace-style": [
			1,
			"1tbs",
			{
				allowSingleLine: true
			}
		],
		"comma-dangle": [1, "never"],
		"comma-spacing": [
			1,
			{
				before: false,
				after: true
			}
		],
		"linebreak-style": [1, "unix"],
		"no-class-assign": 1,
		"no-cond-assign": 1,
		"no-const-assign": 1,
		"no-constant-condition": 1,
		"no-dupe-keys": 1,
		"no-dupe-args": 1,
		"no-duplicate-case": 1,
		"no-empty": 1,
		"no-empty-character-class": 1,
		"no-extra-semi": 1,
		"no-fallthrough": 1,
		"no-func-assign": 1,
		"no-invalid-regexp": 1,
		"no-irregular-whitespace": 1,
		"no-mixed-spaces-and-tabs": [1, false],
		"no-multi-spaces": 1,
		"no-multiple-empty-lines": [
			1,
			{
				max: 1
			}
		],
		"no-new-func": 1,
		"no-shadow": 1,
		"no-shadow-restricted-names": 1,
		"no-spaced-func": 1,
		"no-trailing-spaces": 1,
		"no-undef-init": 1,
		"no-unreachable": 1,
		"no-use-before-define": 1,
		"no-var": 1,
		"array-bracket-spacing": [1, "never"],
		"comma-style": [1, "last"],
		curly: [1, "all"],
		// "default-case": 1,
		indent: [1, "tab"],
		"key-spacing": [
			1,
			{
				beforeColon: false,
				afterColon: true
			}
		],
		// "object-curly-spacing": [1, "never"],
		"operator-linebreak": [1, "before"],
		"semi-spacing": [
			1,
			{
				before: false,
				after: true
			}
		],
		"use-isnan": 1,
		"valid-typeof": 1,
		"block-scoped-var": 1,
		"no-div-regex": 1,
		// "no-empty-function": 1,
		"no-return-assign": 1,
		"no-self-compare": 1,
		"require-await": 1,
		"space-infix-ops": 1,
		"no-label-var": 1,
		"no-width": 0,
		"no-duplicate-imports": 1,
		"no-lonely-if": 1,
		"vue/attribute-hyphenation": "warning",
		"vue/html-closing-bracket-newline": "warning",
		"vue/html-closing-bracket-spacing": "warning",
		"vue/html-end-tags": "warning",
		"vue/html-indent": "warning",
		"vue/html-quotes": "warning",
		"vue/html-self-closing": "warning",
		"vue/max-attributes-per-line": "warning",
		"vue/multiline-html-element-content-newline": "warning",
		"vue/mustache-interpolation-spacing": "warning",
		"vue/name-property-casing": "warning",
		"vue/no-multi-spaces": "warning",
		"vue/no-spaces-around-equal-signs-in-attribute": "warning",
		"vue/no-template-shadow": "warning",
		"vue/prop-name-casing": "warning",
		"vue/require-default-prop": "warning",
		"vue/require-prop-types": "warning",
		"vue/singleline-html-element-content-newline": "warning",
		"vue/v-bind-style": "warning",
		"vue/v-on-style": "warning",
		"vue/no-confusing-v-for-v-if": "warning",
		"vue/this-in-template": "warning",
		"vue/arrow-spacing": "warning",
		"vue/array-bracket-spacing": "warning"
	},
	parserOptions: {
		parser: "babel-eslint"
	},
	overrides: [
		{
			files: ["**/__tests__/*.{j,t}s?(x)"],
			env: {
				jest: true
			}
		}
	]
};
