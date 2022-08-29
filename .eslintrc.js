module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb-typescript",
  ],
  plugins: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json"],
    sourceType: "module",
  },
  // add your custom rules here
  rules: {
    "max-len": "off",
    quotes: "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-unused-vars": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_\\w*$",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "class",
        "format": null,
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "external",
          [
            "sibling",
            "parent",
            "internal",
          ],
          "builtin",
          "unknown",
        ],
        "newlines-between": "ignore",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: ["**/*.test.ts", "**/*.spec.ts", "**/__tests__"] }],
    "import/extensions": ["error", { "ts": "never", "json": "always" }],
    "import/prefer-default-export": "off",
    "implicit-arrow-linebreak": "warn",
    "no-mixed-operators": "warn",
    "arrow-parens": "error",
    eqeqeq: [
      "error",
      "always",
    ],
    semi: [
      "error",
      "always",
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 2,
        maxEOF: 1,
      },
    ],
    "no-multi-spaces": [
      "error",
      {
        ignoreEOLComments: true,
      },
    ],
  },
  ignorePatterns: ["**/grpc*", "**/build", "**/coverage"],
};
