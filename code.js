let objectCount;
let DB; 

fetch('./jsonData.json')
  .then((response) => response.json())
    .then((json) => {
        //Daten zuweisen
            DB = json;
                objectCount = json.cases.length;
                    
                        //KonfiguratorEngine
                            startKonfigurator();
                              });

                              function startKonfigurator() {
                                console.log("Konfigurator startet mit " + objectCount + " Gehäusen.");
                                  //Code um Gehäusen an zu zeigen
                                    console.log(DB.cases); 
                                    }

                                    