let main = document.querySelector('main')
let heading = document.getElementById('heading')

let text = heading.innerText;
let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
main.addEventListener('mousemove'  , function(e) {
    main.style.setProperty("--x" , e.clientX + "px" )
    main.style.setProperty("--y" , e.clientY + "px" )
})


   let iteration = 0
   let id = null
heading.addEventListener('mouseenter'  , function() {
 clearInterval(id)
  iteration = 0    
    id =  setInterval(() => {
let str = text.split('').map((char , idx) =>{
    if(idx < iteration){
        return char
    }
        return alph.split("")[Math.floor(Math.random()*53)]
}).join("")  
heading.innerText = str
iteration += 0.2;



 if (iteration >= text.length) {
            clearInterval(id)  
        }
    } , 30)
    
})