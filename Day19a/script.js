let main = document.querySelector('main')
let box = document.getElementById('box')
let btn = document.querySelector('button')


btn.addEventListener('click' , changeColor)


function changeColor(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    box.style.backgroundColor = `rgb(${c1} , ${c2} , ${c3}`
    main.style.backgroundColor = `rgb(${c3} , ${c1} , ${c2}`
}