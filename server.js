require("dotenv").config()
const express = require('express')
require("./config/dbConnect")
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 5000

// app.get('/', (req, res) => res.send('Hello World!'))

// Database Pass: aFpWG3xvfiU8VysH

// connection String: mongodb+srv://promod:<password>@ecomm.lj1ndif.mongodb.net/?retryWrites=true&w=majority&appName=ecomm
app.use(morgan("dev"))
app.listen(PORT, () => console.log(`Server start at http://localhost:${PORT}`))