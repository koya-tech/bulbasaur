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
    rules: {
        "indent": "off",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "off",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "off",
        "no-underscore-dangle": 'off',
        '@typescript-eslint/indent': 'off',
        'import/no-restricted-paths': [
            'error',
            {
                zones: [
                    // Domain層が依存してはいけない領域
                    {
                        from: './src/application/**/*',
                        target: './src/domain/**/!(*.spec.ts|*.test.ts)',
                        message: 'domain層でapplication層をimportしてはいけません。',
                    },
                    {
                        from: './src/presentation/**/*',
                        target: './src/domain/**/!(*.spec.ts|*.test.ts)',
                        message: 'domain層でpresentation層をimportしてはいけません。',
                    },
                    {
                        from: './src/infrastructure/**/*!(test).ts',
                        target: './src/domain/**/!(*.spec.ts|*.test.ts)',
                        message: 'domain層でinfrastructure層をimportしてはいけません。',
                    },
                    // Application層が依存してはいけない領域
                    {
                        from: './src/presentation/**/*',
                        target: './src/application/**/!(*.spec.ts|*.test.ts)',
                        message: 'application層でpresentation層をimportしてはいけません。',
                    },
                    {
                        from: './src/infrastructure/**/*',
                        target: './src/application/**/!(*.spec.ts|*.test.ts)',
                        message:
                            'application層でinfrastructure層をimportしてはいけません。',
                    },
                ],
            },
        ],
    },
};