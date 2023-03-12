const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port`, port );
});