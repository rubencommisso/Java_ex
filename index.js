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

/* let person = {
    name : "Carlo",
    age : 14,
    city : "Torino",
    job : "briklayer",
};

person.age = 50; */

/* console.log(person.job) */
/* 
for (let property in person) {
    console.log(`${property}: ${person[property]}`);
} */

/*     function outerFunction(x) {
        
        function innerFunction(y) {
            return x + y; 
        }
        return innerFunction; 
    }
    
    const addWith5 = outerFunction(5); 
    console.log(addWith5(3)); 
    console.log(addWith5(10));   */ 

/*     function outerFunction(x, initialValue) {

        let result = initialValue;
    
        function innerFunction(y) {
            result += y; 
            return result; 
        }
    
        return innerFunction; 
    }
    
    
    const adder = outerFunction(5, 10);
    console.log(adder(3)); 
    console.log(adder(7)); 
    console.log(adder(-5)); */


   /*  function createCounter() {

        let count = 0;
    
        
        return {
            increment: function () {
                count += 1; 
                return count; 
            },
            decrement: function () {
                count -= 1; 
                return count; 
            }
        };
    }
    
    
    const counter = createCounter();
    console.log(counter.increment()); 
    console.log(counter.increment()); 
    console.log(counter.decrement()); 
    console.log(counter.decrement()); */



/*  let student = {
    name: "Luca",
    age: 16,
    class: "5th",
    school: "Liceo Scientifico"
}; */

/* let keys = Object.keys(student); */

/* let values = Object.values(student); */

/* let entries = Object.entries(student)

console.log(entries);

entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
}); */


/* let numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    console.log(number * 2);
});

let squaredNumbers = numbers.map(number => number ** 2);

console.log(squaredNumbers); */



/* let students = [
    { name: "Luca", grade: 75 },
    { name: "Marco", grade: 45 },
    { name: "Giulia", grade: 85 },
    { name: "Sofia", grade: 55 },
    { name: "Elena", grade: 60 }
];

let passedStudents = students.filter(student => student.grade >= 60);

let firstFailedStudent = students.find(student => student.grade < 60);

console.log("Passed Students:", passedStudents);

console.log("First Failed Student:", firstFailedStudent); */


/* let expenses = [100, 200, 50, 400, 75];

let totalExpenses = expenses.reduce((total, expense) => total + expense, 0);

let words = ["banana", "apple", "cherry", "date"];

let sortedWords = words.sort();

console.log("Total Expenses:", totalExpenses);

console.log("Sorted Words:", sortedWords);
 */



/* class Automobile {
    
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio; 
    }

    descrizione() {
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }

    mostraChilometraggio() {
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }
}

const auto = new Automobile("Fiat", "500", 2020);

console.log(auto.descrizione()); 

console.log(auto.mostraChilometraggio()); 

auto.aggiungiChilometri(150);
console.log(auto.mostraChilometraggio()); 

auto.aggiungiChilometri(50);
console.log(auto.mostraChilometraggio()); 

auto.aggiungiChilometri(-10);  */



/* class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione() {
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }

    mostraChilometraggio() {
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }
}


class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio = 0, autonomia = 0) {
        super(marca, modello, anno, chilometraggio); 
        this.autonomia = autonomia; 
    }

   
    descrizione() {
        return `Questa automobile elettrica è una ${this.marca} ${this.modello} del ${this.anno} con un'autonomia di ${this.autonomia} km.`;
    }

    
    ricarica(km) {
        if (km > 0) {
            this.autonomia += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di autonomia.");
        }
    }
}


const autoElettrica = new Elettrica("Tesla", "Model 3", 2021, 20000, 400);

console.log(autoElettrica.descrizione()); 

console.log(autoElettrica.mostraChilometraggio()); 

autoElettrica.aggiungiChilometri(150);
console.log(autoElettrica.mostraChilometraggio()); 

autoElettrica.ricarica(50);
console.log(autoElettrica.descrizione());  */


