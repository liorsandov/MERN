// console.log('hello from BackEnd - Lior');
const express = require('express')
const color = require('colors');
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddelware')
const connectDB = require('./config/db');
const port = 3000

connectDB()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server start on port ${port}`));9