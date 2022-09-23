const fs = require("fs");

//funcoes importadas
module.exports = {
  adicionarFilme: (filme, catalogo, nomeArquivo) => {
    catalogo.push(filme);
    fs.writeFileSync(nomeArquivo, JSON.stringify(catalogo, null, 2));
    return 'Filme adicionado com sucesso!';
  },

  buscarFilme: (codigo, catalogo) => {
    for(let i = 0; i<catalogo.length;i++){
      if(catalogo[i].id == codigo){
        return catalogo[i];
      }
    }
    // return catalogo.filter(filme => filme.id == codigo ? filme : "Não encontrado!"); /* Algo está errado aqui! */
  }
}