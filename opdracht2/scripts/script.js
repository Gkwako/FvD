// JavaScript Document

// --------------------------- dark mode
// function darkmode() {
//     var body = document.body;
// 	body.classList.toggle("darkmode");
// }

// --------------------------- grab songs
console.log("empty Time");

const plek1 = document.querySelector("#empty1");
const plek2 = document.querySelector("#empty2");
const plek3 = document.querySelector("#empty3");
const plek4 = document.querySelector("#empty4");

const lijst = document.querySelector("#playList");

new Sortable(empty1, {
    group: 'empties',
    animation: 100
});

new Sortable(empty2, {
    group: 'empties',
    animation: 100
});

new Sortable(empty3, {
    group: 'empties',
    animation: 100
});

new Sortable(empty4, {
    group: 'empties',
    animation: 100
});

new Sortable(playList, {
    group: 'empties',
    animation: 100,
		sort: true
});



// --------------------------- Searchbar
var zoekbalk = document.querySelector(".search");
var zoeken = document.querySelector(".searchbar");

var kruisje = document.querySelector(".clear");

zoekbalk.onclick = function(){
  console.log("open searchbar");
  zoeken.classList.toggle('active')
  kruisje.classList.toggle('active')
}

kruisje.onclick = function(){
  kruisje.classList.toggle('active')
  zoeken.classList.toggle('active')
}



// ---------------------------Search song
console.log("alfabetische volgorde songs");

var options = {
  valueNames: [ 'name', 'song' ]
};

var zoekLijst = new List('playList', options);


zoekLijst.sort('name', { order: "asc" });




// --------------------------- Youtube Songs
console.log("music Time");

