import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
   {
      files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
      plugins: {
         js,
      },
      extends: ["js/recommended"],
      languageOptions: {
         globals: globals.node,
      },
      rules: {
         indent: ["error", 3],
         "space-before-function-paren": ["error", "always"],
         "space-in-parens": ["error", "never"],
      },
   },
   tseslint.configs.recommended,
]);
