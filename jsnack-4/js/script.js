$(function(){
  //Funzioni
  //funzione che genera numeri random
  const getNumRandom = (max) => Math.floor(Math.random() * max);

  //funzione per generare codice giocatore
  const getCodeRandom = () => {
    const code = [];
    const lettere = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    for (let i = 0; i < 3; i++) {
      code.push(lettere.charAt(Math.floor(Math.random() * lettere.length)));
    };
    for (let i = 0; i < 3; i++) {
      code.push(Math.floor(Math.random() * 10));
    };
    return code.join(' ');
  };

  //funzione per generare oggetti giocatori
  const getGiocatore = (limit) => {
    for(let i = 0; i < limit; i++){
      const giocatore = {
        codice: getCodeRandom(),
        media: getNumRandom(50),
        percentuale: getNumRandom(100)
      }
      arrSquadra.push(giocatore);
    };
  };

  //creo array vuoto dove verranno pushati i giocatori
  let arrSquadra = [];

  getGiocatore(5);
  console.log(arrSquadra);

  


  


  

  

  



  
  



});