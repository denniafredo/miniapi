import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port`, port );
});