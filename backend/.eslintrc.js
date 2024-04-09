module.exports = {
    root: true,
    env: { es2020: true },
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
    ],
    ignorePatterns: ['dist', '.eslintrc.js'],
    parserOptions: {
        "ecmaVersion": "latest",
        "project": './tsconfig.json',
    },
};