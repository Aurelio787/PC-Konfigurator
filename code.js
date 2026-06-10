"use strict";

const BauteilAuswahl = document.getElementbyid("Bauteil");
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
                                console.log("Bitte Bauteil auswählen.");
                                alert("Bitte Bauteil auswählen.");
                              


