import { workspaceRoot } from '@nx/devkit';
import typescriptRules from './rules/typescript';

/* eslint-disable @typescript-eslint/naming-convention */
export = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        tsconfigRootDir: workspaceRoot,
    },
    plugins: [
        'import',
        '@typescript-eslint'
    ],
    overrides: [
        {
            files: [ '*.ts', '*.tsx' ],
            ...typescriptRules
        }
    ]
};
