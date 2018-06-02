const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;
const description = process.env.DESC || 'NodeJS process: ';

let count = 0;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

app.get('/', (req, res) => {
  count++;
  res.send(`${description} has been hit ${count} times.`);
});
