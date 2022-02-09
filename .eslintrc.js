module.exports = {
  extends: "react-app",
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: true },
    ],
    "react/no-array-index-key": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc" },
      },
    ],
  },
};
