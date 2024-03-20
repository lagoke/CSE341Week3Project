const createError = require('http-errors');

const express = require('express');

const mongodb = require('./data/database');

const app = express();

const bodyParser = require('body-parser');

const cors = require('cors');

const { attendanceValidation } = require('./validation.js');

app.use(cors());

const port =3000

app.listen(process.env.PORT || port);


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type,Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Protocols', 'GET,POST, PUT, DELETE, OPTIONS');
next();

});



// Handling Errors

app.use((err, req, res, next) => {

    // console.log(err);

    err.statusCode = err.statusCode || 500;

    err.message = err.message || "Internal Server Error";

    res.status(err.statusCode).json({

      message: err.message,

    });

});


app.use('/', require('./routes')); 
mongodb.initDb((err) =>{

    if(err) {
        console.log(err);
    }

    else{

       
console.log('Databse is listening and Node is running on  port ' + (process.env.PORT || port));

    }



}
);

