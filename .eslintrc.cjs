module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "detect" } },
  plugins: ["react-refresh"],
  rules: {
    "react/prop-types": 0,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/no-unknown-property": [
      1,
      {
        // r3f tags/attributes are ignored
        ignore: [
          "position",
          "rotation",
          "geometry",
          "material",
          "dispose",
          "intensity",
          "args",
          "attach",
          "object",
          "skeleton",
          "map",
          "receiveShadow",
          "castShadow",
          "transparent",
        ],
      },
    ],
  },
};
