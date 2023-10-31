# eslint-config
A collection of eslint-configs for use at bynary

## Installation
```shell
$ npm install --save-dev eslint @bynary/eslint-config
```

## Usage

This package provides multiple configs for different use cases.
You can use the configs by adding them in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

### Default config

The default config is for use in most projects and contains JavaScript and TypeScript related rules. It can be used by extending `@bynary` or `@bynary/eslint-config` in your ESLint config.

```js
{
    "extends": [
        "@bynary"
    ],
    "rules": {
        // Your overrides
    }
}
```

or


```js
{
    "extends": [
        "@bynary/eslint-conifg"
    ],
    "rules": {
        // Your overrides
    }
}
```

### Angular config

For Angular projects, there is a tailored config available under the name `@bynary/eslint-config/angular`



```js
{
    "extends": [
        "@bynary/eslint-config/angular"
    ],
    "rules": {
        // Your overrides
    }
}
```

# Building

Run `nx build ` to build the library.


# License

MIT License

Copyright (c) 2023 bynary

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
