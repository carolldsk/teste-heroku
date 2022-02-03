
const express = require('express');


const app = express();

  

//landing page
app.use('/', (req, res, next) => {
    let welcome = "oieee :D";
    res.status(200).json({ welcome });
});


//listem port
app.listen(3000);

