const express = require('express');
const { userRoute } = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors());


app.use(express.json());

app.use('/users', userRoute);





module.exports = app;