/* class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione() {
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }

    mostraChilometraggio() {
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }
}

Automobile.prototype.saluta = function() {
    return `Ciao! Sono una ${this.marca} ${this.modello}.`;
};

class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio = 0, autonomia = 0) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }

    descrizione() {
        return `Questa automobile elettrica è una ${this.marca} ${this.modello} del ${this.anno} con un'autonomia di ${this.autonomia} km.`;
    }

    ricarica(km) {
        if (km > 0) {
            this.autonomia += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di autonomia.");
        }
    }
}

const auto = new Automobile("Fiat", "500", 2020);
const autoElettrica = new Elettrica("Tesla", "Model 3", 2021, 20000, 400);

console.log(auto.saluta()); 

console.log(autoElettrica.saluta());  */


/* class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione() {
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }

    mostraChilometraggio() {
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }


    #calcolaEtà() {
        const annoCorrente = new Date().getFullYear();
        return annoCorrente - this.anno;
    }

    
    mostraEtà() {
        const età = this.#calcolaEtà();
        return `L'automobile ha ${età} anni.`;
    }
}


const auto = new Automobile("Fiat", "500", 2015);


console.log(auto.descrizione()); 


console.log(auto.mostraChilometraggio());


console.log(auto.mostraEtà());  */

/* 
class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione() {
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }

    mostraChilometraggio() {
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }

   
    _controllaChilometri() {
        const limite = 100000;
        if (this.chilometraggio > limite) {
            return `Attenzione: il chilometraggio ha superato il limite di ${limite} km!`;
        }
        return "Il chilometraggio è entro i limiti.";
    }
}


class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio = 0, autonomia = 0) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }

    descrizione() {
        return `Questa automobile elettrica è una ${this.marca} ${this.modello} del ${this.anno} con un'autonomia di ${this.autonomia} km.`;
    }

    ricarica(km) {
        if (km > 0) {
            this.autonomia += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di autonomia.");
        }
    }

    
    verificaChilometraggio() {
        return this._controllaChilometri();
    }
}


const autoElettrica = new Elettrica("Tesla", "Model 3", 2021, 120000, 400);


console.log(autoElettrica.descrizione()); 


console.log(autoElettrica.mostraChilometraggio()); 


console.log(autoElettrica.verificaChilometraggio());  */


/* 
class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione() {
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }

    mostraChilometraggio() {
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }

    
    _controllaChilometri() {
        const limite = 100000;
        if (this.chilometraggio > limite) {
            return `Attenzione: il chilometraggio ha superato il limite di ${limite} km!`;
        }
        return "Il chilometraggio è entro i limiti.";
    }

    
    static confrontaChilometraggio(auto1, auto2) {
        if (auto1.chilometraggio > auto2.chilometraggio) {
            return `${auto1.marca} ${auto1.modello} ha un chilometraggio maggiore (${auto1.chilometraggio} km) rispetto a ${auto2.marca} ${auto2.modello} (${auto2.chilometraggio} km).`;
        } else if (auto1.chilometraggio < auto2.chilometraggio) {
            return `${auto2.marca} ${auto2.modello} ha un chilometraggio maggiore (${auto2.chilometraggio} km) rispetto a ${auto1.marca} ${auto1.modello} (${auto1.chilometraggio} km).`;
        } else {
            return `${auto1.marca} ${auto1.modello} e ${auto2.marca} ${auto2.modello} hanno lo stesso chilometraggio (${auto1.chilometraggio} km).`;
        }
    }
}


const auto1 = new Automobile("Fiat", "500", 2018, 75000);
const auto2 = new Automobile("Toyota", "Corolla", 2020, 85000);


console.log(auto1.descrizione()); 
console.log(auto2.descrizione()); 


console.log(auto1.mostraChilometraggio()); 
console.log(auto2.mostraChilometraggio()); 


console.log(Automobile.confrontaChilometraggio(auto1, auto2)); */



/* class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
        this.#contatoreChiamate = 0;
    }

    
    #contatoreChiamate;

    
    incrementaContatore() {
        this.#contatoreChiamate++;
        console.log(`Il metodo è stato chiamato ${this.#contatoreChiamate} volta(i).`);
    }

    
    descrizione() {
        this.incrementaContatore(); 
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }


    aggiungiChilometri(km) {
        this.incrementaContatore(); 
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }


    mostraChilometraggio() {
        this.incrementaContatore(); 
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }
}


const auto = new Automobile("Fiat", "500", 2020, 50000);


console.log(auto.descrizione()); 
console.log(auto.mostraChilometraggio()); 
auto.aggiungiChilometri(1000); 
console.log(auto.mostraChilometraggio());  */


