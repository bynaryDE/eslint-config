export default {
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-ignore': 'allow-with-description',
                'ts-expect-error': 'allow-with-description',
                'ts-check': false,
                'ts-nocheck': true
            }
        ],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
                overrides: {
                    constructors: 'no-public'
                }
            }
        ],
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'signature',
                    'static-field',
                    [
                        'static-get',
                        'static-set',
                        'static-method'
                    ],
                    'public-field',
                    [
                        'protected-field',
                        'private-field'
                    ],
                    'constructor',
                    [
                        'public-method',
                        'public-get',
                        'public-set'
                    ],
                    [
                        'protected-method',
                        'protected-get',
                        'protected-set',
                        'private-method',
                        'private-get',
                        'private-set'
                    ]
                ]
            }
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                format: [
                    'camelCase',
                    'PascalCase',
                    'UPPER_CASE',
                    'snake_case'
                ],
                leadingUnderscore: 'allowSingleOrDouble',
                selector: 'default',
                trailingUnderscore: 'allow'
            },
            {
                format: [
                    'camelCase'
                ],
                leadingUnderscore: 'allow',
                selector: [
                    'function'
                ]
            },
            {
                format: [
                    'PascalCase'
                ],
                selector: [
                    'class',
                    'enum'
                ]
            },
            {
                format: [
                    'camelCase'
                ],
                leadingUnderscore: 'require',
                modifiers: [
                    'private'
                ],
                selector: 'memberLike'
            },
            {
                format: [
                    'PascalCase'
                ],
                selector: 'typeLike'
            },
            {
                format: [
                    'PascalCase'
                ],
                prefix: [
                    'I'
                ],
                selector: 'interface'
            }
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': [
            'error',
            {
                ignoreParameters: true,
                ignoreProperties: true
            }
        ],
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {
                avoidEscape: true
            }
        ]
    }
};
