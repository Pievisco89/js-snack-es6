$(function(){
  //creo array vuoti e inizializzo le variabili pesoLunghe e pesoCorte
  const arrLunghe = [];
  const arrCorte = [];
  let pesoLunghe = 0;
  let pesoCorte = 0;

  const arrZucchine = [
    {
      nome: 'bianca',
      peso: 10,
      lunghezza: 16
    },
    {
      nome: 'blu',
      peso: 11,
      lunghezza: 17
    },
    {
      nome: 'azzurra',
      peso: 12,
      lunghezza: 18
    },
    {
      nome: 'verde',
      peso: 13,
      lunghezza: 19
    },
    {
      nome: 'nera',
      peso: 9,
      lunghezza: 9
    },
    {
      nome: 'beige',
      peso: 8,
      lunghezza: 8
    },
    {
      nome: 'viola',
      peso: 7,
      lunghezza: 7
    },
    {
      nome: 'arancione',
      peso: 6,
      lunghezza: 6
    },
    {
      nome: 'rossa',
      peso: 4,
      lunghezza: 5
    },
    {
      nome: 'argento',
      peso: 3,
      lunghezza: 4
    }
  ];
  console.log(arrZucchine);
  console.log('----------------');

  //ciclo for of per pushare il peso nei due array 
  for(let zucchina of arrZucchine){
    if(zucchina['lunghezza'] < 15){
      arrCorte.push(zucchina);
      pesoCorte += zucchina['peso']
      console.log(arrCorte);
    }else{
      arrLunghe.push(zucchina);
      pesoLunghe += zucchina['peso'];
      console.log(arrLunghe);
    }
  };
  
  //creo variabili msg e concateno una stringa usando backtick 
  let msg1 = 
  `
  Peso totale zucchine lunghe: ${pesoLunghe}.
  `;

  let msg2 = 
  `
  Peso totale zucchine corte: ${pesoCorte}.
  `;
  
  console.log(msg1);

  console.log(msg2);

});