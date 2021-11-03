function expressStart(port) {
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello Express!');
  });
  app.listen(port, () => {
    console.log(`Express web app on http://localhost:${port}`);
  })
}
module.exports = {
  expressStart
}