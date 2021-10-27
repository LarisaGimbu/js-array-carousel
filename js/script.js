const up = document.getElementById('up');
const down = document.getElementById('down');

const item = document.getElementsByClassName('item');
const aItem = document.getElementsByClassName('a-item');

let contatore = 0;


up.addEventListener('click' , function(){
  item[contatore].classList.remove('active');
  aItem[contatore].classList.remove('active');

  contatore-- ;
  if(contatore < 0) contatore = item.length - 1;

  item[contatore].classList.add('active');
  aItem[contatore].classList.add('active');
})

down.addEventListener('click' , function(){
  item[contatore].classList.remove('active');
  aItem[contatore].classList.remove('active');

  contatore++ ;
  if(contatore > item.length - 1) contatore = 0;

  item[contatore].classList.add('active');
  aItem[contatore].classList.add('active');
})

