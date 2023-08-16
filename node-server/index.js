const express = require('express');
const router = require('./routes.js')
const cors = require('cors')

const PORT = 3030;

const app = express();

app.use(express.json())
app.use(cors())
app.use(router)


app.listen(PORT, () => {console.log(`server starting at : http://localhost:${PORT}`)})