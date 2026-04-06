// Array que representa o estoque
const produtos = [];

// Adicionar produto
function adicionar(id, nome, qtd) {
    const produto = { id, nome, qtd: Number(qtd) };
    produtos.push(produto);
    return produto;
}

// Listar produtos
function listar() {
    return produtos;
}

// Remover produto
function remover(id) {
    const index = produtos.findIndex(p => p.id == id);
    if (index !== -1) {
        return produtos.splice(index, 1);
    }
    return null;
}

// Editar quantidade
function editar(id, qtd) {
    const produto = produtos.find(p => p.id == id);
    if (produto) {
        produto.qtd = Number(qtd);
        return produto;
    }
    return null;
}

module.exports = { adicionar, listar, remover, editar };