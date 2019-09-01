# plantur
Simple web app to remember to water your plants.

## Configuration

A configuration file `config.js` needs to be created at the root of the project.
Here is an example with :
```js
const db = {
    host: "localhost",
    port: "3306",
    database: "databasic",
    username: "dude",
    password: "s3kr37"
};

module.exports = {db};
```