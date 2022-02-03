const dotenv = require('dotenv');
const express = require('express');
const cors = require("cors");
dotenv.config({ path: './.env' });

const app = express();
app.use(cors());
  

//landing page
app.use('/', (req, res, next) => {
    let welcome = "oieee :D";
    res.status(200).json({ welcome });
});


//listem port
app.listen(process.env.PORT || 3400, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

