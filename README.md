# tslint-config-xo

> Adaptation [XO](https://github.com/sindresorhus/xo) configuration for [TSLint](https://github.com/palantir/tslint).

## Disclaimer

Some bad news:

  1. TSLint does not support error levels. We do not support the following rules: [index.js#L22-L30](https://github.com/mrmlnc/tslint-config-xo/blob/master/index.js#L22-L30)
  2. Some of the rules currently do not exist in the TSLint. See: [index.js#L32-L125](https://github.com/mrmlnc/tslint-config-xo/blob/master/index.js#L32-L125) and [esnext.js#L13-L17](https://github.com/mrmlnc/tslint-config-xo/blob/master/esnext.js#L13-L17)

## Install

```shell
$ npm install --save-dev tslint-config-xo
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

## Changelog

See the [Releases section of our GitHub project](https://github.com/mrmlnc/tslint-config-xo/releases) for changelogs for each release version.

## License

This software is released under the terms of the MIT license.
