import "../scss/main.scss";
console.log("hello, world");
console.log("process.env.NODE_ENV = ", process.env.NODE_ENV);

import x from './tests/test';
// imports 1234 from test.js

const num = 33;
console.log(`index.js here with const ${num}: and I imported ${x} from test`);

alert("hello from webpack");