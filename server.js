const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve React App Build 
const path = require('path');
app.use(express.static(path.join(__dirname + '/client/build')));
app.get('/', function(req, res) {
  res.sendFile(__dirname+'/client/build/index.html');
});

 

// Routes
const routes = require('./routes');
app.use(routes);


// Set up mongoose and connect to mongoDB
const mongoose = require('mongoose');
const mongoDB_uri = process.env.MONGODB_URI || 'mongodb://localhost/joshWebpage';
mongoose.Promise = Promise;
mongoose.connect(mongoDB_uri)
  .then(
    () => { console.log('MongoDB connected') },
    err => { console.log(`Error connecting to MongoDB \n${err}`) }
  );

// Server Listen
app.listen(PORT, function() {
  console.log('App listening on port: ' + PORT);
});