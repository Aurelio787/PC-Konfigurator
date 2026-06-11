"use strict";

const BauteilAuswahl = document.getElementById("Bauteil");
const ModellAuswahl = document.getElementById("ModellAuswahl");

let DB; 

fetch('./Datenbank.json')
  .then((response) => response.json())
  .then((json) => {
    DB = json;
    startKonfigurator();
  })
  .catch((error) => console.error("Fehler beim Laden der JSON:", error));

function startKonfigurator() {
  BauteilAuswahl.innerHTML = '<option value="">-- Kategorie wählen --</option>';
  if (ModellAuswahl) {
    ModellAuswahl.innerHTML = '<option value="">-- Bitte zuerst Kategorie wählen --</option>';
  }

  Object.keys(DB).forEach((kategorie) => {
    const option = document.createElement("option");
    option.value = kategorie; 
    
    option.textContent = kategorie.charAt(0).toUpperCase() + kategorie.slice(1);
    
    BauteilAuswahl.appendChild(option);
  });
}

BauteilAuswahl.addEventListener("change", function() {
  const gewaehlteKategorie = BauteilAuswahl.value;

  ModellAuswahl.innerHTML = '<option value="">-- Modell wählen --</option>';

  if (!gewaehlteKategorie) return;

  const produkte = DB[gewaehlteKategorie];

  if (produkte && produkte.length > 0) {
    produkte.forEach((item) => {
      const option = document.createElement("option");
      
      option.value = item.id; 
      
      option.textContent = `${item.name} (${item.price})`;
      
      ModellAuswahl.appendChild(option);
    });
  } else {
    ModellAuswahl.innerHTML = '<option value="">Keine Einträge gefunden</option>';
  }
});

const startButton = document.getElementById("StartButton");
const anzeigeDiv = document.getElementById("AusgewaehlterInhalt");

startButton.addEventListener("click", function() {
  const gewaehltesModellId = ModellAuswahl.value;
  const gewaehlterText = ModellAuswahl.options[ModellAuswahl.selectedIndex]?.text;

  if (!gewaehltesModellId) {
    anzeigeDiv.textContent = "Bitte wähle zuerst ein konkretes Modell aus!";
    return;
  }

  anzeigeDiv.textContent = "Du hast ausgewählt: " + gewaehlterText + " (ID: " + gewaehltesModellId + ")";
});