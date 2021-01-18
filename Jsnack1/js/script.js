// Jsnack1 - Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.


var palla = {
  nome : 'palla',
  peso : 10,
};
console.log(palla);

var modifica = parseInt(prompt('modifica il peso della palla'));
palla.peso = modifica;
console.log(palla);
