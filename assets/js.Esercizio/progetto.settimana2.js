/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("Risoluzione Esercizio 1")

const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let i = 0; i < pets.length; i++) {
    const element = pets[i]
    console.log(element);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".

*/
console.log("Risoluzione Esercizio 2")

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("Risoluzione Esercizio 3")

pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("Risoluzione Esercizio 4")

const changePet = pets.shift();
pets.push(changePet);
console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("Risoluzione Esercizio 5")

const cars = [
    {
        brand: 'Ford',
        model: 'Fiesta',
        color: 'red',
        trims: ['titanium', 'st', 'active'],
    },
    {
        brand: 'Peugeot',
        model: '208',
        color: 'blue',
        trims: ['allure', 'GT'],
    },
    {
        brand: 'Volkswagen',
        model: 'Polo',
        color: 'black',
        trims: ['life', 'style', 'r-line'],
    },
]

cars.forEach(cars => {
    cars.plate = "FS 123 CTS";
});

console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("Risoluzione Esercizio 6")

cars.push({
    brand: 'Jeep',
    model: 'Cheerokee',
    color: 'dark-grey',
    trims: ['cross', 'over', 'sport'],
});

cars.forEach(cars => {
    cars.trims.pop();
});

console.log(cars)


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []



/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("Risoluzione Esercizio 10")

const charactersArray = ['g', 'n', 'u', 'z', 'd']
const charactersToNumber = []


charactersArray.forEach(charactersArray => {
    let toNumber;
    switch (charactersArray) {
        case 'a': toNumber = 1;
            break;
        case 'b': toNumber = 2;
            break;
        case 'c': toNumber = 3;
            break;
        case 'd': toNumber = 4;
            break;
        case 'e': toNumber = 5;
            break;
        case 'f': toNumber = 6;
            break;
        case 'g': toNumber = 7;
            break;
        case 'h': toNumber = 9;
            break;
        case 'j': toNumber = 10;
            break;
        case 'k': toNumber = 11;
            break;
        case 'l': toNumber = 12;
            break;
        case 'm': toNumber = 13;
            break;
        case 'n': toNumber = 14;
            break;
        case 'o': toNumber = 15;
            break;
        case 'p': toNumber = 16;
            break;
        case 'q': toNumber = 17;
            break;
        case 'r': toNumber = 18;
            break;
        case 's': toNumber = 19;
            break;
        case 't': toNumber = 20;
            break;
        case 'u': toNumber = 21;
            break;
        case 'v': toNumber = 22;
            break;
        case 'w': toNumber = 23;
            break;
        case 'x': toNumber = 24;
            break;
        case 'y': toNumber = 25;
            break;
        case 'z': toNumber = 26;
            break;
        default: toNumber = -1;
    }

    charactersToNumber.push(toNumber)
})

console.log(charactersToNumber)