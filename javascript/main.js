const prezzoBiglietto = document.getElementById("prezzo-biglietto");

const utenteKm = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(utenteKm);

const utenteEtà = parseInt(prompt("Quanti anni hai?"));
console.log(utenteEtà);

const result = utenteKm * 0.21;
console.log(result);

if (utenteEtà <= 18) {
    const discountPerc= 20;

    const discount = result * discountPerc / 100;
    console.log(discount);

    const finalPrice = result - discount;
    console.log(finalPrice);

    prezzoBiglietto.innerText = "Il prezzo del tuo biglietto è " + finalPrice;
} else (utenteEtà >= 65) 
{
    const discountPerc= 40;

    const discount = result * discountPerc / 100;
    console.log(discount);

    const finalPrice = result - discount;
    console.log(finalPrice);

    prezzoBiglietto.innerText = "Il prezzo del tuo biglietto è " + finalPrice;
}
    



