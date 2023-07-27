const PORT = 4000;
const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const cors = require('cors')

// body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//cors
app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`)
})