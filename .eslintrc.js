module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2022,
    },
    env: {
        browser: true,
        node: true,
        es2022: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:node/recommended',
    ],
    plugins: ['node'],
    rules: {
        // General
        // 'no-console': 'warn',
        'no-debugger': 'warn',
        'max-len': [
            'error',
            {
                code: 150, // swift
                ignoreComments: true,
            },
        ],
        'no-unused-vars': 'warn',
        'no-extra-semi': 'error',
        'no-unexpected-multiline': 'error',
        'no-dupe-keys': 'error',
        'no-dupe-args': 'error',
        'no-duplicate-case': 'error',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': 'off',
        'max-lines-per-function': ['error', { max: 300 }], // swift
        'max-params': ['error', { max: 8 }], // swift
        'no-extra-boolean-cast': 'off',
        // 'no-extra-semi': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-inner-declarations': 'error',
        'no-irregular-whitespace': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': ['error', { max: 2 }],
        'no-param-reassign': 'error',
        'no-redeclare': 'error',
        'no-sequences': 'error',
        'no-trailing-spaces': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-useless-backreference': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': 'warn',
        'no-with': 'error',
        'prefer-promise-reject-errors': 'error',
        radix: 'error',
        'require-await': 'error',
        'semi-style': ['error', 'last'],
        'unicode-bom': ['error', 'never'],
        'use-isnan': 'error',
        'valid-typeof': 'error',
        'wrap-iife': ['error', 'inside'],

        // ECMAScript 6
        'arrow-spacing': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': [
            'error',
            {
                object: true,
                array: false,
            },
        ],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'yield-star-spacing': ['error', 'after'],
        'no-duplicate-imports': 'error',

        // Whitespace, Tabs, and Indentation
        'no-tabs': 'error',
        indent: ['error', 4, { SwitchCase: 1 }], // swift
        // 'no-trailing-spaces': 'error',
        // 'no-irregular-whitespace': 'error',
        // 'no-multi-spaces': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-regex-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'always'],
        'comma-spacing': ['error', { before: false, after: true }],
        'computed-property-spacing': ['error', 'never'],
        'func-call-spacing': ['error', 'never'],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        // 'no-trailing-spaces': 'error',
        'semi-spacing': ['error', { before: false, after: true }],
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            { anonymous: 'always', named: 'never', asyncArrow: 'always' },
        ],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false,
                overrides: {
                    '!': true,
                },
            },
        ],
        'spaced-comment': ['error', 'always'],
        // Node.js and Express
        'node/no-unpublished-require': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        'node/no-extraneous-import': 'error',
        'node/no-missing-import': [
            'error',
            {
                allowModules: [],
                resolvePaths: ['node_modules'],
                tryExtensions: ['.js', '.json', '.node'],
            },
        ],
        'node/shebang': 'error',
        'node/no-deprecated-api': 'error',
        // 'node/exports-style': ['error', 'module.exports'],
    },
};

