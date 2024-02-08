const con = require("./config");
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const path = require('path')

const publicpath = path.join(__dirname, 'invition');
// app.use(express.json())  ki jagah  
app.use(express.urlencoded(true));  // kiya hai 

// app.get("/index", function (req, res) {

//   res.sendFile(__dirname + "/index.html");
// })
app.get('/', (req, resp) => {
    resp.sendFile(`${publicpath}/index.html`)
})
app.get('/wedding', (req, resp) => {
    resp.sendFile(`${publicpath}/wedding.html`)
})

app.get('/birthday', (req, resp) => {
    resp.sendFile(`${publicpath}/birthday.html`)
})
app.get('/all_invite', (req, resp) => {
    resp.sendFile(`${publicpath}/all_invite.html`)
})

app.get('/greeating', (req, resp) => {
    resp.sendFile(`${publicpath}/greeating.html`)
})

app.get('/how_works', (req, resp) => {
    resp.sendFile(`${publicpath}/how_works.html`)
})

app.get('/login', (req, resp) => {
    resp.sendFile(`${publicpath}/login.html`)
})


app.get('/contact', (req, resp) => {
    resp.sendFile(`${publicpath}/contact.html`)
})

app.get('/love', (req, resp) => {
    resp.sendFile(`${publicpath}/love.html`)
})
app.get('/Anniversary', (req, resp) => {
    resp.sendFile(`${publicpath}/Anniversary.html`)
})
app.get('/grt_birth', (req, resp) => {
    resp.sendFile(`${publicpath}/grt_birth.html`)
})


app.post("/", (req, res) => {

    var Name = req.body.Name;
    var Email = req.body.Email;
    var Message = req.body.Message;
    console.log(Name);
    console.log(Email);
    console.log(Message);
    con.connect((err) => {

        var sql = 'INSERT INTO my (Name,Email,Message) values(?,?,?)'
        con.query(sql, [Name, Email, Message], (err, result) => {
            if (err) throw err;
            res.send(`<h1>welcome ${Name} !!!</h1>`)
        })
    })
})
app.listen(3000);