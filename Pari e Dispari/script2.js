//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

const sceltaUtente = prompt('scegli pari o dispari')
const numeroUtente = prompt('inserisci un numero da 1 a 5')


const numeroCasualeComputer = generatoreNumeroRandom()

const totaleNumeri = sommaNumeri(numeroCasualeComputer, numeroUtente)

totaleSommaNumeri(totaleNumeri, sceltaUtente)




function totaleSommaNumeri(somma, scelta) {
    const vittoriaPari = somma % 2 == 0 && scelta == 'pari'
    const vittoriaDispari = somma % 2 !== 0 && scelta == 'dispari'

    if (vittoriaPari || vittoriaDispari) {
        console.log('hai vinto')
    } else {
        console.log('hai perso')
    }

}


function generatoreNumeroRandom() {
    const numeroCasuale = (Math.floor(Math.random) * 5)
    return numeroCasuale

}
function sommaNumeri(num1, num2) {
    return num1 + num2

}