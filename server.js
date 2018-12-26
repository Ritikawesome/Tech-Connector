const express = require('express');
const mongoose = require("mongoose");
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log('mongoDB connect'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));
// use Routes//
app.use('./api/users', users);
app.use('./api/posts', posts);
app.use('./api/profile', profile);
const PORT = process.env.PORT || 5000;

// Start the API server
app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}`));