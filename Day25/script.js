let main = document.querySelector('main')
let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
main.addEventListener('mousemove'  , function(e) {
    main.style.setProperty("--x" , e.clientX + "px" )
    main.style.setProperty("--y" , e.clientY + "px" )
})