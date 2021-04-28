$(function(){

  //creo due array con numero di elementi diversi
  let arrPrimo = [ 1, 2, 55 ];
  let arrSecondo = [ 8, 9, 10, 46, 88, 78];
  
  console.log(arrPrimo);
  console.log(arrSecondo);
  console.log('------------------------');

  //ciclo while che dura finchè le length dei due array sono diverse
  while(arrSecondo.length != arrPrimo.length){

    if(arrSecondo.length < arrPrimo.length){ //condizione: primo array più lungo del secondo
      arrSecondo.push(Math.floor(Math.random()*100));
    }else{ //condizione: secondo array più lungo del primo
      arrPrimo.push(Math.floor(Math.random()*100));
    }
    
  };

  //creo variabili msg e concateno una stringa usando backtick 
  let msg1 = 
  `
  Elementi primo array: ${arrPrimo}
  `;

  let msg2 = 
  `
  Elementi secondo array: ${arrSecondo}
  `;

  //stampo a video
  console.log(msg1);
  console.log(msg2);

});