const prezzoBiglietto = document.getElementById("prezzo-biglietto");

const utenteKm = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(utenteKm);

const utenteEtà = parseInt(prompt("Quanti anni hai?"));
console.log(utenteEtà);

const result = utenteKm * 0.21;
console.log(result);

prezzoBiglietto.innerText = "Il prezzo del tuo biglietto è " + result;

