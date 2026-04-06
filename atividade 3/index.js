// carrega framework express
const express = require ('express');

const estoque = require('./estoque');

// cria um app do tipo express()
const app     = express()

//declara porta de execução da aplicação
const PORT = 8080;

// Cria um array para armazenar respostas ao Usário
const LOG =[];

app.get('/',(req,res)=>{
    res.send('Olá, WEB! Neste site teremos um estoque.');
});
// Rota adicionar produto
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    const produto = estoque.adicionar(id, nome, qtd);
    res.json(produto);
});

// Rota listar produtos
app.get('/listar', (req, res) => {
    res.json(estoque.listar());
});

// Rota remover produto
app.get('/remover/:id', (req, res) => {
    const resultado = estoque.remover(req.params.id);
    if (resultado) {
        res.send('Produto removido com sucesso');
    } else {
        res.send('Produto não encontrado');
    }
});

// Rota editar quantidade
app.get('/editar/:id/:qtd', (req, res) => {
    const resultado = estoque.editar(req.params.id, req.params.qtd);
    if (resultado) {
        res.json(resultado);
    } else {
        res.send('Produto não encontrado');
    }
});

//Inicializar a aplicação na porta definida
app.listen(PORT,()=>{
    console.log("app rodando na porta " + PORT);
});
