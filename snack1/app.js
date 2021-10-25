const selectcontainerMin = document.getElementById("min-bici");
let bycicles = [
  {
    nome: "Scott",
    peso: 14,
  },
  {
    nome: "Cube",
    peso: 10,
  },
  {
    nome: "Trek",
    peso: 16,
  },
  {
    nome: "Giant",
    peso: 14,
  },
  {
    nome: "Rockrider",
    peso: 20,
  },
];



let min ;
const tmp = bycicles[0].peso;


for(let {nome, peso} of bycicles){
    if(peso < tmp){
        min = {nome, peso};
    };
}

// let min = bycicles.reduce((prev, curr) => prev.peso < curr.peso ? prev : curr);
console.log(min);

selectcontainerMin.innerHTML =
 `<div>
<p>Il marchio ${min.nome}</p>
<p>peso ${min.peso}</p>
</div>`



