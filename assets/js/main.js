let deineGroesse = document.getElementById('deineGroesse');
let deinAlter = document.getElementById('deinAlter');
let deinGewicht = document.getElementById('deinGewicht');
let weiblich = document.getElementById('weiblich');
let maennlich = document.getElementById('maennlich');
let activi = document.getElementById('activi');
let grundKcal = document.getElementById('grundKcal');
let grundKj = document.getElementById('grundKj');
let gesamtKcal = document.getElementById('gesamtKcal');
let gesamtKj = document.getElementById('gesamtKj');
let kalorien;
function calc() {
     let kalorien;
     if (weiblich.checked == true) {
          kalorien =
               655.1 +
               9.6 * deinGewicht.value +
               1.8 * deineGroesse.value +
               4.7 * deinAlter.value;
          grundKcal.innerHTML = kalorien.toFixed();
          grundKj.innerHTML = (kalorien * 4.187).toFixed();
     } else {
          kalorien =
               664.7 +
               13.7 * deinGewicht.value +
               5 * deineGroesse.value +
               6.8 * deinAlter.value;
          grundKcal.innerHTML = kalorien.toFixed();
          grundKj.innerHTML = (kalorien * 4.187).toFixed();
     }
     console.log(grundKcal);
     if (activi.value == 'schlafen') {
          gesamtKcal.innerHTML = (grundKcal.innerHTML * 0.95).toFixed();
          gesamtKj.innerHTML = (grundKj.innerHTML * 0.95).toFixed();
     }
     if (activi.value == 'sitzen-liegen') {
          gesamtKcal.innerHTML = (grundKcal.innerHTML * 1.2).toFixed();
          gesamtKj.innerHTML = (grundKj.innerHTML * 1.2).toFixed();
     }
     if (activi.value == 'bueroarbeit') {
          gesamtKcal.innerHTML = (grundKcal.innerHTML * 1.5).toFixed();
          gesamtKj.innerHTML = (grundKj.innerHTML * 1.5).toFixed();
     }
     if (activi.value == 'studierende') {
          gesamtKcal.innerHTML = (grundKcal.innerHTML * 1.7).toFixed();
          gesamtKj.innerHTML = (grundKj.innerHTML * 1.7).toFixed();
     }
     if (activi.value == 'handwaerker') {
          gesamtKcal.innerHTML = (grundKcal.innerHTML * 1.9).toFixed();
          gesamtKj.innerHTML = (grundKj.innerHTML * 1.9).toFixed();
     }
     if (activi.value == 'sportlich') {
          gesamtKcal.innerHTML = (grundKcal.innerHTML * 2.2).toFixed();
          gesamtKj.innerHTML = (grundKj.innerHTML * 2.2).toFixed();
     }
}

// Aufgabenstellung

// Heute werden wir einen Kalorienrechner programmieren.
// Zuerst müssen wir den Grundumsatz berechnen. Der Grundumsatz wird anhand der Harris Benedict Formel berechnet.
// Grundumsatz bei Männern (Kalorien je Tag)
// 664,7 + (13,7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6,8 * Alter in Jahren) = Grundumsatz
// Grundumsatz bei Frauen (Kalorien je Tag)
// 655,1 + (9,6 * Körpergewicht in kg) + (1,8 * Körpergröße in cm) – (4,7 * Alter in Jahren) = Grundumsatz

// ! Das Ergebnis wird in Kilokalorien ausgegeben.
