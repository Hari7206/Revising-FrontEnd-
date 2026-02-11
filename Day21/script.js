let inner = document.getElementById('inner')
let button = document.getElementById('btn')
let num = document.getElementById('num')
let box = document.querySelector('.box')
button.addEventListener('click', startDownload)
let grow = 0
function startDownload() {
    let p = document.createElement('p')
    let no = 50 + Math.floor(Math.random() * 50)
    box.append(p)

    let inter = setInterval(() => {
        p.innerText = "Downloaded in : " + no / 10 + " second";
        button.style.pointerEvents = 'none'
        button.innerHTML = 'Downloading...'
        button.style.opacity = 0.6;
        grow++
        inner.style.width = grow + '%'
        num.innerHTML = grow + ' %'
    }, no);

    setTimeout(() => {
        clearInterval(inter)
        button.style.opacity = 0.5;
        button.innerHTML = 'Downloaded'
    }, no * 100);
}