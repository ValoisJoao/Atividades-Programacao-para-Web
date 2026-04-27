const express = require('express')
const mustacheExpress = require('mustache-express')
const PORT = 8080;
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/view');

app.get('/', (req, res)=>{
    res.render("index.html");
});

app.listen(PORT,()=>{
    console.log('app rodando na porta ' + PORT);
});