/* 
class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
        this.#contatoreChiamate = 0; 
    }

    #contatoreChiamate;

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    mostraContatore() {
        return `Il contatore delle chiamate è: ${this.#contatoreChiamate}`;
    }

   
    descrizione() {
        this.#incrementaContatore(); 
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }


    aggiungiChilometri(km) {
        this.#incrementaContatore(); 
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }


    mostraChilometraggio() {
        this.#incrementaContatore(); 
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }
}

const auto = new Automobile("Fiat", "500", 2020, 50000);

console.log(auto.descrizione()); 
console.log(auto.mostraChilometraggio()); 
auto.aggiungiChilometri(1000); 
console.log(auto.mostraChilometraggio()); 


console.log(auto.mostraContatore());  */


/* class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
        this.#contatoreChiamate = 0;
    }

    #contatoreChiamate;

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    mostraContatore() {
        return `Il contatore delle chiamate è: ${this.#contatoreChiamate}`;
    }

    descrizione() {
        this.#incrementaContatore(); 
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

    aggiungiChilometri(km) {
        this.#incrementaContatore(); 
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }

    mostraChilometraggio() {
        this.#incrementaContatore(); 
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }
}

const auto = new Automobile("Fiat", "500", 2020, 50000);

console.log(auto.descrizione()); 
console.log(auto.mostraChilometraggio()); 
auto.aggiungiChilometri(1000); 
console.log(auto.mostraChilometraggio()); 

console.log(auto.mostraContatore());  */


/* 
class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
        this.#contatoreChiamate = 0; 
        this.#contatoreAggiungiChilometri = 0; 
    }

    
    #contatoreChiamate;

    
    #contatoreAggiungiChilometri;

    
    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

   
    mostraContatore() {
        return `Il contatore delle chiamate è: ${this.#contatoreChiamate}`;
    }

    
    mostraContatoreChiamate() {
        return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreAggiungiChilometri} volte.`;
    }

    
    descrizione() {
        this.#incrementaContatore(); 
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

    aggiungiChilometri(km) {
        this.#incrementaContatore(); 
        this.#contatoreAggiungiChilometri++; 
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }

  
    mostraChilometraggio() {
        this.#incrementaContatore(); 
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }
}

const auto = new Automobile("Fiat", "500", 2020, 50000);

console.log(auto.descrizione()); 
console.log(auto.mostraChilometraggio()); 
auto.aggiungiChilometri(1000); 
auto.aggiungiChilometri(500); 
console.log(auto.mostraChilometraggio()); 

console.log(auto.mostraContatore()); 

console.log(auto.mostraContatoreChiamate());  */



/* class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
        this.#contatoreChiamate = 0; 
        this.#contatoreAggiungiChilometri = 0; 
    }

    #contatoreChiamate;

    #contatoreAggiungiChilometri;

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    mostraContatore() {
        return `Il contatore delle chiamate è: ${this.#contatoreChiamate}`;
    }

    mostraContatoreChiamate() {
        return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreAggiungiChilometri} volte.`;
    }

    descrizione() {
        this.#incrementaContatore(); 
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

    aggiungiChilometri(km) {
        this.#incrementaContatore(); 
        this.#contatoreAggiungiChilometri++; 
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }

    get chilometraggioAttuale() {
        return this.chilometraggio;
    }

    mostraChilometraggio() {
        this.#incrementaContatore(); 
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }
}

const auto = new Automobile("Fiat", "500", 2020, 50000);

console.log(auto.descrizione()); 
console.log(auto.mostraChilometraggio()); 
auto.aggiungiChilometri(1000); 
auto.aggiungiChilometri(500); 
console.log(auto.mostraChilometraggio()); 

console.log(auto.mostraContatore()); 


console.log(auto.mostraContatoreChiamate());

console.log(`Chilometraggio attuale tramite getter: ${auto.chilometraggioAttuale} km.`); */




