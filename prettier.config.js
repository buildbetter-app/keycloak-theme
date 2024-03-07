/** @type {import('prettier').Config} */
module.exports = {
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  trailingComma: "all",
  importOrder: [
    "^react",
    "<THIRD_PARTY_MODULES>",
    "^@buildbetter-app/(.*)$",
    "^[./]",
  ],
  importOrderParserPlugins: [
    "typescript",
    "jsx",
    "classProperties",
    "decorators-legacy",
  ],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
