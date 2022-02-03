const dotenv  = require('dotenv');
const  path   = require('path');
const express = require('express');
const cors    = require("cors");
const app     = express();

dotenv.config({ path: './.env' });
app.use(cors());


//landing page
app.get('/',function(req,res) {
    app.use(express.static(path.join(__dirname, 'public')));
    
    console.log(path.join(__dirname, '..', 'public/resources'));
    res.sendFile(path.join(__dirname, '..','public/index.html'));
});



//listem port
app.listen(process.env.PORT || 3400, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

