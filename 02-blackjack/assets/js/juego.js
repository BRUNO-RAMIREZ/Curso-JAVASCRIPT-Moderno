//Sintaxis de una funcion anonima autoejecutable
const miModulo = (() => {
  "use strict";
  /*
   * 2C = Two of Clubs
   * 2D = Two of diamonds
   * 2H = Two of Hearts
   * 2S = Two of Spades
   */

  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  /* let puntosJugador = 0,
    puntosComputadora = 0; */
  let puntosJugadores = [];

  //Referencias del HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const divCartasJugadores = document.querySelectorAll(".divCartas"),
    puntosHTML = document.querySelectorAll("small");

  //Esta funcion me permite inicializar el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    puntosJugadores = [];
    //El ultimo jugador es la computadora
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }
    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  //Esta funcion me permite crear una nueva baraja
  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }
    for (let tipo of tipos) {
      for (let esp of especiales) {
        deck.push(esp + tipo);
      }
    }
    return _.shuffle(deck);
  };

  //Esta funcion me permite tomar una carta
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    return deck.pop(); //Ultima carta de la baraja
  };

  /* const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  let puntos = 0;
  if (isNaN(valor)) {
    puntos = valor === "A" ? 11 : 10;
  } else {
    console.log("Es un numero");
    puntos = valor * 1; //Convirtiendo a numero el valor
  }
  console.log(puntos);
}; */

  //TODO: REDUCIR LA FUNCION VALOR CARTA LO MAS POSIBLE
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1; //Convirtiendo a numero el valor
  };

  //Turno: 0 = primer jugador y el ultimo sera la computadora
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] += valorCarta(carta);
    //TODO: Modificar los puntos del jugador en el HTML
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);
  };

  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("***EMPATE***");
      } else if (puntosMinimos > 21) {
        alert("***Computadora gana***");
      } else if (puntosComputadora > 21) {
        alert("***Jugador gana***");
      } else {
        alert("***Computadora gana***");
      }
    }, 10);
  };

  //Eventos
  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);
      if (puntosMinimos > 21) {
        break;
      }
    } while ((puntosComputadora < puntosMinimos) & (puntosMinimos <= 21));
    determinarGanador();
  };

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);
    /* puntosJugador += valorCarta(carta);
    console.log(puntosJugador);
    //TODO: Modificar los puntos del jugador en el HTML
    puntosHTML[0].innerText = puntosJugador; */
    /* const imgCarta = document.createElement("img");
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugador.append(imgCarta); */
    crearCarta(carta, 0);
    if (puntosJugador > 21) {
      console.warn("Lo siento mucho, perdiste");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
