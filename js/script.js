// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// inizio valutazione;

// Genero 16 numeri BOMBA (tutti diversi) e li pusho in un array.
var numeroBomba = [];
var numero_massimo = 100;
var numero_minimo= 16;
var numeri_inseribili= numero_massimo - numero_minimo;
console.log(numeri_inseribili);

while (numeroBomba.length < 16){ 

    var numeroGenerato = generaBmba(100);

    if (numeroBomba.includes(numeroGenerato)== false){
    
        numeroBomba.push(numeroGenerato);          
    
    }

}

function generaBmba(max){
    
    return Math.floor(Math.random() *  max) +1 ;
    
}

console.log (numeroBomba);
// creo un array he contiene i numeri corretti inseriti dal giocatore
var numeriGiocatore = [];

// creo una variabile d'appoggio booleana che mi dice se è stata trovata una bomba
var bombatrovata = false;
// ciclo while (non è esplosa nessuna bomba && il numero delle volte che l'utente ha dato un numero è < 84)
while (bombatrovata == false && numeriGiocatore.length < numeri_inseribili){

    // chiedi numero all'utente
    var numeroUtente = parseInt(prompt("Inserisci un Numero"));

     if (numeroBomba.includes(numeroUtente)){
        bombatrovata = true;
        alert("hai Trovato una Bombaaaaa");
    } else if ( numeriGiocatore.includes(numeroUtente)== false){
        numeriGiocatore.push(numeroUtente);
    } else{
        alert('questo numero è già stato inserito');
    }
   
}

alert("Hai totalizzato un punteggio di:  " + numeriGiocatore.length);
