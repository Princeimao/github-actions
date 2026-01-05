import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
   globalIgnores(["dist/**/*", "node_modules/**/*"]),
   {
      files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
      plugins: {
         js
      },
      extends: ["js/recommended"],
      rules: {
         "no-unused-vars": "warn",
         "no-trailing-spaces": "warn",
         "semi": ["error", "always"],
         "quotes": ["error", "double"],
         indent: ["error", 3],
         "space-before-function-paren": ["error", "always"],
         "space-in-parens": ["error", "never"],
      },
      languageOptions: {
         globals: globals.node
      },
   },
   tseslint.configs.recommended,
]);
