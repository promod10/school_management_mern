const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 5000

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(morgan("dev"))
app.listen(PORT, () => console.log(`Server start at http://localhost:${PORT}`))