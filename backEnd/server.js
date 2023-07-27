const PORT = 4000;
const express = require('express');
const app = express();

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`)
})