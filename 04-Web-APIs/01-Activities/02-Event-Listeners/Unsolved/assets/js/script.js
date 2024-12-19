var increment = document.querySelector('#increment');
var decrement = document.querySelector('#decrement');
var count = document.querySelector('#count');

let counter = 0;

increment.addEventListener('click', ()=> {
  counter++;
  counting(); 
})

function counting(){
  count.textContent = counter;
}

decrement.addEventListener('click', ()=> {
  if(counter > 0){
counter--;
  counting(); 
  }
  
})