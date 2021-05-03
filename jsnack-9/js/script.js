$(function(){
  /* Esercizio (array, oggetti, filter)
  Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe. Es: 
  [{nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },{nome: ‘cane’, ’famiglia: ‘canidi’, classe: ‘mammiferi’ },{nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ }]
  Crea un nuovo array con la lista dei mammiferi. */

  const animali = [
    {
      nome: 'leone', 
      famiglia: 'felidi', 
      classe: 'mammiferi'
    },
    {
      nome: 'cane', 
      famiglia: 'canidi', 
      classe: 'mammiferi'
    },
    {
      nome: 'gallina', 
      famiglia: 'fasianidi', 
      classe: 'uccelli'
    },
    
    {
      nome: 'tigre', 
      famiglia: 'felidi', 
      classe: 'mammiferi'
    },
    {
      nome: 'corvo', 
      famiglia: 'corvidi', 
      classe: 'uccelli'
    },
    {
      nome: 'coccodrillo', 
      famiglia: 'crocodylidae', 
      classe: 'rettili'
    },
    {
      nome: 'balena', 
      famiglia: 'balenidi', 
      classe: 'mammiferi'
    },
  ];

  //utilizzo filter per selezionare tutti i mammiferi
  const mammiferi = animali.filter((animale) => animale.classe === 'mammiferi');

  //stampo a video il nuovo array creato con solo i mammiferi
  console.log(mammiferi);
  
});