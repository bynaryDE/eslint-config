import angularRules from './rules/angular';

/* eslint-disable @typescript-eslint/naming-convention */
export = {
    extends: [
        './base'
    ],
    overrides: [
        {
            files: [ '*.ts' ],
            ...angularRules
        }
    ]
};
