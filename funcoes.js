const fs = require("fs");

//funcoes importadas
module.exports = {
  adicionarFilme: (filme, catalogo, nomeArquivo) => {
    catalogo.push(filme);
    fs.writeFileSync(nomeArquivo, JSON.stringify(catalogo, null, 2));
    return 'Filme adicionado com sucesso!';
  },

  buscarFilme: (id, catalogo) => {
     for(let i = 0; i<catalogo.length;i++){
       if(catalogo[i].id == id){
         return catalogo[i];
       }
     }
    //return catalogo.filter(filme => filme.id == id ? filme : false);
  },

  alteraStatusEmCartaz: (id, catalogo, nomeArquivo, busca) => {
    const filme = busca(id, catalogo);
    filme.emCartaz = !filme.emCartaz;
    fs.writeFileSync(nomeArquivo, JSON.stringify(catalogo, null, 2));
    return "Em Cartaz Atualizado com sucesso!!";
  },

  listarFilmesLongaDuracao: (duracao, catalogo) => {
    return catalogo.filter(filme => filme.duracao >= duracao ? filme : false);
    
  }
}