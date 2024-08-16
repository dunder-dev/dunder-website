import globals from "globals"
import pluginJs from "@eslint/js"
import pluginVue from "eslint-plugin-vue"
import js from "@eslint/js"


export default [
	js.configs.recommended, // Recommended config applied to all files
	...pluginVue.configs["flat/recommended"],
	// global ignores
	{
		ignores: ["dist/**", "node_modules/**", "bin/**", "build/**"],
	},
	{files: ["**/*.{js,mjs,cjs,vue}"]},
	{languageOptions: { globals: globals.browser }},
	pluginJs.configs.recommended,
	{
		rules: {
			...js.configs.recommended.rules,
			"no-unused-vars": "warn",
			"no-undef": "error",
			"no-trailing-spaces": "error",
			semi: ["error", "never"],
			indent: ["error", "tab"],
			'space-before-function-paren': ['error', 'never'],
		},
	},
]

