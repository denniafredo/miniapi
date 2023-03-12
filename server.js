const bodyParser = require('body-parser');
const express = require('express');
const mahasiswaRouter = require('./routes/mahasiswa');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', mahasiswaRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port`, port);
});