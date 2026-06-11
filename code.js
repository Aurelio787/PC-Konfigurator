function startKonfigurator() {
  BauteilAuswahl.innerHTML = '<option value="">-- Bitte wählen --</option>';

  Object.keys(DB).forEach((kategorie) => {
    const option = document.createElement("option");
    
    option.value = kategorie;
    
    option.textContent = kategorie.charAt(0).toUpperCase() + kategorie.slice(1);
    
    BauteilAuswahl.appendChild(option);
  });

  console.log("Daten erfolgreich geladen. Anzahl Bauteile: " + 
              DB.cpus.length + " CPUs, " + 
              DB.motherboards.length + " Motherboards, " + 
              (DB.gpus ? DB.gpus.length : 0) + " GPUs.");
}