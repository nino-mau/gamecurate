import globals from "globals";
import pluginJs from "@eslint/js";
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.jquery },
    },
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
];
