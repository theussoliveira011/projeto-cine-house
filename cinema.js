const Filme = require("./Filme");
const funcoes = require("./funcoes");
const catalogo = require("./database/catalogo.json");
const nomeArquivo = "./database/catalogo.json";

const {adicionarFilme} = funcoes;

console.log("****************** MATH - MOVIES *****************");

adicionarFilme({id: 4,
  titulo: "Harry Potter o menino Maluco",
  duracao: 240,
  atores: ["Ruppert Griffin", "Menino Maluquinho", "Chico Bento"],
  anoDeLancamento: 2022,
  emCartaz: false}, catalogo, nomeArquivo);

  
