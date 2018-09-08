import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import router from '../routes';

dotenv.config()
const PORT = process.env.PORT || 5000;

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, () => console.log(
  `Server running on PORT http://127.0.0.1:${PORT}`)
);
