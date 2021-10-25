
const selectcontainerMin = document.getElementById("punti");
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
let footballTeams = [
    {
        nome : "Juventus",
        punti : 0,
        falli : 0
    },
    {
        nome : "Napoli",
        punti : 0,
        falli : 0
    },
    {
        nome : "Milan",
        punti : 0,
        falli : 0
    },
    {
        nome : "Inter",
        punti : 0,
        falli : 0
    }
]

console.log(footballTeams);


// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
for(let a of footballTeams){
    a.falli = Math.floor((Math.random() * 10 ) + 1);
    a.punti = Math.floor((Math.random() * 10 ) + 1);
}



// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
let newArray = [];
let [nome , falli] = newArray;
for(let {nome, falli} of footballTeams){
    newArray.push({nome,falli});
}
console.log(newArray);


