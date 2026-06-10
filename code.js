let objectCount;
let DB; // Hier speichern wir die ganze Datenbank ab

fetch('./jsonData.json')
  .then((response) => response.json())
    .then((json) => {
        // 1. Daten zuweisen
            DB = json;
                objectCount = json.cases.length;
                    
                        // 2. Erst JETZT, wo alles da ist, starten wir den Konfigurator!
                            startKonfigurator();
                              });

                              function startKonfigurator() {
                                console.log("Konfigurator startet mit " + objectCount + " Gehäusen.");
                                  // Hier kommt dein Code rein, der die Gehäuse auf der Webseite anzeigt
                                    console.log(DB.cases); 
                                    }

                                    