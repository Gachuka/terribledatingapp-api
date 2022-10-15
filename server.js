require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const knex = require('knex')(require('./knexfile'));

const PORT = process.env.PORT || 7373;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log('GET Request')
  knex('user')
    .select('*')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving data ${err}`));
})

app.get('/:userName', (req, res) => {
  knex('user')
  .select('*')
  .where({ user: req.params.userName })
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => res.status(400).send(`Error retrieving data ${err}`));
})

app.post('/', (req, res) => {
  console.log('POST Request')
  console.log(req.body)

  knex('user')
    .insert(req.body)
    .then((data) => {
      console.log(data)
      res.status(201).json({message: "User has been created"});
    })
    .catch((err) => res.status(400).send(`Error creating Warehouse: ${err}`));
})

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});