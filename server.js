const express = require("express");
const app = express();
require('dotenv').config();

require('./config/database');

app.use('/api/', require('./routes/foamOrNot'));


const port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log(`Express app listening on port ${port}`);
})