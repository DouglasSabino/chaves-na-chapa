const { routerHome } = require('./routers/routerHome');
const { routerLogin } = require('./routers/routerLogin');
const { middlewareError } = require('./middlewares/handleError');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv/config');

const { STRING_CONNECTION, PORT } = process.env;

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cors());

app.use('/', routerLogin);
app.use('/home', routerHome);
app.use(middlewareError);

mongoose.connect(STRING_CONNECTION).then(() => {
  app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));
}).catch((err) => console.log(err));
