/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* i principali datatype in JavaScript sono i seguenti:

    -1 string: il datatype string non è altro che un dato rappresentato come un testo. 
    -2 number: il datatype number è un dato numerico. Ad esempio, immagina una calcolatrice, all'interno di quest'ultima puoi inserire solo numeri e non testo.
    -3 undefined: il datatype undefined indica che una variabile/entità non è definita. Ad esempio io ti dico ho i capelli color ... e poi non ti dico niente. Questo appunto dice che non è definito. Come puoi immaginare è un errore perché a questo punto non avrei nemmeno pronunciato questa frase senza terminarla.
    -4 null: il datatype null invece indica che una variabile/entità è vuota sia di valore che tipo di valore. Tipo io prendo una borsa e non metto niente all'interno e lo dico. 
    -5 BigInt: \\
    -6 Symbol: \\


*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.

    Gli oggetti non sono altro che delle variabili/dati che descrivono le proprietà di un'entità.


 */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12
let num2 = 20
let somma = num1 + num2
console.log(somma)
document.getElementById('result1').innerHTML = somma




/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log(x)
document.getElementById('firstNumber').innerHTML = x
/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let namE = 'Emanuele'
console.log(namE)
document.getElementById('myName').innerHTML = namE

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let num3 = 4
let sottrazione = x - num3
console.log(sottrazione)
document.getElementById('result2').innerHTML = sottrazione

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john'
let name2 = 'John'
console.log(name1 !== name2)

document.getElementById('namej').innerHTML = name1
document.getElementById('nameJ').innerHTML = name2
console.log(name1.toLocaleLowerCase===name2.toLocaleLowerCase)
