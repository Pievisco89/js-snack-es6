$(function(){

  //funzione per mischiare array
  const totale = (arr1, arr2, arrTot) => {

    for(let i = 0; i < arr1.length; i++){
      arrTot.push(arr1[i]);
      arrTot.push(arr2[i]);
    }

  };
  
  //creo varia dei 2 array con elementi e array vuoto da riempire con push
  const arrLettere = [ "a", "b", "c"]
  const arrNumeri = [ 1, 2, 3]
  const arrNuovo = [];

  totale(arrLettere, arrNumeri, arrNuovo);

  console.log(arrNuovo);

});