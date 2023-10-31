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

## Building

Run `nx build ` to build the library.
