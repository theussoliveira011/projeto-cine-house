const fs = require("fs");

//funcoes importadas
module.exports = {
  adicionarFilme: (filme, catalogo, nomeArquivo) => {
    catalogo.push(filme);
    fs.writeFileSync(nomeArquivo, JSON.stringify(catalogo, null, 2));
    return 'Filme adicionado com sucesso!';
  }
}