/* class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
        this.#contatoreChiamate = 0;
        this.#contatoreAggiungiChilometri = 0; 
    }

    #contatoreChiamate;

    #contatoreAggiungiChilometri;

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    mostraContatore() {
        return `Il contatore delle chiamate è: ${this.#contatoreChiamate}`;
    }

    mostraContatoreChiamate() {
        return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreAggiungiChilometri} volte.`;
    }

    descrizione() {
        this.#incrementaContatore(); 
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

    aggiungiChilometri(km) {
        this.#incrementaContatore(); 
        this.#contatoreAggiungiChilometri++; 
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }

    get chilometraggioAttuale() {
        return this.chilometraggio;
    }

    set chilometraggioNuovo(nuovoValore) {
        if (nuovoValore >= this.chilometraggio) {
            this.chilometraggio = nuovoValore;
            console.log(`Chilometraggio aggiornato a ${nuovoValore} km.`);
        } else {
            console.log("Errore: il nuovo chilometraggio non può essere inferiore al valore attuale.");
        }
    }

    mostraChilometraggio() {
        this.#incrementaContatore(); 
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }
}

const auto = new Automobile("Fiat", "500", 2020, 50000);

console.log(auto.descrizione()); 
console.log(auto.mostraChilometraggio()); 
auto.aggiungiChilometri(1000); 
auto.aggiungiChilometri(500);
console.log(auto.mostraChilometraggio()); 

console.log(auto.mostraContatore());

console.log(auto.mostraContatoreChiamate()); 

console.log(`Chilometraggio attuale tramite getter: ${auto.chilometraggioAttuale} km.`);


auto.chilometraggioNuovo = 52000; 
auto.chilometraggioNuovo = 51000;  */



/* class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    
    descrizione() {
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

   
    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }

   
    mostraChilometraggio() {
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }
}


class Camion extends Automobile {
    constructor(marca, modello, anno, chilometraggio, capacitàCarico) {
        super(marca, modello, anno, chilometraggio); 
        this.capacitàCarico = capacitàCarico; 
    }


    descrizione() {
        return `${super.descrizione()} Ha una capacità di carico di ${this.capacitàCarico} tonnellate.`;
    }

  
    caricaCarico(peso) {
        if (peso <= this.capacitàCarico) {
            console.log(`Carico di ${peso} tonnellate aggiunto.`);
        } else {
            console.log("Carico troppo pesante per il camion!");
        }
    }

    scaricaCarico() {
        console.log("Carico scaricato.");
    }
}

const mioCamion = new Camion("Mercedes", "Actros", 2022, 150000, 20);

console.log(mioCamion.descrizione()); 


mioCamion.aggiungiChilometri(500);
console.log(mioCamion.mostraChilometraggio());


mioCamion.caricaCarico(15); 
mioCamion.caricaCarico(25); 
mioCamion.scaricaCarico();  */


/* class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione() {
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }

    mostraChilometraggio() {
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }
}

class Camion extends Automobile {
    constructor(marca, modello, anno, chilometraggio, capacitàCarico, caricoMassimo) {
        super(marca, modello, anno, chilometraggio);  
        this.capacitàCarico = capacitàCarico; 
        this.caricoMassimo = caricoMassimo;   
        this.caricoAttuale = 0; 
    }

    descrizione() {
        return `${super.descrizione()} Ha una capacità di carico di ${this.capacitàCarico} tonnellate e un carico massimo di ${this.caricoMassimo} kg.`;
    }

    carica(kg) {
        if (this.caricoAttuale + kg <= this.caricoMassimo) {
            this.caricoAttuale += kg;
            console.log(`Carico di ${kg} kg aggiunto. Carico attuale: ${this.caricoAttuale} kg.`);
        } else {
            console.log("Impossibile caricare. Il carico supera il limite massimo!");
        }
    }

    scaricaCarico() {
        console.log(`Carico di ${this.caricoAttuale} kg scaricato.`);
        this.caricoAttuale = 0; 
    }
}

const mioCamion = new Camion("Mercedes", "Actros", 2022, 150000, 20, 15000);

console.log(mioCamion.descrizione());

mioCamion.aggiungiChilometri(500);
console.log(mioCamion.mostraChilometraggio()); 


mioCamion.carica(5000); 
mioCamion.carica(10000); 
mioCamion.scaricaCarico();  */



