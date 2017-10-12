// index.js

/*eslint-disable no-console */

const app = require('./src/app');
const devPort = require('./src/config').devPort;
const port = process.env.PORT || devPort;

app.listen(port, () => {
  console.log('Express running on port ' + port);
});
