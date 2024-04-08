const express = require('express')
const app = express()
const databaseConnection = require("./config/db.js")
require("dotenv").config();
const morgan = require('morgan');
const router =  require("./routes/route.js");
//midleware
app.use(express.json( )); 
var cors = require('cors') 
app.use(cors())
app.use(morgan("dev")) 

//route mount 
app.use('/api/v1',router)

const port = process.env.PORT||4000;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`server app listening on port ${port}!`))


//call the databse
databaseConnection();