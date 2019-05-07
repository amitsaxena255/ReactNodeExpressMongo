const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const companyRouter = require('./util/companyHelper');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/companies', companyRouter);


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/messages', (req, res) => {
  res.send({ messages: ['Message 1','Message 2','Message 3','Message 4','Message 5'] });
});


app.post('/api/world', (req, res) => {
  console.log(req.body);
  var responseBody={
    message:`I received your POST request. This is what you sent me: ${req.body.post}`
  }
  res.send(
    responseBody
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));