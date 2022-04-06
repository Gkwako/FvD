// JavaScript Document
console.log("Music Time");

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








// var options = {
//   animation: 1000
// }

// var playList = document.getElementById('playList');
// var sortable = Sortable.create('playList', options);


var fill = document.querySelector('.fill');
var empties = document.querySelectorAll('.empty');

fill.addEventListener('start drag', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop throug empties and call drag
for(var empty of empties){
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragLeave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}


// Drag functions
function dragStart() { 
  console.log("start drag");
      setTimeout(() => (this.className = 'invisible'), 0 );
}

function dragEnd() { 
  console.log("end drag");
    this.className = 'fill'; 
}
    function dragOver(e) { 
      console.log("drag over");
        e.preventDefault(); // zorgt ervoor dat img niet terug gaat
      }
    function dragEnter(e) { 
      console.log("drag enter");
      e.preventDefault(); // zorgt ervoor dat img niet terug gaat
      this.append(fill); // fill kan voortbewegen tussen andere empty's
 
    }
    function dragLeave() { 
      console.log("drag leave");
        // this.className = 'empty';
        this.append(fill); // fill kan voortbewegen tussen andere empty's
  
    }
    function dragDrop() { 
      console.log("drag drop");
        this.className = 'empty';   
   }