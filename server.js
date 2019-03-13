// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/webmaker5610')));
app.use(express.static(path.join(__dirname, 'src/assets')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


require("./assignment/app")(app);


const port = process.env.PORT || '3200';
app.set('port', port);

app.get('*', function (req, res) {
  // res.sendFile(path.join(__dirname, 'dist/index.html'));
  res.sendFile(path.join(__dirname, 'dist/webmaker5610/index.html'));
});


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));





// //my api list
// app.get('/api/user/123', findUserById);
// function findUserById (req,res) {
//   res.status(200).send("Find a user!");
// }


require('./assignment/app')(app);
