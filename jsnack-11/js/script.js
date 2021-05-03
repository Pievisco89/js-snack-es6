$(function(){

  /* Esercizio (oggetti, array, forEach con splice oppure filter)
  Un oggetto rappresenta una finestra di un browser e contiene due campi: 
  un array di tab aperte
  un numero che indica l’indice della tab aperta nell’array:
  {
    “tab”: [“Facebook”, “GitHub”, “Gmail”],
    “activeTab”: 0
  }
  Il software deve guardare se c’è un social aperto ed eliminarlo dalle tab.
  Nel caso la tab fosse attiva, deve attivare la successiva. */

  let finestreBrowser = {
    tabs: ['Facebook', 'GitHub', 'Gmail', 'IlPost', 'GoogleDrive'],
    activeTab: 0
  };

  //array con tab social da chiudere
  const finestreSocial = ['Instagram', 'Twitter', 'Facebook', 'TikTok', 'Pinterest'];

  //destrutturo finestreBrowser per poi utilizzare filter su tabs 
  let {tabs, activeTab} = finestreBrowser;

  //creo il nuovo array senza le finestre social che devono essere chiuse
  let filtroTabs = tabs.filter((tab) => {
    
    if(!finestreSocial.includes(tab)){
      return true;
    } else {
      return false;
    }

  });

  console.log(filtroTabs);

  //cambio la proprietà tabs in filtroTabs
  finestreBrowser = {
    filtroTabs,
    activeTab: 0
  };

  console.log(finestreBrowser);


});
