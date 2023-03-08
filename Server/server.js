
const express = require('express');

var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
const { query } = require('express');


var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'rohan',
    password: 'password',
    database: 'airdrop'
});



connection.connect();
console.log("Connect");



//LOGIN apI
app.get('/login',async function (req,res){
    res.setHeader('Content-Type', 'application/json');
      connection.query(`SELECT * FROM register where email = '${req.query.email}' and password = '${req.query.password}'`, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
})

app.get('/chackuser',async function (req,res){
    res.setHeader('Content-Type', 'application/json');
      connection.query(`SELECT * FROM register where username = '${req.query.username}'`, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
})

app.get('/chackmail',async function (req,res){
    res.setHeader('Content-Type', 'application/json');
      connection.query(`SELECT * FROM register where email = '${req.query.email}'`, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
})

app.get('/refrellCode',async function (req,res){
  res.setHeader('Content-Type', 'application/json');
    connection.query(`SELECT * FROM register where 	refrellCode = '${req.query.Code}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
})

app.get('/chackReferralParent',async function (req,res){
  console.log(req.query.referralParent);
  res.setHeader('Content-Type', 'application/json');
    connection.query(`SELECT * FROM register where 	referralParent = '${req.query.referralParent}'`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
})

app.post('/register', function(req, res) {
    res.setHeader('Content-Type', 'application/json');


    let record = {
        name : req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        refrellCode : req.body.refrellCode,
        referralParent : req.body.referralParent,
    };
    let sql = "INSERT INTO register SET ?";
    console.log("successfully inserted");
    connection.query(sql, record, (err) => {
        if (err) throw err;
        res.end();
    }); 
})



app.post('/insaddress',async function(req,res) {
    res.setHeader('Content-Type', 'application/json');
  
    let record = {
      Address : req.body.adrs,
      email : req.body.email
    };
    
   console.log(record);
    let sql = await `UPDATE register SET address = "${req.body.adrs}" WHERE email = "${req.body.email}"`
    console.log("successfully inserted");
   
    connection.query(sql, record, (err) => {
        if (err) throw err;
        res.end();
    });
  
  
  })
  
app.post('/tokenhandle',async function(req,res) {

  let TokenData = {
    image: req.body.image,
    email: req.body.email
  }

  let sql = "INSERT INTO wallet_data SET ?";
  connection.query(sql, TokenData, (err) => {
    console.log("image sent");
  }) ;

  res.send("success");


})


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


// admin fatch api

app.get('/getdata',async function (req,res){
    res.setHeader('Content-Type', 'application/json');
      connection.query(`select * from wallet_data `, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  })

  app.get('/getdataregister',async function (req,res){
    res.setHeader('Content-Type', 'application/json');
      connection.query(`select * from register `, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  })
  

app.get('/deletdata/:id',async function (req,res){
    res.setHeader('Content-Type', 'application/json');
      connection.query(`DELETE FROM wallet_data WHERE id = ${req.params.id}`, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
})
app.get('/deletdataregister/:id',async function (req,res){
  res.setHeader('Content-Type', 'application/json');
    connection.query(`DELETE FROM register WHERE id = ${req.params.id}`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
})





var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});