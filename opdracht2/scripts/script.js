// JavaScript Document
console.log("open searchbar");

var zoekbalk = document.querySelector(".search");
var zoeken = document.querySelector(".searchbar");
var kruisje = document.querySelector(".clear");

zoekbalk.onclick = function(){
  zoeken.classList.toggle('active')
  kruisje.classList.toggle('active')
}

kruisje.onclick = function(){
  kruisje.classList.toggle('active')
  zoeken.classList.toggle('active')
}


// -------------------------------------------
console.log("soort by name and song");

var sorteren = document.querySelector(".soort");
var zoeken = document.querySelector(".searchbar");
var kruisje = document.querySelector(".clear");

zoekbalk.onclick = function(){
  zoeken.classList.toggle('active')
  kruisje.classList.toggle('active')
}

kruisje.onclick = function(){
  kruisje.classList.toggle('active')
  zoeken.classList.toggle('active')
}



// -------------------------------------------
console.log("Search songs");

var options = {
  valueNames: [ 'name', 'song' ]
};

var zoekLijst = new List('playList', options);



// -------------------------------------------
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
		sort: false
});


// -------------------------------------------
console.log("music Time");

// api 
// https://www.theaudiodb.com
// https://www.theaudiodb.com/api_guide.php
const urlBase = "https://theaudiodb.com/api/v1/json/2/mvid.php?i=";

//lists
const listWalker = document.querySelector('ul.nirvana');
const listSnoopDog = document.querySelector('ul.snoop-dog');
const listAbba = document.querySelector('ul.abba');

// artists
const TomWalker = {
	"id": "152173",
	"name": "Tom Walker",
	"list": listWalker
};

const SnoopDog = {
	"id": "112059",
	"name": "Snoop Dog",
	"list": listSnoopDog
};

const ABBA = {
	"id": "111258",
	"name": "ABBA",
	"list": listAbba
};

// per artiest een object met daarin:
// - de id van de artiest
// - de naam van de artiest
// - de lijst waar de video's van de artiest in moeten komen





/****************/
/* VUL DE LIJST */
/****************/
function getVideos(artist) {
	// de api url
	// de base url + de id van de artiest (uit het artist object)
	var URL = urlBase + artist.id;
	
	// vraag de videos van de artist op
	getData(URL).then(
		data => {

			// sla de lijst met video-data op
			let allVideos = data.mvids;
      
			// dan elke video uit de lijst een voor een toevoegen
			allVideos.forEach( video => {
				
				// de youtube-id video zijn de laatste 11 karakters van de strMusicVid info
				const videoId = video.strMusicVid.substr(video.strMusicVid.length - 11);
				
				// de HTML samenstellen voor een embedded youtube video
				// met daarin de videoId die net bepaald is
				const iframeHTML = '<iframe width="187" height="105" src="//www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
				
				// dit stukje is net als gisteren
				// HTML schrijven voor de li
				// met daarin dusnamische stukjes:
				// - naam van nummer
				// - naam van artiest
				// - de HTML voor de embedded youtube video
				let videoHtml = `
					<li>
						${iframeHTML}
					</li>
				`;
				artist.list.insertAdjacentHTML("beforeEnd", videoHtml);
			});
		}
	);
}





/****************/
/* FETCH DATA   */
/* RETURNS JSON */
/****************/
async function getData(URL) {
	return (
		fetch(URL)
		.then ( response => response.json() )
		.then ( jsonData => jsonData )
	);
}
 





/*********/
/* START */
/*********/

// vul de nirvana list
// het object van de artiest wordt meegegeven
getVideos(TomWalker);

// vul de Snoop Dog list
getVideos(SnoopDog);

// vul de ABBA list
getVideos(ABBA);



// var options = {
//   animation: 1000
// }

// var playList = document.getElementById('playList');
// var sortable = Sortable.create('playList', options);

