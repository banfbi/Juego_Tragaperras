/*=======================================================
Copyright (c) 2024. Alejandro Alberto Jiménez Brundin
=======================================================*/

let creditos = 0;

function insertarMonedas() {
  creditos++;
  document.getElementById("cuentaCreditos").innerHTML = creditos;
}

function rand(n) {
  return Math.floor(Math.random() * n);
}

function tirar() {
  if (creditos === 0) {
    document.getElementById("mensaje").innerHTML = "No tienes monedas.";
    return;
  }

  let cambia_imagen = [
    "./assets/img/fresa.png",
    "./assets/img/naranja.png",
    "./assets/img/uvas.png"
  ];

  let tiempo = 0;
  let interval = setInterval(() => {
    let slot1 = rand(3);
    let slot2 = rand(3);
    let slot3 = rand(3);

    document.getElementById("slot1").innerHTML =
      '<img src="' + cambia_imagen[slot1] + '">';
    document.getElementById("slot2").innerHTML =
      '<img src="' + cambia_imagen[slot2] + '">';
    document.getElementById("slot3").innerHTML =
      '<img src="' + cambia_imagen[slot3] + '">';

    tiempo++;
    if (tiempo === 50) {
      clearInterval(interval);
      verificarResultados(slot1, slot2, slot3);
    }
  }, 25);
}

function verificarResultados(slot1, slot2, slot3) {
  if (slot1 === slot2 && slot2 === slot3) {
    document.getElementById("mensaje").innerHTML =
      "¡Felicidades! Has ganado. :) Tienes: " + creditos + " monedas";
    creditos = creditos + 10;
  } else {
    document.getElementById("mensaje").innerHTML =
      "Has perdido. :( Tienes: " + creditos + " monedas";
    creditos--;
  }
  document.getElementById("cuentaCreditos").innerHTML = creditos;
}

/*=======================================================
Copyright (c) 2024. Alejandro Alberto Jiménez Brundin
=======================================================*/