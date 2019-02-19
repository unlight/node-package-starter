module.exports = {
    'root': true,
    'env': {
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:unicorn/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': false,
        },
        'project': 'tsconfig.json',
    },
    'plugins': [
        'unicorn',
        'import',
        '@typescript-eslint/tslint',
    ],
    'rules': {
        'no-undef': 0,
        'no-unused-vars': 0,
        'indent': 0,
        'no-dupe-class-members': 0,
        'unicorn/import-index': 0,
        'unicorn/catch-error-name': 0,
        'import/newline-after-import': 0,
        'import/no-duplicates': 1,
        'import/max-dependencies': [1, { 'max': 10 }],
        'quotes': [1, 'single', { 'allowTemplateLiterals': true }],
        'semi': [1, 'always'],
        '@typescript-eslint/tslint/config': [1, {
            lintFile: './tslint.json',
        }],
    }
};
