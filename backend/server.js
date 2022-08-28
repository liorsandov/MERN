// console.log('hello from BackEnd - Lior');
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddelware')
const port = 3000

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server start on port ${port}`));9