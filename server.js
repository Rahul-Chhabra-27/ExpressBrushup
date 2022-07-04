const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const name = 'John';
app.get('/',(req,res) => res.send(`<h1>${name}</h1>`))

const PORT  = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server is in ${process.env.NODE_ENV} mode and running on port ${PORT}`));