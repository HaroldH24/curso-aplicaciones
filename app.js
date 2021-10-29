var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(require('./src/routes/mentor'));
app.use(require('./src/routes/mentorizados'));
app.use(require('./src/routes/sesion'));

// const urlencodedParser = bodyParser.urlencoded({extended: false});


app.listen(3000, () =>{
    console.log('Server iniciado...');
});

