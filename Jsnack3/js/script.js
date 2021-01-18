// Jsnack3 - Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.


var zucchine = [
  {
    varieta : 'pippo',
    peso : 0.5,
    lunghezzaCm : 7,
  },
  {
    varieta : 'pluto',
    peso : 3,
    lunghezzaCm : 4,
  },
  {
    varieta : 'paperino',
    peso : 4,
    lunghezzaCm : 12,
  },
  {
    varieta : 'qui',
    peso : 1,
    lunghezzaCm : 10,
  },
  {
    varieta : 'quo',
    peso : 2,
    lunghezzaCm : 20,
  },
  {
    varieta : 'qua',
    peso : 3,
    lunghezzaCm : 14,
  },
  {
    varieta : 'luffy',
    peso : 1,
    lunghezzaCm : 15,
  },
  {
    varieta : 'zoro',
    peso : 2,
    lunghezzaCm : 2,
  },
  {
    varieta : 'sanji',
    peso : 5,
    lunghezzaCm : 8,
  },
  {
    varieta : 'nami',
    peso : 25,
    lunghezzaCm : 15,
  },
];
var menoDi15Cm = [];
var piuDi15Cm = [];

//*** così sposto solo il singolo dato, io voglio l'oggetto per intero ***
// for (var i = 0; i < zucchine.length; i++) {
//   if (zucchine[i].lunghezzaCm < 15) {
//     menoDi15Cm.push(zucchine[i].lunghezzaCm);
//   } else {
//     piuDi15Cm.push(zucchine[i].lunghezzaCm);
//   }
// }

//*** con questo ciclo ***
for (var i = 0; i < zucchine.length; i++) {
  if (zucchine[i].lunghezzaCm < 15) {
    menoDi15Cm.push(zucchine[i]);
  } else {
    piuDi15Cm.push(zucchine[i]);
  }
}
console.log(menoDi15Cm);
console.log(piuDi15Cm);


// somma zucchine inferiori a 15 cm
var temporanea = menoDi15Cm[0].peso;
for (var i = 1; i < menoDi15Cm.length; i++) {
  temporanea += menoDi15Cm[i].peso;
}
console.log('il peso delle zucchine inferiori a 15 cm è: ' + temporanea);


// somma zucchine superiori o uguali a 15 cm
temporanea = piuDi15Cm[0].peso;
for (var i = 1; i < piuDi15Cm.length; i++) {
  temporanea += piuDi15Cm[i].peso;
}
console.log('il peso delle zucchine superiori o uguali a 15 cm è: ' + temporanea);
