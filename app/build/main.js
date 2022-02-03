
const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());
  

//landing page
app.use('/', (req, res, next) => {
    let welcome = "oieee :D";
    res.status(200).json({ welcome });
});


//listem port
app.listen(3000);

