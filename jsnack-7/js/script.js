$(function(){
  const cars = [
    {
      marca: 'bmw',
      modello: 'serie 3',
      alimentazione: 'benzina'
    },
    {
      marca: 'mercedes',
      modello: 'classe c',
      alimentazione: 'diesel'
    },
    {
      marca: 'fiat',
      modello: '500',
      alimentazione: 'metano'
    },
    {
      marca: 'volkswagen',
      modello: 'golf',
      alimentazione: 'gpl'
    },
    {
      marca: 'volkswagen',
      modello: 'polo',
      alimentazione: 'metano'
    },
    {
      marca: 'bmw',
      modello: 'serie 5',
      alimentazione: 'diesel'
    },
    {
      marca: 'mercedes',
      modello: 'classe e',
      alimentazione: 'benzina'
    },
    {
      marca: 'audi',
      modello: 'a6',
      alimentazione: 'elettrico'
    },
    {
      marca: 'nissan',
      modello: 'micra',
      alimentazione: 'gpl'
    },
    {
      marca: 'bmw',
      modello: 'x5',
      alimentazione: 'elettrico'
    },

  ];

  //filtro l'array cars per dividere le macchine tra benzina, diesel e restanti
  const benzinaCars = cars.filter((car) => {
    if(car.alimentazione === 'benzina'){
      return true
    }
  });


  const dieselCars = cars.filter((car) => {
    if(car.alimentazione === 'diesel'){
      return true
    }
  });


  const otherCars = cars.filter((car) => {

    if(car.alimentazione !== 'diesel' && car.alimentazione !== 'benzina'){
      return true
    }

  });

  //variabili che utilizzerò in seguito per stampare in html
  let benzina = $('.benzina');
  let diesel = $('.diesel');
  let others = $('.others');

  //richiamo la funzione
  printCars(benzinaCars, benzina);
  printCars(dieselCars, diesel);
  printCars(otherCars, others);
  

  //funzione per stampare elenco macchine in html
  function printCars(array, target){
    array.forEach(element => {
      let {marca, modello, alimentazione} = element;
  
      let html = 
      `
      <li>Marca: ${marca}</li>
      <li>Modello: ${modello}</li>
      <li>Alimentazione: ${alimentazione}</li>
      `;
  
      target.append(html);
  
    });
  
  };
 

});


