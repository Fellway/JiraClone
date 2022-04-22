const {Pool, Client} = require('pg')
const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 8080
const R = require('ramda');
const bcrypt = require('bcrypt');
const cookieParser = require("cookie-parser");
const {generateToken, validateToken} = require('./JWT')
const {getUserByUsername, addUser} = require('./user/repository/UserRepository')
const {fetchTablesWithColumns} = require('./table/service/TableService')

var cors = require('cors');
const {path} = require("ramda");
const {response, request} = require('express');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));
app.use(cookieParser());

app.get('/api/tasks', (req, res) => {
  client.query(`SELECT *
                FROM public.tasks`).then(response => {
    res.send(response.rows);
  });
});

app.get('/api/tables', function (req, res) {
  fetchTablesWithColumns().then(tables =>
    res.send(tables)
  )
});

app.get(`/api/tables/:id`, function (req, res) {
  getTableById(req.params.id).then(result => {
    res.send(result);
  });
});

async function getTableById(id) {
  let tableData = (await client.query(`SELECT *
                                       FROM public.lists
                                       WHERE id = ${id}`)).rows[0];
  tableData.column = (await client.query(`SELECT *
                                          FROM public.columns
                                          WHERE list_id = ${tableData.id}`)).rows;
  return tableData;
}


app.post('/api/tasks', function (req, res) {
  const title = req.body.title;
  const description = req.body.description;
  const columnId = req.body.columnId;
  
  client.query(`INSERT INTO public.tasks (name, description, createdby, column_id)
                VALUES ('${title}', '${description}', '4', ${columnId});`)
  
  res.send({
    'title': title,
    'description': description
  });
});

app.post("/api/register", (req, res) => {
  const {username, password} = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    return addUser({username, hash})
  })
    .then(() => {
      res.json("USER_REGISTERED");
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({error: err.message});
      }
    })
})

app.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.post("/api/login", (req, res) => {
  const {username, password} = req.body;
  console.log(username, password);
  getUserByUsername(username).then(user => {
    const hashedPassword = user.password;
    bcrypt.compare(password, hashedPassword).then((match) => {
      if (!match) {
        res.status(400).json({error: "Wrong username or password"})
      } else {
        let accessToken = generateToken(user);
        res.cookie("access_token", accessToken, {
          maxAge: 60 * 60 * 24 * 1000
        })
        res.json({accessToken: accessToken});
      }
    })
  }).catch((err) => {
    if (err) {
      res.status(400).json({error: err.message});
    }
  });
});

app.get("/api/profile", validateToken, (req, res) => {
  res.json("Hello")
})

app.listen(port, () => {
  console.log(`JiraClone app listening on port ${port}`)
})

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})

client.connect()