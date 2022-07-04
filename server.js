const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();

const name = 'John';
app.use(express.static(path.join(__dirname,'static')));

const PORT  = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server is in ${process.env.NODE_ENV} mode and running on port ${PORT}`));