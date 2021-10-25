/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
// RISPOSTA: Il primo console.log restituirà il valore della const PI. Lo stesso farà l'istruzione condizionale if,
// poiché const PI è maggiore di 3.

const PI = 3.14;

console.log(PI);

if (PI >= 3) {
  console.log(PI);
}


// Es. 2: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: il primo console.log stamperà "il mio colore preferito è: violet" e terrà conto della variabile favColour
// che si trova all'interno dell'istruzione condizionale, mentre la var favColour esterna alla funzione, anche se fosse
// diversa da quella interna alla funzione, non intaccherebbe il risultato finale. Il secondo console.log stamperà
// "Ci sono 12 mesi in un anno." : l'istruzione condizionale presente tra la variabile let monthsInAyear e l'ultimo
// console.log non influisce su ciò che verrà stampato.

var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Es. 3: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: il primo console.log stamperà "Sugo di pomodoro freschissimo," + cio che è assegnato a moreIngredients.
// Il secondo console.log, invece, restituirà un errore perchè la variabile theSecond ha uno scope locale e non esiste
// al di fuori della prima funzione. 


function makePizza(moreIngredients) {
  let theSecond = "Sugo di pomodoro freschissimo";
  // { ... }
  console.log(theSecond + ", " + moreIngredients);
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}

if (true) {
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  console.log("Il secondo ingrediente necessario: ", theSecond);
}
