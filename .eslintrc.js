module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaVersion: 2020,
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  env: { node: true },
  overrides: [
    {
      files: ["*.test.ts", "test/**"],
      plugins: ["jest"],
      rules: {
        // Turn off unbound method rule but *only* for test files (https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md)
        "@typescript-eslint/unbound-method": "off",
        "jest/unbound-method": "error",
      },
    },
  ],
  rules: {
    "@typescript-eslint/unbound-method": "error",
  },
};
