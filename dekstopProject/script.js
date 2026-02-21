let startMenu = document.getElementById('start-menu')
let windowButton = document.getElementById('left')
let main = document.querySelector('main')
let contextMenu = document.getElementById('context-menu')
let times = document.querySelector('.time')
let dates = document.getElementById('date')
window.addEventListener('contextmenu', showContext);


function updatetimes(){
     const now = new Date();
 const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
  dates.innerHTML = date
  times.innerHTML = time
}
updatetimes();                
setInterval(updatetimes, 60000); 

function showContext(e) {
  e.preventDefault();
  contextMenu.style.display = 'block'


let menuHeight = contextMenu.offsetHeight;
    let menuWidth = contextMenu.offsetWidth;
let y = e.clientY;
    let x = e.clientX;

    if (y + menuHeight > window.innerHeight) {
        y = y - menuHeight; 
    }
    if (x + menuWidth > window.innerWidth) {
        x = x - menuWidth; 
    }

  startMenu.style.transform = 'translateY(100%)';
  startMenu.style.opacity = '0';
  flag = true;
  contextMenu.style.top =  y + 'px'
  contextMenu.style.left =  x + 'px'
}
window.addEventListener('click', function(e) {
    contextMenu.style.display = 'none';
if (!startMenu.contains(e.target) && !windowButton.contains(e.target)) {
        startMenu.style.transform = 'translateY(100%)';
        startMenu.style.opacity = '0';
        flag = true; 
    }
});


windowButton.addEventListener('click' , showMenu);

let flag = true
function showMenu(){
    contextMenu.style.display = 'none';
  if(flag == true ){
      startMenu.style.transform =' translateY(0)'
    startMenu.style.opacity = '1'
    flag = false;
  }
  else {
        startMenu.style.transform =' translateY(100%)'
    startMenu.style.opacity = '0'
    flag = true;
  }
}