# tslint-config-xo

> Adaptation [XO](https://github.com/sindresorhus/xo) configuration for [TSLint](https://github.com/palantir/tslint).

## Disclaimer

Some bad news:

  * This config does not contain TypeScript specific rules. This is adaptation XO configuration to TSLint.
  * Some of the rules currently do not exist in the TSLint and other library. See `@unavailable` directive in the `index.js` and `next.js` files.

## Install

```shell
$ npm install -D tslint-config-xo
```

## Usage

Create `tslint.json` file and add `extends` field:

```json
{
  "extends": "tslint-config-xo"
}
```

This package also exposes `xo/esnext` if you want ES2015+ rules:

```json
{
  "extends": "tslint-config-xo/esnext"
}
```

You can overwrite rules by `rules` field:

```json5
{
  "extends": "tslint-config-xo/esnext",
  "rules": {
     // Your rules here
  }
}
```

## We use

  * [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules)
  * [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib)
  * [vrsource-tslint-rules](https://github.com/vrsource/vrsource-tslint-rules)
  * [tslint-divid](https://github.com/jonaskello/tslint-divid)
  * [tslint-consistent-codestyle](https://github.com/ajafff/tslint-consistent-codestyle)
  * [tslint-sonarts](https://github.com/SonarSource/SonarTS)
  * [tslint-config-security](https://github.com/webschik/tslint-config-security)

### Quick Start

```shell
$ git clone https://github.com/mrmlnc/tslint-config-xo
$ npm i
$ npm test
```

### Markers

We use JSDoc-like syntax for mark rules:

```js
/**
 * @eslint – The rule name in ESLint.
 * @provider – The package that contains the rule.
 * @missed – The rule has a missed option (for example, unavailable).
 * @typescript – The rule is available in the compiler.
 * @duplicate – The rule is a duplicate for XXX.
 * @unavailable – The rule is currently unavailable.
 * @notApplicable – The rule is not applicable to Typescript.
 */
```

## Changelog

See the [Releases section of our GitHub project](https://github.com/mrmlnc/tslint-config-xo/releases) for changelogs for each release version.

## License

This software is released under the terms of the MIT license.
