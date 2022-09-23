const Filme = require("./Filme");
const funcoes = require("./funcoes");
const catalogo = require("./database/catalogo.json");
const nomeArquivo = "./database/catalogo.json";

const {adicionarFilme, buscarFilme} = funcoes;

console.log("****************** MATH - MOVIES *****************");

  // adicionarFilme(new Filme(5,
  // "Harry Potter o menino Maluco",
  // 240,
  // ["Ruppert Griffin", "Menino Maluquinho", "Chico Bento"],
  // 2022,
  // false), catalogo, nomeArquivo);

  console.log(buscarFilme(5, catalogo));
