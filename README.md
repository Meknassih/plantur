# plantur
Simple web app to remember to water your plants.

## Prerequisites
- Remote Parse Server (e.g. Back4app)

## Configuration

A configuration file `config.js` needs to be created at the root of the project.
Here is an example with :
```js
const parse = {
    serverUrl: "https://parse.api",
    appId: "APPID",
    jsKey: "JSKEY",
};

const session = {
    keys: ['key1', 'key2', ...],
    maxAge: 60 * 60 * 1000
};

module.exports = {parse, session};
```