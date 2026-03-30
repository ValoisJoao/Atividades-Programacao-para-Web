// carrega framework express
const express = require ('express');

// cria um app do tipo express()
const app     = express()

//declara porta de execução da aplicação
const PORT = 8080;

app.get('/',(req,res)=>{
    res.send('Olá, WEB!');
});

app.get('/ola/joao',(req,res)=>{
    res.send('Olá, João!');
});

app.get('ola/nome', (req,res)=>{
    res.send(`Olá, ${req.nome} !`);
});

//Inicializar a aplicação na porta definida
app.listen(PORT,()=>{
    console.log("app rodando na porta " + PORT);
});
