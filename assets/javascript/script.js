/*=======================================================
Copyright (c) 2024. Alejandro Alberto Jiménez Brundin
=======================================================*/

let creditos = 0;

function insertarMonedas() {
  creditos++;
  document.getElementById("cuentaCreditos").innerHTML = creditos + "<span style='color: red; font-size: smaller;'> +1 </span>";
  document.getElementById("mensaje").innerHTML = "Has añadido 1 crédito.";
}

function rand(n) {
  return Math.floor(Math.random() * n);
}

function tirar() {
  if (creditos === 0) {
    document.getElementById("mensaje").innerHTML = "No tienes créditos.";
    return;
  }

  let cambia_imagen = [
    "./assets/img/fresa.png",
    "./assets/img/naranja.png",
    "./assets/img/uvas.png"
  ];

  let tiempo = 0;
  let interval1 = setInterval(() => {
    let slot1 = rand(3);
    document.getElementById("slot1").innerHTML =
      '<img src="' + cambia_imagen[slot1] + '">';
    tiempo++;
    if (tiempo === 50) {
      clearInterval(interval1);
      let interval2 = setInterval(() => {
        let slot2 = rand(3);
        document.getElementById("slot2").innerHTML =
          '<img src="' + cambia_imagen[slot2] + '">';
        tiempo++;
        if (tiempo === 100) {
          clearInterval(interval2);
          let interval3 = setInterval(() => {
            let slot3 = rand(3);
            document.getElementById("slot3").innerHTML =
              '<img src="' + cambia_imagen[slot3] + '">';
            tiempo++;
            if (tiempo === 150) {
              clearInterval(interval3);
              verificarResultados(slot1, slot2, slot3);
            }
          }, 25);
        }
      }, 25);
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