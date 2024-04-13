module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'plugin:storybook/recommended'],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'vite.config.ts',
    'postcss.config.js',
    'tailwind.config.js',
    'stories',
    'shadcn',
    'main.tsx'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": "latest",
    "project": "./tsconfig.json",
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "indent": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    '@typescript-eslint/indent': 'off',
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": ["**/*.test.ts*", "**/*.stories.ts*"]
    }]
  },
}
