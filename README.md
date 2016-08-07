# tslint-config-xo

> Adaptation [XO](https://github.com/sindresorhus/xo) configuration for [TSLint](https://github.com/palantir/tslint).

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
