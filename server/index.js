const express = require('express');
const app = express();
const mysql2 = require('mysql2');
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'M@rquefen87',
    database: 'employeedatabase',
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query('INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)', 
    [name, age, country, position, wage],
    (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    })
})

app.listen(3001, () => {
    console.log('running');
})