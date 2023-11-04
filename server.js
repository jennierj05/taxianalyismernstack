const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//dotenv
dotenv.config();

//mongodb
connectDB();

//REST
const app = express();

//MiddleWare
app.use(express.json());


//Routes
app.use('/api', require('./routes/userRoutes'));


//listen
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log('Server Running'.bgCyan.white);
});