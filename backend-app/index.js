const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ruleRoutes = require('./routes/rules');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.options('*', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
  res.sendStatus(200);
});

app.use(bodyParser.json());
app.use('/api/rules', ruleRoutes);

main().catch(err => console.log(err));
main().then(console.log("Connected to mongodb"));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/rule-engine-app');
}

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
