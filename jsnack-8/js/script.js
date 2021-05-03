$(function(){
  /* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
    Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

  //creo array di stringhe a caso.
  const arrParole = ['ciao', 'COME', 'sTAi','parolE', 'PROVa'];

  //utilizzo map per avere nuovo array di stringhe con la prima lettera maiuscola
  const nuoveParole = arrParole.map((parola) => capitalizeFirst(parola));

  console.log(nuoveParole);

});

//Funzione
//utilizzo charAt(0) per scegliere la prima lettera e .toUpperCase per farla maiuscola
//utilizzo .slice(1) per prendere dalla seconda lettera in poi e toLowerCase() per farle minuscole  
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};