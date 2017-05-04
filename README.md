# tslint-config-xo

[![Greenkeeper badge](https://badges.greenkeeper.io/mrmlnc/tslint-config-xo.svg)](https://greenkeeper.io/)

> Adaptation [XO](https://github.com/sindresorhus/xo) configuration for [TSLint](https://github.com/palantir/tslint).

## Disclaimer

Some bad news:

  0. This config does not contain TypeScript specific rules. This is adaptation XO configuration to TSLint.
  1. TSLint does not support error levels. We do not support the warning rules (see `// w` rules).
  2. Some of the rules currently do not exist in the TSLint and other library. See `// -` rules.

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

Supports parsing ES2015, but doesn't enforce it by default.

This package also exposes `xo/esnext` if you want ES2015+ rules:

```json
{
  "extends": "tslint-config-xo/esnext"
}
```

## We use

  * [buzinas/tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules)
  * [Microsoft/tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib)
  * [vrsource/vrsource-tslint-rules](https://github.com/vrsource/vrsource-tslint-rules)
  * [jonaskello/tslint-immutable](https://github.com/jonaskello/tslint-immutable)

## Changelog

See the [Releases section of our GitHub project](https://github.com/mrmlnc/tslint-config-xo/releases) for changelogs for each release version.

## License

This software is released under the terms of the MIT license.
