const express = require("express");
const app = express();
require('dotenv').config();
const logger = require('morgan');

require('./config/database');

app.use(logger('dev'));
app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/', require('./routes/foamOrNot'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

const port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log(`Express app listening on port ${port}`);
})