import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'vue/no-unused-vars': 'error',
    }
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];