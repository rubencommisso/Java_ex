/* let banana = 10;
const pera = 20;

console.log(banana)
console.log(pera) */

/* let number = 5
{let number = 6; 
    console.log(number)
} console.log(number)

let giacomo = 9

console.log(giacomo)

giacomo = 10

console.log(giacomo)

/* let outside = 3

{ let inside = 2;
    console.log(outside)
    console.log(inside)
} console.log(outside)
    console.log(inside) */

/* for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }   

let numero = 10;

    while (numero > 0) {
        if (numero % 2 !== 0) {
            console.log(numero);
        }
        numero--;
    } */

/* let word = prompt("Inserisci una parola");
console.log(word.length); */

/* let word;

do {
    word = prompt("Inserisci una parola di almeno 5 caratteri:");
} while (word.length < 5);

console.log("Hai inserito la parola: " + word); */

/* let number = 10

if (number > 5) {
    console.log ("La variabile è maggiore di 5");
} else {
    console.log ("la variabile è minore di 5");
} */

   /*  let input = prompt("Inserisci il tuo punteggio:");

    let score = parseInt(input, 10);

    if (isNaN(score)) {
        console.log("L'input inserito non è un numero valido.");
    } else {
        switch (true) {
            case (score >= 90 && score <= 100):
                console.log("voto ottimo");
                break;
            case (score >= 70 && score <= 89):
                console.log("voto buono");
                break;
            case (score >= 60 && score <= 69):
                console.log("voto sufficiente");
                break;
            case (score <= 59):
                console.log("voto insufficiente");
                break;
            default:
                console.log("Il punteggio inserito non è valido.");
                break;
        }
    } */

/* let lista = [1,2,3,4,5];
console.log(lista)

let somma = 0

for (let i=0; i < lista.length; i++)  {
    somma += lista[i]
} 

console.log(somma)


let reverse = []

for (let i=lista.length -1; i>=0; i--) {
    reverse.push(lista[i])
} 

console.log(reverse) */



/* let parole = [];


for (let i = 0; i < 5; i++) {
    let parola = prompt("Inserisci una parola:");
    parole.push(parola);
}


for (let i = 0; i < parole.length; i++) {
    if (parole[i].length % 2 !== 0) {
        console.log(parole[i]);
    }
} */

let person = {
    name : "Carlo",
    age : 14,
    city: "Torino",
};

console.log(person.age)