var con = require('./connection');
var express  = require('express');
var app = express();
const path = require ('path')

var bodyParser = require('body-parser');
/*
var multer =require("multer");
const storage = multer.memoryStorage(); 
const upload =multer({ storage:multer.memoryStorage()});
*/
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true }));



app.use(express.static(path.join(__dirname, '../public')));

app.get('/hello', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/hello.html'));
});
  app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));

  });



app.post('/insert', (req, res) =>{
    
    const date= req.body.date;
    const name = req.body.name;
    const address=req.body.address;
    const age = req.body.age;
    const species = req.body.species;
    const petname = req.body.petname;
    const breed = req.body.breed;
    const gender = req.body.gender;
    const size = req.body.size;
    const email = req.body.email;
    const mno= req.body.mno;

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!!!")
        var sql = "INSERT INTO pet_db(date, name, address, age, species, petname, breed, gender, size, email, mno) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        con.query(sql, [date, name, address, age, species, petname, breed, gender, size, email, mno], function(err, result){
            if (err) throw err;
          console.log("1 record inserted");
        });
    });
    
   
});

const port = 7000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});