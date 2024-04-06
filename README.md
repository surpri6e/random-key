[![npm version](https://img.shields.io/npm/v/rkey.svg?style=flat-square)](https://www.npmjs.org/package/rkey)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=rkey&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=rkey)
[![npm downloads](https://img.shields.io/npm/dy/rkey.svg?style=flat-square)](https://npm-stat.com/charts.html?package=rkey)

# RKey

Library for create random unique key. You can use it in ECMAScript and CommonJS projects.

## All structures

### TComponentsOfKey

```ts
export type TComponentsOfKey = 'numbers' | 'letters' | 'all';
```

### getRandomKey

```ts
type TGetRandomKeySignature = (length: number, components: TComponentsOfKey) => string;

/**
    Generate new unique key
    @param {number} length length of your key
    @param {TComponentsOfKey} components additional information about your key

    @returns {string} unique key
*/
export const getRandomKey: TGetRandomKeySignature = (length, components) => {...}
```
