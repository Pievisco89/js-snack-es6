$(function(){

  /* Esercizio (array, oggetti, map, interpolazione delle stringhe)
  Crea un array di oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un’età.
  Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
  Es:[{ nome: ‘Mario’, cognome: ‘Rossi’, eta: 60 },{ nome: ‘Luigi’, cognome: ‘Verdi’, eta: 12 },{ nome: ‘Silvia’, cognome: ‘Neri’, eta: 25 },]
  [‘Mario Rossi può guidare’,‘Luigi Verdi non può guidare’,‘Silvia Neri può guidare’] */

  const persone = [
    {
      nome: 'Pietro',
      cognome: 'Visconti',
      eta: 31
    },
    {
      nome: 'Paolo',
      cognome: 'Rossi',
      eta: 15
    },
    {
      nome: 'Aldo',
      cognome: 'Baglio',
      eta: 61
    },
    {
      nome: 'Giovanni',
      cognome: 'Storti',
      eta: 10
    },
    {
      nome: 'Giacomo',
      cognome: 'Poretti',
      eta: 18
    },
    {
      nome: 'Paola',
      cognome: 'Paolini',
      eta: 16
    },
    {
      nome: 'Margherita',
      cognome: 'Bianchi',
      eta: 20
    },
  ];


  //utilizzo map per creare nuovo array di oggetti con l'aggiunta della stringa
  const maggiorenni = persone.map((persona) => {
    if(persona.eta >= 18){
      return `${persona.nome} ${persona.cognome} può guidare`;
    }else{
      return `${persona.nome} ${persona.cognome} non può guidare`;
    }
  });

  //stampo a video
  console.log(maggiorenni);

});