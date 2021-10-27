const up = document.getElementById('up');
const down = document.getElementById('down');

const item = document.querySelector('.item');
const aItem = document.querySelector('.a-item');

let contatore = 0;

up.addEventListener('click' , function(){
  contatore-- ;
  console.log(contatore)
})

down.addEventListener('click' , function(){
  contatore++ ;
  console.log(contatore)
})