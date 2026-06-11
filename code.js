"use strict";
const BauteilAuswahl = document.getElementById("Bauteil");

let objectCountcpu;
let objectCountmotherboard;
let objectCountgpu;
let objectCountPowersuply;
let objectCountcases;
let DB; 

console.log(BauteilAuswahl);


fetch('./Datenbank.json')
  .then((response) => response.json())
  .then((json) => {
    DB = json;
    objectCountcpu = json.cpus;
    objectCountmotherboard = json.motherboards;
    objectCountgpu = json.gpus;
    objectCountPowersuply = json.powersupplies;
    objectCountcases = json.cases;

    startKonfigurator();
  });

function startKonfigurator() {
  // 1. Dropdown leeren, falls nötig
  BauteilAuswahl.innerHTML = '<option value="">-- Bitte wählen --</option>';

  // 2. Über die "cases" iterieren und Optionen erstellen
  DB.cases.forEach((item) => {
    const option = document.createElement("option");
    
    // Hier musst du die Keys eventuell an dein JSON anpassen (z.B. item.id oder item.name)
    option.value = item.Type || item.Type;
    option.textContent = item.Type || item.Type;
    
    BauteilAuswahl.appendChild(option);
  });

  console.log("Daten erfolgreich geladen. Anzahl Bauteile:", objectCount);
}

// Diese Meldungen kommen aktuell sofort, da fetch asynchron arbeitet
console.log("Warten auf Daten..."); 

