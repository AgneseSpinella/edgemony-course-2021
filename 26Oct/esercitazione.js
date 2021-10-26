/* 
    Sulla base di quanto detto a lezione, creare una calcolatrice capace di svolgere diverse operazioni
    (più ne mettete meglio è!).
    La scelta dell'operazione da effettuare (per esempio somma)
    e la scelta dei numeri, deve essere specificata dell'utente.
    A tal fine, potrete utilizzare la funzione 'prompt()' per catturarne i dati.
    
    ATTENZIONE:
    L'utilizzo delle callbacks, delle arrow function e dello spread operator
    sono elementi fondamentali di questa esercitazione, mi raccomando.

    Potete chiaramete controllare il codice scritto a lezione, ma cercate di non copiare.
*/

/* Esercizio avanzato:
    Oltre alle classici funzioni somma, moltiplicazione, ecc... provate ad implementare
    l'operazione potenza e l'operazione radice quadrata.
    SUGGERIMENTO: esistono delle funzioni della libreria Math (vista a lezione).
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

const sum = (numOne, numTwo) => numOne + numTwo;
const subt = (numOne, numTwo) => numOne - numTwo;
const mult = (numOne, numTwo) => numOne * numTwo;
const divis = (numOne, numTwo) => numOne / numTwo;
const pow = (numOne, numTwo) => numOne ** numTwo;
const rad = (numOne) => Math.sqrt(numOne);
const pattern = new RegExp(/^\D/)

function calculator(operation, numbers) {
    let total= 0;
    total = operation(...numbers);
    return total;
}

let chosenOperation = prompt ("Scegli l'operazione che vuoi effettuare:\n -somma\n -sottrazione\n -moltiplicazione\n -divisione\n -Potenza\n -Radice quadrata")
let chosenNumbers = prompt ("Scrivi i due numeri (separati da una virgola) tra cui vuoi effettuare l'operazione. Se hai scelto la radice quadrata, scrivi un solo numero")
const numbers= chosenNumbers.split(',');
const array = [];

for (n of numbers) {
    if (pattern.test(n)) {
        alert("Hai inserito un carattere non numerico")
        break
    } else {
        array.push(parseInt(n));
    }
}

//possibili errori
if (array.length == 1 && chosenOperation !== "radice") {
    console.log(array[0]);
} else if (array.length > 2) {
    alert("Hai inserito troppi numeri. L'operazione verrà eseguita soltanto tra i primi due numeri")
}
    

switch (chosenOperation.toLowerCase()) {
    case "somma":
        calculator(sum, array);
        break;
    case "moltiplicazione":
        calculator(mult, array);
        break;
    case "sottrazione":
        calculator(subt, array);
        break;
    case "divisone":
        calculator(divis, array);
        break;
    case "potenza":
        calculator(pow, array);
        break;
    case "radice quadrata":
        calculator(rad, array);
        break
    default:
        alert("Non hai inserito i valori correttamente. Riprova!")
}