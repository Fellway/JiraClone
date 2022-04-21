const { Pool, Client } = require('pg')
const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 8080
const R = require('ramda');

var cors = require('cors');
const { response, request } = require('express');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

app.get('/api/tasks', (req, res) => {
  client.query(`SELECT * FROM public.tasks`).then(response => {
    res.send(response.rows);
  });
});

app.get('/api/tables', function (req, res) {
  getTables().then(result => {
    res.send(result);
  })
});

app.get(`/api/tables/:id`, function (req, res) {
  getTableById(req.params.id).then(result => {
    res.send(result);
  });
});

async function getTables() {
  let tables_data = (await client.query(`SELECT * FROM public.lists`)).rows;
  for (let table of tables_data) {
    table.column = (await client.query(`SELECT * FROM public.columns WHERE list_id = ${table.id}`)).rows;
  }
  return tables_data;
}

async function getTableById(id) {
  let tableData = (await client.query(`SELECT * FROM public.lists where id = ${id}`)).rows[0];
  tableData.column = (await client.query(`SELECT * FROM public.columns WHERE list_id = ${tableData.id}`)).rows;
  return tableData;
}



app.post('/api/tasks', function (req, res) {
  const title = req.body.title;
  const description = req.body.description;

  client.query(`INSERT INTO public.tasks (title, description) VALUES('${title}', '${description}');`)

  res.send({
    'title': title,
    'description': description
  });
});

app.listen(port, () => {
  console.log(`Codetris app listening on port ${port}`)
})

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})

client.connect()