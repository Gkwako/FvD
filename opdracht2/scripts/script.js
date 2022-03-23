// JavaScript Document
console.log("howdy");

// const URL ="https://openwhyd.org/adrien?format=json";

//haal de lijst 'ul' op uit de html
// const list = document.querySelector('ul');



// lijst

// function getMusic(){

//     getData(URL).then( 
//         data => {
//             console.log(data.allMusic);

//             var allMusic = data.music;

//             allMusic.forEach( 
//                 aNumber => {
//                     console.log(aNumber);

//                     var allMusicHTML =
//                     `
//                     <li>
//                     <h2>${aNumber.song},</h2>
//                     <img src="${aNumber.song}" alt="${allMusic.song}">
//                     <li/>
                    
//                     `;

//                     list.insertAdjacentHTML("beforeEnd", allMusicHTML);
//         }
//     );
// }

// );

// }

// async function getData(URL) {
// 	return (
// 		fetch(URL, { mode: 'no-cors' } )
// 		.then ( response => response.json() )
// 		.then ( jsonData => jsonData )
// 	);
// }


// getMusic();

// list.addEventListener("click", getMusic);



// mp3 songs

// let all_song = [
//     {
//         name: "2 step",
//         path: "muziek/Ed Sheeran - 2step .mp3",
//         img: "images/2Step.png",
//         singer: "Ed Sheeran"
//     },
//     {
//         name: "if i killed...you",
//         path: "muziek/Alec Benjamin - If I Killed Someone For You .mp3",
//         img: "images/alec.jpg",
//         singer: "Alec Benjamin"
//     },
//     {
//         name: "Ghost Town",
//         path: "muziek/Benson Boone - Ghost Town.mp3",
//         img: "images/benson.png",
//         singer: "Benson Boone"
//     },
//     {
//         name: "Half a man",
//         path: "muziek/Dean Lewis - Half A Man.mp3",
//         img: "images/deanLewis.jpg",
//         singer: "Ed Sheeran"
//     },
//     {
//         name: "Better Days",
//         path: "muziek/Dermot Kennedy - Better Days.mp3",
//         img: "images/dermotKennedy.jpg",
//         singer: "Dermot Kennedy"
//     },
//     {
//         name: "Officer Don't Let Go",
//         path: "muziek/Faffi - Officer Don't Let Go.mp3",
//         img: "images/jefferson.jpg",
//         singer: "Faffi"
//     }
// ];

// let tracks = document.querySelector('.tracks');

// for (let i = 0; i < all_song.length; i++){

//     let Html = ` <div class="song">
// 	<div class="img">
// 	<img src="${all_song[i].img}">
// 	</div>
// 	<div class="more">
// 	<audio src="${all_song[i].path}" id="music"></audio>
// 	<div class="song_info">
// 		<p id="title">${all_song[i].name}</p>
// 		<p>${all_song[i].singer}</p>
// 	</div>
// 	<button id="play_btn"><i class=fa fa-angle-right aria-hidden="true"></i></button>
// 	</div>
// 	</div>`;

//         tracks.insertAdjacentHTML("beforeend", Html);
// };