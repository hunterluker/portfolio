require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailerCtrl = require('./controllers/nodemailer');

const { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

app.post('/api/send', nodemailerCtrl.sendEmail);

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