/* class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione() {
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        } else {
            console.log("Non è possibile aggiungere un valore negativo di chilometri.");
        }
    }

    mostraChilometraggio() {
        return `Il chilometraggio attuale è di ${this.chilometraggio} km.`;
    }

    static verificaIstanza(obj, classe) {
        if (obj instanceof classe) {
            return `${obj.constructor.name} è un'istanza di ${classe.name}.`;
        } else {
            return `${obj.constructor.name} non è un'istanza di ${classe.name}.`;
        }
    }
}


class Camion extends Automobile {
    constructor(marca, modello, anno, chilometraggio, capacitàCarico, caricoMassimo) {
        super(marca, modello, anno, chilometraggio);  
        this.capacitàCarico = capacitàCarico;
        this.caricoMassimo = caricoMassimo;
        this.caricoAttuale = 0;
    }

    descrizione() {
        return `${super.descrizione()} Ha una capacità di carico di ${this.capacitàCarico} tonnellate e un carico massimo di ${this.caricoMassimo} kg.`;
    }

    
    carica(kg) {
        if (this.caricoAttuale + kg <= this.caricoMassimo) {
            this.caricoAttuale += kg;
            console.log(`Carico di ${kg} kg aggiunto. Carico attuale: ${this.caricoAttuale} kg.`);
        } else {
            console.log("Impossibile caricare. Il carico supera il limite massimo!");
        }
    }

  
    scaricaCarico() {
        console.log(`Carico di ${this.caricoAttuale} kg scaricato.`);
        this.caricoAttuale = 0;
    }
}

const auto = new Automobile("Fiat", "500", 2020);
const camion = new Camion("Mercedes", "Actros", 2022, 150000, 20, 15000); 


console.log(auto instanceof Automobile); 
console.log(camion instanceof Camion);    
console.log(camion instanceof Automobile);


console.log(Automobile.verificaIstanza(auto, Automobile)); 
console.log(Automobile.verificaIstanza(camion, Camion));   
console.log(Automobile.verificaIstanza(camion, Automobile)); 
console.log(Automobile.verificaIstanza(auto, Camion));     */

/* const arrayy = [1,2,3,4];

let [uno = "number", due = "number", tre = "number",quattro = "number",cinque = "number"] = arrayy;

console.log(cinque) */

/* const Carlo = { 
    nome:"Carlo Conti", 
    professione: "Conduttore",
    
};

let {nome, professione, età = "55", residenza = "Piemonte"} = Carlo;

console.log(`Nome: ${nome}`);         
console.log(`Età: ${età}`);           
console.log(`residenza: ${residenza}`);       
console.log(`Professione: ${professione}`);  */


/* let numeriOriginali = [1, 2, 3, 4, 5];

let copiaNumeri = [...numeriOriginali];

console.log("Array originale:", numeriOriginali); 
console.log("Copia dell'array:", copiaNumeri);     */

/* let giacomo = [1,2,3,4,5,6];

let gigi = [7,8,9,10,11];

let giacomogigi = [...giacomo,...gigi]

console.log(giacomogigi) */

/* 
const persona = {
    nome: "Marco",
    età: 30,
    città: "Roma"
  };

  const personaConProfessione = {
    ...persona,
    professione: "Ingegnere"
  };

  console.log("Oggetto originale:", persona);
  console.log("Oggetto modificato:", personaConProfessione); */

  
/*   const numbers = [1, 3, 5, 7, 10, 200, 35];
  
  function addNumbers(...numeri) {
    return numeri.reduce((acc, numero) => acc + numero, 0);
  }
  
  console.log(addNumbers(...numbers)); */

  const numbers = [1,2,3,4,5];

  let [a,b,...restOfNumbers] = numbers 

  console.log(a);
  console.log(b);
  console.log(restOfNumbers);

            
  


























                