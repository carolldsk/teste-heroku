const express = require('express');


const app = express();

  

//landing page
app.get('/',function(req,res) {
    app.use(express.static(__dirname));
    res.sendFile(__dirname + "/index.html");
});

//listem port
app.listen(3000);
