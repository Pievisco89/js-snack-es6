$(function(){
  //array di 10 oggetti di zucchine
    const arrZucchine = [
      {
        varietà: 'bianca',
        peso: 3,
        lunghezza: 15
      },
      {
        varietà: 'blu',
        peso: 5,
        lunghezza: 10
      },
      {
        varietà: 'azzurra',
        peso: 8,
        lunghezza: 20
      },
      {
        varietà: 'verde',
        peso: 10,
        lunghezza: 25
      },
      {
        varietà: 'nera',
        peso: 4,
        lunghezza: 13
      },
      {
        varietà: 'beige',
        peso: 9,
        lunghezza: 17
      },
      {
        varietà: 'viola',
        peso: 3,
        lunghezza: 15
      },
      {
        varietà: 'arancione',
        peso: 3,
        lunghezza: 15
      },
      {
        varietà: 'rossa',
        peso: 3,
        lunghezza: 15
      },
      {
        varietà: 'argento',
        peso: 7,
        lunghezza: 14
      },
    ];
  
    //creo variabile peso 
    let peso = 0;
  
    //ciclo for of per prendere la chiave peso di ogni zucchina
    for(let zucchina of arrZucchine){
      peso += zucchina['peso'];
    };

    //creo variabili msg e concateno una stringa usando backtick 
    let msg = 
    `
    Peso totale zucchine: ${peso}kg.
    `;

    console.log(msg);
  
  });