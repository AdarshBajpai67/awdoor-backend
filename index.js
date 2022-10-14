const express = require('express');
const bodyParser = require('body-parser');
const hotelRouter = require('./routes/hotel');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(hotelRouter);




app.listen(3000,()=>{
    console.log('listening on port 3000');
});