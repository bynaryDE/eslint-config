/* eslint-disable @typescript-eslint/naming-convention */
export default {
    extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates'
    ],
    rules: {
        '@angular-eslint/sort-lifecycle-methods': 'error',
        '@angular-eslint/contextual-decorator': 'error',
        '@angular-eslint/no-conflicting-lifecycle': 'error',
        '@angular-eslint/component-class-suffix': [
            'error',
            {
                suffixes: [
                    'Component',
                    'Dialog',
                    'Drawer',
                    'Layout',
                    'Page'
                ]
            }
        ],
        '@angular-eslint/no-host-metadata-property': [
            'error',
            {
                allowStatic: true
            }
        ]
    }
};
