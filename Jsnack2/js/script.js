// Jsnack2 - Creare un array che contiene 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.


var zucchine = [
  {
    varieta : 'pippo',
    peso : 0.5,
    lunghezzaCm : 7,
  },
  {
    varieta : 'pluto',
    peso : 3,
    lunghezzaCm : 10,
  },
  {
    varieta : 'paperino',
    peso : 4,
    lunghezzaCm : 10,
  },
  {
    varieta : 'qui',
    peso : 1,
    lunghezzaCm : 10,
  },
  {
    varieta : 'quo',
    peso : 2,
    lunghezzaCm : 10,
  },
  {
    varieta : 'qua',
    peso : 3,
    lunghezzaCm : 10,
  },
  {
    varieta : 'luffy',
    peso : 1,
    lunghezzaCm : 10,
  },
  {
    varieta : 'zoro',
    peso : 2,
    lunghezzaCm : 10,
  },
  {
    varieta : 'sanji',
    peso : 5,
    lunghezzaCm : 10,
  },
  {
    varieta : 'nami',
    peso : 4,
    lunghezzaCm : 10,
  },
];

// prendiamo il primo peso per sommarlo a tutti gli altri nell'array
var temporanea = zucchine[0].peso;
console.log(temporanea);

// facciamo partire il ciclo dall'indece 1
for (var i = 1; i < zucchine.length; i++) {
  // sommiamo tutte le voci peso degli oggetti nel array
  temporanea += zucchine[i].peso;
}
console.log(temporanea);
