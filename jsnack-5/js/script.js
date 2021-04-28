$(function(){
  
  /* funzione con parametri array, numero a e numero b. numero a < numero b e numero b <= array.length
  mi ritorna il nuovo array con elementi compresi tra a e b */
  const getArray = (arr, a, b) => {
    const newArray = [];

    if(a < b && b <= arr.length){
    
      for(let i = a; i < (b - 1); i++){

        newArray.push(arr[i])

      }

    }else{

      alert('Errore inserimento numeri a e b');

    };

    return newArray;

  };

  //creare un array con elementi a caso
  let array = ["pietro", "giovanni", "francesco", "maria", "michele", "marco", "carlo", "giacomo", "paolo", "aldo", "lorenzo", "filippo", "stefano", "giuseppe"]

  let a = 4;
  let b = 10;

  let nuovoArray = getArray(array, a, b);

  console.log(nuovoArray)

});