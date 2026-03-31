//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma.

const parolaInserita = prompt('inserisci una parola');
let parolaPalindroma = ''

function verificaPalindromo(parolaDaVerificare) {
    for (let i = parolaDaVerificare.length - 1; i >= 0; i--) {
        parolaPalindroma += parolaDaVerificare[i]
    }
    if (parolaDaVerificare === parolaPalindroma) {
        console.log('la parolaInserita è palindroma')
    } else {
        console.log('la parola inserita non è palindroma')
    }
}
verificaPalindromo(parolaInserita);
